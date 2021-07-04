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

describe('Function with parameters', () => {
  it('should return 0 erros', () => {
    const lexingResult = lexAdvpl("function testing(param01,param02,param03)\nreturn nil");
    expect(lexingResult.errors).to.be.empty;
    let tokenVocabulary = gettokenVocabulary();
    let tokens = lexingResult.tokens
    expect(tokenMatcher(tokens[0], tokenVocabulary["FunctionToken"])).to.be.true;
    expect(tokenMatcher(tokens[1], tokenVocabulary["Identifier"])).to.be.true;

  });
});

describe('Main function with parameters', () => {
  it('should return 0 erros', () => {
    const lexingResult = lexAdvpl("main function testing(param01,param02)\nreturn nil");
    expect(lexingResult.errors).to.be.empty;
    let tokenVocabulary = gettokenVocabulary();
    let tokens = lexingResult.tokens
    expect(tokenMatcher(tokens[0], tokenVocabulary["MainToken"])).to.be.true;
    expect(tokenMatcher(tokens[1], tokenVocabulary["FunctionToken"])).to.be.true;
    expect(tokenMatcher(tokens[2], tokenVocabulary["Identifier"])).to.be.true;

  });
});

describe('User function with parameters', () => {
  it('should return 0 erros', () => {
    const lexingResult = lexAdvpl("user function testing(param01,param02)\nreturn nil");
    expect(lexingResult.errors).to.be.empty;
    let tokenVocabulary = gettokenVocabulary();
    let tokens = lexingResult.tokens
    expect(tokenMatcher(tokens[0], tokenVocabulary["UserToken"])).to.be.true;
    expect(tokenMatcher(tokens[1], tokenVocabulary["FunctionToken"])).to.be.true;
    expect(tokenMatcher(tokens[2], tokenVocabulary["Identifier"])).to.be.true;

  });
});

describe('Static function with parameters', () => {
  it('should return 0 erros', () => {
    const lexingResult = lexAdvpl("static function testing(param01,param02)\nreturn nil");
    expect(lexingResult.errors).to.be.empty;
    let tokenVocabulary = gettokenVocabulary();
    let tokens = lexingResult.tokens
    expect(tokenMatcher(tokens[0], tokenVocabulary["StaticToken"])).to.be.true;
    expect(tokenMatcher(tokens[1], tokenVocabulary["FunctionToken"])).to.be.true;
    expect(tokenMatcher(tokens[2], tokenVocabulary["Identifier"])).to.be.true;

  });
});

describe('Start function name with number', () => {
  it('should return 1 erros', () => {
    const lexingResult = lexAdvpl("function 666func()\nreturn");
    let tokenVocabulary = gettokenVocabulary();
    let tokens = lexingResult.tokens
    expect(tokenMatcher(tokens[0], tokenVocabulary["FunctionToken"])).to.be.true;
    expect(tokenMatcher(tokens[1], tokenVocabulary["Identifier"])).to.be.false;
  });
});