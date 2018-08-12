import {
    createToken,
    Lexer,
    Parser,
    EOF,
    IToken,
    ILexingError,
    IRecognitionException
} from "chevrotain"
import {genHTML} from '../util/gen_diagrams';
//Tokens

const PlusPlus = createToken({ name: "PlusPlus", pattern: /\+\+/ })
const MinusMinus = createToken({ name: "MinusMinus", pattern: /--/ })


//---------------------------------------------------------------------
// Lexes groups
//---------------------------------------------------------------------
const AdditionOperator  = createToken({ name: "AdditionOperator", pattern: Lexer.NA })
const MultiplicationOperator   = createToken({ name: "MultiplicationOperator", pattern: Lexer.NA })
const LiteralGroup   = createToken({ name: "LiteralGroup", pattern: Lexer.NA })
const AssignmentGroup   = createToken({ name: "AssignmentGroup", pattern: Lexer.NA })
const LogicGroup   = createToken({ name: "LogicGroup", pattern: Lexer.NA })
const RelationalGroup   = createToken({ name: "RelationalGroup", pattern: Lexer.NA })

//---------------------------------------------------------------------
// Relational Tokens
//---------------------------------------------------------------------
const Minor = createToken({ name: "Minor", pattern: /</, categories:RelationalGroup})
const Major = createToken({ name: "Major", pattern: />/, categories:RelationalGroup })
const Equals = createToken({ name: "Equals", pattern: /\=/, categories:RelationalGroup  })
const MinorEquals = createToken({ name: "MinorEquals", pattern: /\<\=/, categories:RelationalGroup  })
const MajorEquals = createToken({ name: "MajorEquals", pattern: />\=/, categories:RelationalGroup  })
const DoubleEquals = createToken({ name: "DoubleEquals", pattern: /\=\=/, categories:RelationalGroup  })
const NotEquals = createToken({ name: "NotEquals", pattern: /!\=/, categories:RelationalGroup  })
const NotEqualsOp2 = createToken({ name: "NotEqualsOp2", pattern: /<>/, categories:RelationalGroup  })
//const NotEqualsOp3 = createToken({ name: "NotEqualsOp3", pattern: /#/ })
const Contained = createToken({ name: "Contained", pattern: /\$/, categories:RelationalGroup  })

//---------------------------------------------------------------------
// Assignment Tokens
//---------------------------------------------------------------------
const PlusEquals = createToken({ name: "PlusEquals", pattern: /\+\=/ , categories:AssignmentGroup})
const MinusEquals = createToken({ name: "MinusEquals", pattern: /-\=/, categories:AssignmentGroup })
const MultiEquals = createToken({ name: "MultiEquals", pattern: /\*\=/, categories:AssignmentGroup })
const DivEquals = createToken({ name: "DivEquals", pattern: /\/\=/ , categories:AssignmentGroup})
const Assignment = createToken({ name: "Assignment", pattern: /:=/, categories:AssignmentGroup })


const Plus = createToken({ name: "Plus", pattern: /\+/ , categories: AdditionOperator})
const Minus = createToken({ name: "Minus", pattern: /-/, categories: MultiplicationOperator })
const Mult = createToken({ name: "Mult", pattern: /\*/, categories: MultiplicationOperator })
const Div = createToken({ name: "Div", pattern: /\//, categories: MultiplicationOperator })
const Pow = createToken({ name: "Pow", pattern: /\*\*/, categories: MultiplicationOperator })
const Pow2 = createToken({ name: "Pow", pattern: /\^/, categories: MultiplicationOperator })
const Perc = createToken({ name: "Perc", pattern: /%/, categories: MultiplicationOperator })
const At = createToken({ name: "At", pattern: /@/ })
const Ampersand = createToken({ name: "Ampersand", pattern: /&/ })
//---------------------------------------------------------------------
// Words reserved
//---------------------------------------------------------------------
/*

*/
const Identifier = createToken({ name: "Identifier", pattern: /[a-zA-Z_]\w*/ });
const MainToken = createToken({ name: "MainToken", pattern: /main/i })
const UserToken = createToken({ name: "UserToken", pattern: /user/i })
const ProjectToken = createToken({ name: "ProjectToken", pattern: /project/i })
const WebToken = createToken({ name: "WebToken", pattern: /web/i })
const TemplateToken = createToken({ name: "TemplateToken", pattern: /template/i })

const ClassToken = createToken({ name: "ClassToken", pattern: /class/i, longer_alt: Identifier });
const DataToken = createToken({ name: "DataToken", pattern: /data/i , longer_alt: Identifier});
const FromToken = createToken({ name: "FromToken", pattern: /from/i , longer_alt: Identifier});
const MethodToken = createToken({ name: "MethodToken", pattern: /method/i , longer_alt: Identifier})
const EndClassToken = createToken({ name: "EndClassToken", pattern: /endclass/i , longer_alt: Identifier})

const WsServiceToken = createToken({ name: "WsService", pattern: /wsservice/i })
const WsMethodToken = createToken({ name: "WsMethod", pattern: /wsmethod/i })
const WsDataToken = createToken({ name: "WsData", pattern: /wsdata/i })
const EndWsServiceToken = createToken({ name: "EndWsService", pattern: /endwsservice/i })

const WsStructToken = createToken({ name: "WsStruct", pattern: /wsstruct/i })
const EndStructToken = createToken({ name: "EndStruct", pattern: /endstruct/i })


const WsClientToken = createToken({ name: "WsClient", pattern: /wsclient/i })
const EndClientToken = createToken({ name: "EndClient", pattern: /endclient/i })




const FunctionToken = createToken({ name: "FunctionToken", pattern: /function/i , longer_alt: Identifier})
const CaseToken = createToken({ name: "CaseToken", pattern: /case/i , longer_alt: Identifier })
const DoToken = createToken({ name: "DoToken", pattern: /do/i , longer_alt: Identifier})
const ToToken = createToken({ name: "ToToken", pattern: /to/i , longer_alt: Identifier})
const ForToken = createToken({ name: "ForToken", pattern: /for/i , longer_alt: Identifier})
const LocalToken = createToken({ name: "LocalToken", pattern: /local/i , longer_alt: Identifier })
const LoopToken = createToken({ name: "LoopToken", pattern: /loop/i , longer_alt: Identifier})
const NextToken = createToken({ name: "NextToken", pattern: /next/i , longer_alt: Identifier})
const IfToken = createToken({ name: "IfToken", pattern: /if/i , longer_alt: Identifier})
const ElseIfToken = createToken({ name: "ElseIfToken", pattern: /elseif/i, longer_alt: Identifier })
const ElseToken = createToken({ name: "ElseToken", pattern: /else/i, longer_alt: Identifier })
const ExitToken = createToken({ name: "ExitToken", pattern: /exit/i, longer_alt: Identifier })
const EndifToken = createToken({ name: "EndifToken", pattern: /endif/i, longer_alt: Identifier })
const EndCaseToken = createToken({ name: "EndCaseToken", pattern: /endcase/i , longer_alt: Identifier})
const EndDoToken = createToken({ name: "EndDoToken", pattern: /enddo/i , longer_alt: Identifier})
const EndToken = createToken({ name: "EndToken", pattern: /end/i , longer_alt: Identifier})
const StepToken = createToken({ name: "StepToken", pattern: /step/i , longer_alt: Identifier})
const OtherwiseToken = createToken({ name: "OtherwiseToken", pattern: /otherwise/i , longer_alt: Identifier})
const PublicToken = createToken({ name: "PublicToken", pattern: /public/i, longer_alt: Identifier })
const PrivateToken = createToken({ name: "PrivateToken", pattern: /private/i, longer_alt: Identifier })
const ReturnToken = createToken({ name: "ReturnToken", pattern: /return/i, longer_alt: Identifier })
const StaticToken = createToken({ name: "StaticToken", pattern: /static/i, longer_alt: Identifier })
const selfToken = createToken({ name: "selfToken", pattern: /self/i, longer_alt: Identifier })
const superToken = createToken({ name: "superToken", pattern: /_Super/, longer_alt: Identifier })
const WhileToken = createToken({ name: "WhileToken", pattern: /while/i, longer_alt: Identifier })


const Not = createToken({ name: "Not", pattern: /\.not\./i ,categories: LogicGroup})
const And = createToken({ name: "And", pattern: /\.and\./i ,categories: LogicGroup})
const Or = createToken({ name: "Or", pattern: /\.or\./i ,categories: LogicGroup })
const Dot = createToken({ name: "Dot", pattern: /\./ })
const Not2 = createToken({ name: "Not", pattern: /\!/ })

const SemiColon = createToken({ name: "SemiColon", pattern: /;/ })
const LCurly = createToken({ name: "LCurly", pattern: /{/ })
const RCurly = createToken({ name: "RCurly", pattern: /}/ })
const LParam = createToken({ name: "LParam", pattern: /\(/ })
const RParam = createToken({ name: "RParam", pattern: /\)/ })
const LSquare = createToken({ name: "LSquare", pattern: /\[/ })
const RSquare = createToken({ name: "RSquare", pattern: /]/ })
const Pipe = createToken({ name: "Pipe", pattern: /\|/ })
const Comma = createToken({ name: "Comma", pattern: /,/ })

const Colon = createToken({ name: "Colon", pattern: /:/ })
const ColonColon = createToken({ name: "ColonColon", pattern: /::/ })

//---------------------------------------------------------------------
// Chs ids
//---------------------------------------------------------------------
//const ParamTypeToken = createToken({ name: "ParamTypeToken", pattern: /paramtype/i , longer_alt: Identifier})


const IncludeToken = createToken({ name: "IncludeToken", pattern: /#include/i });
const DefineToken = createToken({ name: "DefineToken", pattern: /#define/i });
const IfDefToken = createToken({ name: "IfDefToken", pattern: /#ifdef/i });
const EndifDefToken = createToken({ name: "EndifDefToken", pattern: /#endif/i });




const As = createToken({ name: "As", pattern: /as/i , longer_alt: Identifier});
const Of = createToken({ name: "Of", pattern: /of/i , longer_alt: Identifier});

const Comment = createToken({
    name: 'Comment',
    pattern: /\/\*[^]*?\*\//,
    // HIGHLIGHT:
    // By using the "group" option, the comments
    // will be collected into a separate array property
    // This means comments can do both (unlike pegjs):
    // 1. Appear anywhere.
    // 2. can be completely ignored when implementing the grammar.
    group: 'comments',
    line_breaks: true
  });
  const LineComment = createToken({
    name: 'Comment',
    pattern: /\/\/.*/,    
    group: 'comments'
    
  });
//---------------------------------------------------------------------
// Literal
//---------------------------------------------------------------------
  
const StringLiteral = createToken({
    name: "StringLiteral",
    pattern: /"(:?[^\\"]|\\(:?[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/,
    categories: LiteralGroup
})
const StringLiteralSimple = createToken({
    name: "StringLiteralSimple",
    pattern: /'(:?[^\\']|\\(:?[bfnrtv'\\/]|u[0-9a-fA-F]{4}))*'/,
    categories: LiteralGroup
})
const NumberLiteral = createToken({
    name: "NumberLiteral",
    pattern: /-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/,
    categories: LiteralGroup
})
const True = createToken({ 
    name: "True",
     pattern: /\.t\./i,
     categories: LiteralGroup
     })
const False = createToken({ 
    name: "False", 
    pattern: /\.f\./i,
    categories: LiteralGroup
 })
const Nil = createToken({
     name: "Nil", 
     pattern: /nil/i,
     categories: LiteralGroup
     })



const CRLF = createToken({
    name: "CRLF",
    pattern: /[\r]?[\n]/    
})
/*const CRLF_ESCAPED = createToken({
    name: "CRLF_ESCAPED",
    pattern: /;[\r]?[\n]/    
})
  CRLF_ESCAPED,
*/
const WhiteSpace = createToken({
    name: "WhiteSpace",
    pattern: /[ \t]+/,
    group: Lexer.SKIPPED
})
const allTokens = [
    WhiteSpace,
    CRLF,  
    Comment,
    LineComment,
    As,
    Of,
    MinorEquals,
    MajorEquals,
    DoubleEquals,
    NotEquals,
    NotEqualsOp2,    
    Contained,
    PlusPlus,
    MinusMinus,
    PlusEquals,
    MinusEquals,
    MultiEquals,
    DivEquals,
    Plus,
    Minus,
    Mult,
    Div,
    Pow,
    Pow2,
    Perc,
    At,
    Ampersand,
    NumberLiteral,
    StringLiteral,
    StringLiteralSimple,
    Minor,
    Major,
    Equals,
    LCurly,
    RCurly,
    LSquare,
    RSquare,
    LParam,
    RParam,
    Comma,
    SemiColon,
    Pipe,
    Assignment,
    ColonColon,
    Colon,    
    True,
    False,
    Not,
    And,
    Or,
    Dot,
    Not2,
    Nil,
    FunctionToken,
    CaseToken,
    DoToken,
    ToToken,
    ForToken,
    LocalToken,
    LoopToken,
    NextToken,
    IfToken,
    ElseIfToken,
    ElseToken,
    ExitToken,
    EndifToken,
    EndCaseToken,
    EndDoToken,    
    StepToken,
    OtherwiseToken,
    PublicToken,
    PrivateToken,
    ReturnToken,
    StaticToken,
    selfToken,
    superToken,
    WhileToken,
    IncludeToken,
    DefineToken,
    IfDefToken,
    EndifDefToken,
    MainToken,
    UserToken,
    ProjectToken,
    WebToken,
    TemplateToken,
    ClassToken,
    DataToken,
    FromToken,
    MethodToken,
    EndClassToken,
    WsServiceToken,
    WsMethodToken,
    WsDataToken,
    EndWsServiceToken,
    WsStructToken,
    EndStructToken,
    WsClientToken,
    EndClientToken,
    EndToken,
    AdditionOperator,
    MultiplicationOperator,
    LiteralGroup,
    AssignmentGroup,
    LogicGroup,
    RelationalGroup,    
    Identifier
]
const AdvplLexer = new Lexer(allTokens, {  ensureOptimizations : true  })


//---------------------------------------------------------------------
// Parser
//---------------------------------------------------------------------
class AdvplParser extends Parser {
    constructor(input){
        super(input,allTokens, { outputCst : true,  recoveryEnabled: true });
        this.performSelfAnalysis();     
    }
    public program = this.RULE("program", () => {
        this.MANY(() => {
            this.OR([
                { ALT: () => this.SUBRULE(this.preprocessorDeclaration)},
                { ALT: () => this.SUBRULE(this.methodBody)},                
                { ALT: () => this.SUBRULE(this.functionDeclaration)},
                { ALT: () => this.SUBRULE(this.classDeclaration)},
                { ALT: () => this.SUBRULE(this.staticVariable)},
                { ALT: () => this.SUBRULE(this.crlfStatement)}
            ]);
        })
    });
    
    public preprocessorDeclaration= this.RULE("preprocessorDeclaration", () => {
        this.OR([
            { ALT: () => this.SUBRULE(this.includeDeclaration)},
            { ALT: () => this.SUBRULE(this.defineDeclaration)}            
        ]);
    });

    public includeDeclaration= this.RULE("includeDeclaration", () => {
        this.CONSUME(IncludeToken);        
        this.OR([
            {ALT:() => this.CONSUME(StringLiteral)},
            {ALT:() => this.CONSUME(StringLiteralSimple)}
        ]);        
    });
    public defineDeclaration= this.RULE("defineDeclaration", () => {
        this.CONSUME(DefineToken);
        this.SUBRULE(this.identifierStatement);
        this.SUBRULE(this.expression);        
    });
      
    public staticVariable= this.RULE("staticVariable", () => {
        this.CONSUME(StaticToken);
        this.AT_LEAST_ONE_SEP({
            SEP: Comma,
            DEF: () => {
                this.SUBRULE(this.expression);
                this.OPTION( () => {
                    this.CONSUME(As);
                    this.SUBRULE1(this.identifierStatement);
                })
            }  
        });
    });

    public statement = this.RULE("statement", () => {
        this.OR([
            { ALT: () => this.SUBRULE(this.crlfStatement)},            
            { ALT: () => this.SUBRULE(this.ifStatement)},
            { ALT: () => this.SUBRULE(this.forStatement)},
            { ALT: () => this.SUBRULE(this.doStatement)},
            { ALT: () => this.SUBRULE(this.expression)},
            { ALT: () => this.SUBRULE(this.returnStatement)}
        ]);
    });
    public functionDeclaration = this.RULE("functionDeclaration", () => {
        this.OPTION( () => {
            this.SUBRULE(this.modifiersFunction);
        })
        this.CONSUME(FunctionToken);        
        this.SUBRULE(this.identifierStatement);
        this.CONSUME(LParam);
        this.OPTION1( () => {
            this.SUBRULE1(this.formalParameters);
        });        
        this.CONSUME(RParam);
        this.SUBRULE2(this.crlfStatement);
        this.OPTION2( () => {
            this.SUBRULE3(this.initFuncOrMethod);
        })
        this.SUBRULE4(this.block);        
    });
    public initFuncOrMethod= this.RULE("initFuncOrMethod", () => {
        this.MANY(() => {
            this.CONSUME(LocalToken);
            this.SUBRULE(this.localVariableDeclarationStatement);
            this.SUBRULE1(this.crlfStatement);
        });
    });
    public localVariableDeclarationStatement= this.RULE("localVariableDeclarationStatement", () => {
        this.AT_LEAST_ONE_SEP({
            SEP: Comma,
            DEF: () => {
                this.SUBRULE(this.expression);
                this.OPTION( () => {
                    this.CONSUME(As);
                    this.SUBRULE1(this.identifierStatement);
                })
            }  
        });
    });
    
    public identifierStatement= this.RULE("identifierStatement", () => {
        this.OR([
            {ALT:() => this.CONSUME(selfToken)},
            {ALT:() => this.CONSUME(superToken)},            
            {ALT:() => {
                this.CONSUME(ColonColon);
                this.CONSUME1(Identifier);
                }
            },
            {ALT:() => this.CONSUME(Identifier)}
            
            
        ]);    
    });
    public modifiersFunction = this.RULE("modifiersFunction", () => {
        this.OR([
            {ALT:() => this.CONSUME(UserToken)},
            {ALT:() => this.CONSUME(StaticToken)},
            {ALT:() => this.CONSUME(MainToken)},
            {ALT:() => this.CONSUME(ProjectToken)},
            {ALT:() => this.CONSUME(WebToken)},
            {ALT:() => this.CONSUME(TemplateToken)}            
        ])
    })
    
    public formalParameters = this.RULE("formalParameters", () => {
        this.MANY_SEP({
            SEP: Comma,
            DEF: () => {
                this.SUBRULE(this.identifierStatement);
            }  
        })
    });
    /**
     * block
     */
    public block = this.RULE("block", () => {
        this.AT_LEAST_ONE( ()  => {            
            this.OR([
                {
                    ALT:() => {
                        this.SUBRULE(this.statement);
                        this.OR1([
                            {ALT:() => this.SUBRULE1(this.crlfStatement)},
                            {ALT:() => this.CONSUME(EOF)}                            
                        ])
                        } 
                },
                {
                    ALT:() => {
                    this.SUBRULE2(this.crlfStatement)
                } 
            }
            ]);

            
            
        });
    });
    public crlfStatement= this.RULE("crlfStatement", () => {
        
        this.OR([
            {ALT:() => {
                this.AT_LEAST_ONE( ()  => {
                    this.CONSUME(CRLF);
                });
            } },
            {ALT:() => this.CONSUME(SemiColon)}
            
        ]);
    });

    public returnStatement = this.RULE("returnStatement", () => {
        this.CONSUME(ReturnToken);
        this.OPTION1( () => {
            this.SUBRULE(this.expression);
        });        
    });
/*
  { ALT: () => {
                this.CONSUME(Comma);

                this.OPTION( () => {
                    this.SUBRULE1(this.expression);
                });
                this.CONSUME1(Comma);
                this.OPTION1( () => {
                    this.SUBRULE2(this.expression);
                });
            }},*/
    public ifStatement = this.RULE("ifStatement", () => {
        this.CONSUME(IfToken);
        this.SUBRULE(this.expression);        
        this.SUBRULE2(this.crlfStatement);
        this.OPTION( () => {
            this.SUBRULE3(this.block);
        });

        this.MANY(() => {
            this.SUBRULE4(this.elseifStatement);
        });
        this.OPTION1( () => {
            this.SUBRULE5(this.elseStatement );
        });
        this.CONSUME(EndifToken);
    });
    public elseifStatement = this.RULE("elseifStatement", () => {
        this.CONSUME(ElseIfToken);
        this.SUBRULE(this.expression);
        this.SUBRULE1(this.crlfStatement)
        this.OPTION( () => {
            this.SUBRULE2(this.block);
        });
    });

    public elseStatement = this.RULE("elseStatement", () => {
        this.CONSUME(ElseIfToken);        
        this.SUBRULE(this.crlfStatement)
        this.OPTION( () => {
            this.SUBRULE1(this.block);
        });
    });
    public forStatement = this.RULE("forStatement", () => {
        this.CONSUME(ForToken);
        this.SUBRULE(this.forInit);
        this.CONSUME(ToToken);
        this.SUBRULE1(this.expression);
        this.OPTION( () => {
            this.CONSUME(StepToken);
            this.SUBRULE2(this.expression);
        });
        this.SUBRULE3(this.crlfStatement)
        this.OPTION1( () => {           
            this.SUBRULE4(this.block);
        });
        this.CONSUME(NextToken);
        this.OPTION2( () => {           
            this.SUBRULE5(this.expression);
        });

    });
    public forInit = this.RULE("forInit", () => {
        this.SUBRULE(this.identifierStatement);
        this.CONSUME(Assignment);
        this.SUBRULE1(this.expression);        
    });
    public doStatement = this.RULE("doStatement", () => {
        this.CONSUME(DoToken);        
        this.OR([
            { ALT: () => this.SUBRULE(this.whileStatement)},
            { ALT: () => this.SUBRULE(this.docaseStatement)}
        ]);        
        this.OR1([
            { ALT: () => this.CONSUME(EndToken)},
            { ALT: () => this.CONSUME(EndDoToken)}
        ]);
        this.OPTION( () => {           
            this.SUBRULE(this.crlfStatement);
        });        
        
    });
    public whileStatement = this.RULE("whileStatement", () => {
        this.CONSUME(WhileToken);
        this.SUBRULE(this.expression);
        this.SUBRULE1(this.crlfStatement);
        this.OPTION( () => {           
            this.SUBRULE2(this.block);
        });
    });
    public docaseStatement = this.RULE("docaseStatement", () => {
        this.CONSUME(CaseToken);
        this.SUBRULE(this.crlfStatement);
        this.AT_LEAST_ONE( ()  => {
            this.CONSUME1(CaseToken);
            this.SUBRULE1(this.expression);
            this.SUBRULE2(this.crlfStatement);
            this.OPTION( () => {           
                this.SUBRULE3(this.block);
            });
        });
        this.OPTION1( () => {       
            this.CONSUME(OtherwiseToken);    
            this.SUBRULE4(this.block);
        });
        /*
        this.SUBRULE(this.expression);
        
        this.OPTION( () => {           
            this.SUBRULE2(this.block);
        });*/
    });

    //-----------------------------------------------------------
    // Class
    //-----------------------------------------------------------
    public classDeclaration = this.RULE("classDeclaration", () => {
        this.CONSUME(ClassToken);
        this.SUBRULE(this.identifierStatement);

        this.OPTION( () => {
            this.CONSUME(FromToken);
            this.SUBRULE1(this.identifierStatement);
        });
        this.SUBRULE2(this.crlfStatement);
        this.MANY(() => {
            this.OR([
                { ALT: () => this.SUBRULE3(this.dataDefinition)},
                { ALT: () => this.SUBRULE4(this.methodDefinition)}
            ]);        

        });
        this.CONSUME(EndClassToken);
        //this.SUBRULE5(this.crlfStatement);
    });

    public dataDefinition = this.RULE("dataDefinition", () => {
        
            this.CONSUME(DataToken);
            this.SUBRULE(this.identifierStatement);
            this.SUBRULE1(this.crlfStatement);
        
    });
    public methodDefinition = this.RULE("methodDefinition", () => {        
            this.CONSUME(MethodToken);
            this.SUBRULE(this.identifierStatement);            
            this.SUBRULE1(this.arguments); //#FunctionCall            
            this.SUBRULE2(this.crlfStatement);        
    });    
    public methodBody = this.RULE("methodBody", () => {
        this.CONSUME(MethodToken);        
        this.SUBRULE(this.identifierStatement);        
        this.CONSUME(LParam);
        this.OPTION1( () => {
            this.SUBRULE1(this.formalParameters);
        });        
        this.CONSUME(RParam);
        this.CONSUME(ClassToken);
        this.SUBRULE2(this.identifierStatement);
        this.SUBRULE3(this.crlfStatement);
        this.OPTION2( () => {
            this.SUBRULE4(this.initFuncOrMethod);
        })
        this.SUBRULE5(this.block);        
    });

    /*classDeclaration:
    CLASS identifier fromClass? crlf
    dataDefinition*
    methodDefinition*
    (ENDCLASS|(END CLASS) )  crlf
    ;
    fromClass:
    FROM identifier;
    dataDefinition:
    DATA identifier crlf;
    methodDefinition:
    METHOD identifier arguments 'CONSTRUCTOR'? crlf;
    methodBody:
    METHOD identifier (LPAREN formalParameters? RPAREN)? CLASS identifier crlf
    initFuncOrMethod?   block 	
    */
    /**
     * Expressions
     */
    public expression = this.RULE("expression", () => {
        this.SUBRULE(this.conditionalExpression);
        this.MANY( () => {
            this.CONSUME(AssignmentGroup);
            this.SUBRULE2(this.expression);
        });
    });

    
    public conditionalExpression = this.RULE("conditionalExpression", () => {
        this.SUBRULE(this.relationalExpression);
        this.MANY( () => {
            this.CONSUME(LogicGroup);
            this.SUBRULE2(this.relationalExpression);
        });
    });

    public relationalExpression = this.RULE("relationalExpression", () => {
        this.SUBRULE(this.additionExpression);
        this.MANY( () => {
            this.CONSUME(RelationalGroup);
            this.SUBRULE2(this.additionExpression);
        });
    });
    
    

    public additionExpression = this.RULE("additionExpression", () => {
        this.SUBRULE(this.multiplicationExpression);
        this.MANY( () => {
            this.CONSUME(AdditionOperator);
            this.SUBRULE2(this.multiplicationExpression);
        });
    });
    public multiplicationExpression = this.RULE("multiplicationExpression", () => {
        this.SUBRULE(this.atomicExpression);
        this.MANY( () => {
            this.CONSUME(MultiplicationOperator);
            this.SUBRULE2(this.atomicExpression);
        });
    });

    public atomicExpression = this.RULE("atomicExpression", () => {
        this.OR([
            {ALT:() => this.SUBRULE(this.parenthesisExpression)},            
            {ALT:() => this.CONSUME(LiteralGroup)},
            {ALT:() => { 
                this.SUBRULE(this.identifierStatement);
                this.OPTION( () => {
                    this.SUBRULE1(this.arguments); //#FunctionCall
                });        
                this.OPTION1( () => {
                    this.SUBRULE1(this.arrayAccess);//#arrayAccess
                });
                this.OPTION2( () => {
                    this.SUBRULE1(this.methodAccessLoop);//#methodAccessLoop
                });
            }
            },
            {ALT:() => this.SUBRULE(this.arrayOrBlockInitializer)}
            //{ALT:() => this.SUBRULE(this.xCommandsEmbedded)}
        ]);
    });

    public methodAccessLoop = this.RULE("methodAccessLoop", () => {
        this.MANY( () => {
            this.CONSUME(Colon);
            this.SUBRULE(this.identifierStatement);
            this.OPTION( () => {
                this.SUBRULE1(this.arguments); //#FunctionCall
            });
            this.OPTION1( () => {
                this.SUBRULE1(this.arrayAccess);//#arrayAccess
            });
        });
    }); 
    /*
methodAccessLoop:
                    (':' (identifier) arguments? arrayAccess? )*/


    public arguments = this.RULE("arguments", () => {
        this.CONSUME(LParam);
        this.SUBRULE(this.expressionList);
        this.CONSUME(RParam);        
    }); 
    public parenthesisExpression = this.RULE("parenthesisExpression", () => {
        this.CONSUME(LParam);
        this.SUBRULE(this.expressionList);
        this.CONSUME(RParam);        
    });
    public expressionList = this.RULE("expressionList", () => {
        this.MANY_SEP({
            SEP: Comma,
            DEF: () => {
                this.SUBRULE(this.optionalExpression);
            }  
        })
        
    });
    
    public optionalExpression = this.RULE("optionalExpression", () => {
        this.OPTION( () => {
            this.SUBRULE(this.expression);
        });        
    });
    public arrayAccess = this.RULE("arrayAccess", () => {
        this.CONSUME(LSquare);
        this.SUBRULE(this.expressionList);
        this.CONSUME(RSquare);        
    });
    public arrayOrBlockInitializer = this.RULE("arrayOrBlockInitializer", () => {
        this.CONSUME(LCurly);
        this.OR([
            {ALT:() => {
                this.CONSUME(Pipe);
                this.OPTION( () => {
                    this.SUBRULE(this.blockParams);
                });
                this.CONSUME1(Pipe);
                this.SUBRULE1(this.expressionList);
                }
            },
            {ALT:() => this.SUBRULE2(this.expressionList)}
        ]);
        this.CONSUME(RCurly);
        /*this.SUBRULE(this.expressionList);
        this.CONSUME(LSquare);*/
    });
    
    public blockParams = this.RULE("blockParams", () => {
        this.MANY_SEP({
            SEP: Comma,
            DEF: () => {
                this.SUBRULE(this.identifierStatement);
            }  
        })
        
    });
    //-----------------------------------------------------------
    // xCommands Embedded
    //-----------------------------------------------------------
 /*   public xCommandsEmbedded = this.RULE("xCommandsEmbedded", () => {
        this.OR([
            {ALT:() => this.SUBRULE(this.paramtypeRule)}
        ]);
    
    });*/
/*    public paramtypeRule = this.RULE("paramtypeRule", () => {
        this.CONSUME(ParamTypeToken);
        this.CONSUME(NumberLiteral);
        //this.SUBRULE(this.identifierStatement);
    });
  */  
}

const parser = new AdvplParser([]);
export function lexAdvpl(text) {
    const lexResult = AdvplLexer.tokenize(text)
    return lexResult;
}
export function parseAdvpl(text) {
    let lexResult = AdvplLexer.tokenize(text)
    parser.input = lexResult.tokens;
    const serializedGrammar = parser.getSerializedGastProductions()
    const ret = parser.program();
    
    console.log(ret);
    genHTML(serializedGrammar);
    // setting a new input will RESET the parser instance's state.
    //parser.input = lexResult.tokens
    console.log(lexResult);
    return ret;
}
export function gettokenVocabulary(){
    let tokenVocabulary = [];
    allTokens.forEach(tokenType => {
    tokenVocabulary[tokenType.name] = tokenType })
return tokenVocabulary;
}
export function getBaseCstVisitorConstructorWithDefaults(){
    return parser.getBaseCstVisitorConstructorWithDefaults();
}