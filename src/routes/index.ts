import {Router} from 'express'

const router = Router();
import * as homeController from '../controllers/homeController';
import * as infoController from '../controllers/infoController';
import * as userController from '../controllers/userController';


router.get('/', homeController.home); //usando a função home do arquivo homeController

router.get('/contato',infoController.contato);

router.get('/sobre',infoController.sobre);

router.get('/nome',userController.nome);

router.get('/idade',userController.idadeForm);

router.post('/idade/resultado',userController.idadeAction);

export default router;
