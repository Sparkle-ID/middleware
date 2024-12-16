import express, {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import { currentUser } from '@sparkleid/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req: any, res: any) => {
  
    res.send({ currentUser: req.currentUser || null });
    
});

export { router as currentUserRouter };