import express from 'express';
import { merge, get } from 'lodash';
import { getUserBySessionToken } from '../actions/users'; 

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const sessionToken = req.cookies['LOGGED-AUTH'];

    if (!sessionToken) {
      return res.status(403).json({ error: 'Acceso no autorizado. Debe iniciar sesión.' });
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.status(403).json({ error: 'La sesión ha caducado o es inválida. Inicie sesión nuevamente.' });
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Se produjo un error interno en el servidor: \n' + error });
  }
}

export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, 'identity._id') as string | undefined;

    if (!currentUserId) {
      return res.status(400).json({ error: 'El usuario no está autenticado.' });
    }

    if (currentUserId.toString() !== id) {
      return res.status(403).json({ error: 'No tiene permisos para acceder a este recurso.' });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Se produjo un error interno en el servidor.' });
  }
}
