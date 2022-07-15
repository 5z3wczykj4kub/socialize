import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../lib/session';

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  req.session.destroy();
  res.end();
};

export default withSessionRoute(logout);
