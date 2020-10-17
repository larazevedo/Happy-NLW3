import { Router } from 'express';
import OrphanagesCotroller from './controllers/OrphanagesController'

const routes = Router();

routes.post('/orphanages', OrphanagesCotroller.create);   

export default routes;