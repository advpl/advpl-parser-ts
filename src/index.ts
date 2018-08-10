import fs = require("fs");
import {
    createToken,
    Lexer,
    Parser,
    IToken,
    ILexingError,
    IRecognitionException
} from "chevrotain"
import { parseAdvpl } from "./parser/advplParser";
import { AdvplVisitorWithDefaults } from "./visitor/testVisit";

//const inputText = '{ "arr" [1,2,3], "obj": {"num":666}}'
//const lexAndParseResult = parseJson(inputText)
//console.log(lexAndParseResult.lexErrors.length);
//const inputText = 'Function TESte()\nlocal xvar := 10 <= 20 \nReturn'
/*fs.readFile("C:\\Totvs\\vscode\\wk_lib_master\\AdvplFramework\\src\\MVC-View\\generico\\fwformbrowse.prw",
        async (err, data) => {
            if (err) {
                throw err;
            }
    const lexAndParseResult = parseAdvpl(data.toString("utf8"));*/
    const inputText = 'main function teste(pra)\nLocal nx := {||xpto()}\nreturn'
    const lexAndParseResult = parseAdvpl(inputText);
    const visit = new AdvplVisitorWithDefaults()
    visit.visit(lexAndParseResult);
    console.log(lexAndParseResult);
        //});

