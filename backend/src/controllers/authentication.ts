import express from 'express';
import { getUserByEmail, createUserRecord, getUserAuthentication, updateUserSession } from '../actions/users';
import { authentication, random } from '../helpers';
import { UserToBeCreated } from 'interfaces/users';

// Creates an user record.
export const createUser = async (values: UserToBeCreated) => {
  const user = await createUserRecord(values);
  return user;
};

// Register controller.
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

//SignIn controller.
export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Se requieren el correo electrónico y la contraseña.' });
    }
    const user = await getUserAuthentication(email);

    if (!user) {
      return res.status(400).json({ error: 'El correo electrónico no está registrado.' });
    }

    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password != expectedHash) {
      return res.status(403).json({ error: 'La contraseña proporcionada es incorrecta.' });
    }

    const salt = random();
    user.authentication.sessionToken = authentication(salt, user.id.toString());

    await updateUserSession(user);

    res.cookie('LOGGED-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/' });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Se produjo un error interno en el servidor.' });
  }
};