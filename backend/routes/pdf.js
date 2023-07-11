import express from 'express';
import { 
  generatePdf,
  getMetadata,
} from '../controllers/pdf.js';
import { authenticate } from '../middlewares/auth.js';

const router = express.Router();

router.use(authenticate);

router
  .route('/metadata')
  .get(getMetadata);

router
  .route('/')
  .post(generatePdf);

export default router;
