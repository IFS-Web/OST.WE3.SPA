import express from 'express';
import {raceCounterController} from '../controllers/raceCounterController';

const router = express.Router();

router.get('/', raceCounterController.getCounter);

router.post('/up', raceCounterController.up);

export const raceCounterRouter = router;
