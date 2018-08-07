import { parseAdvpl , lexAdvpl, gettokenVocabulary } from "../src/parser/advplParser";

import { expect } from 'chai';
import 'mocha';
import { tokenMatcher } from "chevrotain";
describe('Minimal lex', () => {
  it('should return 0 erros', () => {
    const lexingResult = lexAdvpl("function tste()\nreturn");
    expect(lexingResult.errors).to.be.empty;
    let tokenVocabulary = gettokenVocabulary();
    let tokens = lexingResult.tokens
    expect(tokenMatcher(tokens[0], tokenVocabulary["FunctionToken"])).to.be.true;
    expect(tokenMatcher(tokens[1], tokenVocabulary["Identifier"])).to.be.true;

  });
});