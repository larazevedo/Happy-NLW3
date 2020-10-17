import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesCotroller from './controllers/OrphanagesController'

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesCotroller.index);
routes.get('/orphanages/:id', OrphanagesCotroller.show);
routes.post('/orphanages', upload.array('images'), OrphanagesCotroller.create);   

export default routes;