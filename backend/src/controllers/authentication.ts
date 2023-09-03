import express from 'express';

import { getUserByEmail, createUser } from '../db/users';
import { authentication, random } from '../helpers';

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ error: 'Faltan datos obligatorios (email, password, username)' });
    }

    const existingUser = await getUserByEmail(email);
  
    if (existingUser) {
      return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Se produjo un error interno en el servidor' });
  }
}

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Se requieren el correo electrónico y la contraseña.' });
    }

    const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');

    if (!user) {
      return res.status(400).json({ error: 'El correo electrónico no está registrado.' });
    }

    const expectedHash = authentication(user.authentication.salt, password);
    
    if (user.authentication.password != expectedHash) {
      return res.status(403).json({ error: 'La contraseña proporcionada es incorrecta.' });
    }

    const salt = random();
    user.authentication.sessionToken = authentication(salt, user._id.toString());

    await user.save();

    res.cookie('LOGGED-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/' });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Se produjo un error interno en el servidor.' });
  }
};