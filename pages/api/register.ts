import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../lib/session';

interface IRegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  residence: string;
}

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, confirmPassword, gender, dateOfBirth, residence } =
    req.body as IRegisterFormValues;

  /**
   * TODO:
   * Validate user input.
   * Save to a database which is yet to connect.
   */
  console.log(email, password, confirmPassword, gender, dateOfBirth, residence);

  res.end();

  // return res.status(400).json({
  //   errors: [
  //     {
  //       message: "Invalid credentials or user's data",
  //     },
  //   ],
  // });
};

export type { IRegisterFormValues };

export default withSessionRoute(register);
