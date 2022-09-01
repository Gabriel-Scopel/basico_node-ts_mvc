import {Request, Response} from 'express';
import {Product} from '../models/Products';
export const home = (req: Request, res: Response)=>{
    let showWelcome: boolean = true;
    let age = 90;
    if(age>18){
        showWelcome = true;
    }else{
        showWelcome = false
    } 

    let list = Product.getAll;
    let expensiveList = Product.getFromPriceAfter(12);
    let user={  //criando objeto para poder usar suas propriedades no view dessa rota
        name:'gabriel',
        age:age,
        
    };
    res.render('pages/home', {
        user, //pegando o objeto que será usado no arquivo view (home)
        showWelcome,
        products: list,
        expensive: expensiveList
    });
}