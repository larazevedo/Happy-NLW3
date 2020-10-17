import { Router } from 'express';
import OrphanagesCotroller from './controllers/OrphanagesController'

const routes = Router();

routes.get('/orphanages', OrphanagesCotroller.index);
routes.get('/orphanages/:id', OrphanagesCotroller.show);
routes.post('/orphanages', OrphanagesCotroller.create);   

export default routes;