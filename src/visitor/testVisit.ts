import { getBaseCstVisitorConstructorWithDefaults } from "../parser/advplParser";


const BaseCstVisitorConstructor = getBaseCstVisitorConstructorWithDefaults();

export class AdvplVisitorWithDefaults extends BaseCstVisitorConstructor {
    constructor() {
        super()
        this.validateVisitor()
    }

    /* Visit methods go here */
  /*  functionStatement(ctx){
        console.log(ctx);
    }*/
    /*arrayOrBlockInitializer(ctx){
        console.log(ctx);
    }*/
}