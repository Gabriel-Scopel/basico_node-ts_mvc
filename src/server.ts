import express, {Request, Response} from 'express'; //tipando req e res
import path from 'path';
import mainRoutes from './routes/index';
import mustache from 'mustache-express';

const server = express();
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views' ));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public'))) //usando path para pegar caminho absoluto até a pasta do projeto
server.use(express.urlencoded({extended: true})) //função para permitir método post 
server.use(mainRoutes);

server.use((req:Request, res:Response)=>{//caso nenhuma das nossas rotas funcione, ele executa essa, de rota não encontrada
    res.status(404).send('Página não encontrada.');
})

 server.listen(80)