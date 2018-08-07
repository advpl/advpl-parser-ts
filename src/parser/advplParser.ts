import {
    createToken,
    Lexer,
    Parser,
    IToken,
    ILexingError,
    IRecognitionException
} from "chevrotain"
import {genHTML} from '../util/gen_diagrams';
//Tokens
const Minor = createToken({ name: "Minor", pattern: /</ })
const Major = createToken({ name: "Major", pattern: />/ })
const Equals = createToken({ name: "Equals", pattern: /\=/ })
const MinorEquals = createToken({ name: "MinorEquals", pattern: /\<\=/ })
const MajorEquals = createToken({ name: "MajorEquals", pattern: />\=/ })
const DoubleEquals = createToken({ name: "DoubleEquals", pattern: /\=\=/ })
const NotEquals = createToken({ name: "NotEquals", pattern: /!\=/ })
const NotEqualsOp2 = createToken({ name: "NotEqualsOp2", pattern: /<>/ })
//const NotEqualsOp3 = createToken({ name: "NotEqualsOp3", pattern: /#/ })
const Contained = createToken({ name: "Contained", pattern: /\$/ })
const PlusPlus = createToken({ name: "PlusPlus", pattern: /\+\+/ })
const MinusMinus = createToken({ name: "MinusMinus", pattern: /--/ })
const PlusEquals = createToken({ name: "PlusEquals", pattern: /\+\=/ })

const MinusEquals = createToken({ name: "MinusEquals", pattern: /-\=/ })
const MultiEquals = createToken({ name: "MultiEquals", pattern: /\*\=/ })
const DivEquals = createToken({ name: "DivEquals", pattern: /\/\=/ })


const Plus = createToken({ name: "Plus", pattern: /\+/ })
const Minus = createToken({ name: "Minus", pattern: /-/ })
const Mult = createToken({ name: "Mult", pattern: /\*/ })
const Div = createToken({ name: "Div", pattern: /\// })
const Pow = createToken({ name: "Pow", pattern: /\*\*/ })
const Pow2 = createToken({ name: "Pow", pattern: /\^/ })
const Perc = createToken({ name: "Perc", pattern: /%/ })
const At = createToken({ name: "At", pattern: /@/ })
const Ampersand = createToken({ name: "Ampersand", pattern: /&/ })
//---------------------------------------------------------------------
// Words reserved
//---------------------------------------------------------------------
/*

*/
const MainToken = createToken({ name: "MainToken", pattern: /main/i })
const UserToken = createToken({ name: "UserToken", pattern: /user/i })
const ProjectToken = createToken({ name: "ProjectToken", pattern: /project/i })
const WebToken = createToken({ name: "WebToken", pattern: /web/i })
const TemplateToken = createToken({ name: "TemplateToken", pattern: /template/i })

const ClassToken = createToken({ name: "Class", pattern: /class/i })
const DataToken = createToken({ name: "Data", pattern: /data/i })
const FromToken = createToken({ name: "From", pattern: /from/i })
const MethodToken = createToken({ name: "Method", pattern: /method/i })
const EndClassToken = createToken({ name: "EndClass", pattern: /endclass/i })

const WsServiceToken = createToken({ name: "WsService", pattern: /wsservice/i })
const WsMethodToken = createToken({ name: "WsMethod", pattern: /wsmethod/i })
const WsDataToken = createToken({ name: "WsData", pattern: /wsdata/i })
const EndWsServiceToken = createToken({ name: "EndWsService", pattern: /endwsservice/i })

const WsStructToken = createToken({ name: "WsStruct", pattern: /wsstruct/i })
const EndStructToken = createToken({ name: "EndStruct", pattern: /endstruct/i })


const WsClientToken = createToken({ name: "WsClient", pattern: /wsclient/i })
const EndClientToken = createToken({ name: "EndClient", pattern: /endclient/i })




const FunctionToken = createToken({ name: "FunctionToken", pattern: /function/i })
const CaseToken = createToken({ name: "CaseToken", pattern: /case/i })
const DoToken = createToken({ name: "DoToken", pattern: /do/i })
const ToToken = createToken({ name: "ToToken", pattern: /to/i })
const ForToken = createToken({ name: "ForToken", pattern: /for/i })
const LocalToken = createToken({ name: "LocalToken", pattern: /local/i })
const LoopToken = createToken({ name: "LoopToken", pattern: /loop/i })
const NextToken = createToken({ name: "NextToken", pattern: /next/i })
const IfToken = createToken({ name: "IfToken", pattern: /if/i })
const ElseIfToken = createToken({ name: "ElseIfToken", pattern: /elseif/i })
const ElseToken = createToken({ name: "ElseToken", pattern: /else/i })
const ExitToken = createToken({ name: "ExitToken", pattern: /exit/i })
const EndifToken = createToken({ name: "EndifToken", pattern: /endif/i })
const EndCaseToken = createToken({ name: "EndCaseToken", pattern: /endcase/i })
const EndDoToken = createToken({ name: "EndDoToken", pattern: /enddo/i })
const EndToken = createToken({ name: "EndToken", pattern: /end/i })
const StepToken = createToken({ name: "StepToken", pattern: /step/i })
const OtherwiseToken = createToken({ name: "OtherwiseToken", pattern: /otherwise/i })
const PublicToken = createToken({ name: "PublicToken", pattern: /public/i })
const PrivateToken = createToken({ name: "PrivateToken", pattern: /private/i })
const ReturnToken = createToken({ name: "ReturnToken", pattern: /return/i })
const StaticToken = createToken({ name: "StaticToken", pattern: /static/i })
const selfToken = createToken({ name: "selfToken", pattern: /self/i })
const WhileToken = createToken({ name: "WhileToken", pattern: /while/i })

const True = createToken({ name: "True", pattern: /\.t\./i })
const False = createToken({ name: "False", pattern: /\.f\./i })
const Not = createToken({ name: "Not", pattern: /\.not\./i })
const And = createToken({ name: "And", pattern: /\.and\./i })
const Or = createToken({ name: "Or", pattern: /\.or\./i })
const Dot = createToken({ name: "Dot", pattern: /\./ })
const Not2 = createToken({ name: "Not", pattern: /\!/ })
const Nil = createToken({ name: "Nil", pattern: /nil/i })
const LCurly = createToken({ name: "LCurly", pattern: /{/ })
const RCurly = createToken({ name: "RCurly", pattern: /}/ })
const LParam = createToken({ name: "LParam", pattern: /\(/ })
const RParam = createToken({ name: "RParam", pattern: /\)/ })
const LSquare = createToken({ name: "LSquare", pattern: /\[/ })
const RSquare = createToken({ name: "RSquare", pattern: /]/ })
const Pipe = createToken({ name: "Pipe", pattern: /\|/ })
const Comma = createToken({ name: "Comma", pattern: /,/ })
const Assignment = createToken({ name: "Assignment", pattern: /:=/ })
const Colon = createToken({ name: "Colon", pattern: /:/ })



const As = createToken({ name: "As", pattern: /as/i })
const Of = createToken({ name: "Of", pattern: /of/i })


const IncludeToken = createToken({ name: "Include", pattern: /#include/i })
const DefineToken = createToken({ name: "Define", pattern: /#define/i })
const IfDefToken = createToken({ name: "IfDef", pattern: /#ifdef/i })
const EndifDefToken = createToken({ name: "EndIfDef", pattern: /#endif/i })



const Identifier = createToken({ name: "Identifier", pattern: /[a-zA-Z_]\w*/ })
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
  
const StringLiteral = createToken({
    name: "StringLiteral",
    pattern: /"(:?[^\\"]|\\(:?[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/
})
const StringLiteralSimple = createToken({
    name: "StringLiteralSimple",
    pattern: /'(:?[^\\']|\\(:?[bfnrtv'\\/]|u[0-9a-fA-F]{4}))*'/
})
const NumberLiteral = createToken({
    name: "NumberLiteral",
    pattern: /-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/
})
const CRLF = createToken({
    name: "CRLF",
    pattern: /[\r]?[\n]/    
})
const CRLF_ESCAPED = createToken({
    name: "CRLF_ESCAPED",
    pattern: /;[\r]?[\n]/    
})

const WhiteSpace = createToken({
    name: "WhiteSpace",
    pattern: /[ \t]+/,
    group: Lexer.SKIPPED
})
const allTokens = [
    WhiteSpace,
    CRLF,
    CRLF_ESCAPED,
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
    Pipe,
    Assignment,
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
    Identifier
]
const AdvplLexer = new Lexer(allTokens, {  ensureOptimizations : true  })
class AdvplParser extends Parser {
    constructor(input){
        super(input,allTokens, { outputCst : true,  recoveryEnabled: true });
        this.performSelfAnalysis();
     /*   this.RULE("program", () => {
            this.MANY(() => {
                this.SUBRULE($.statement)
            })
        });
        $.RULE("statement", () => {
            $.MANY(() => {
                $.SUBRULE($.statement)
            })
        })*/
    }
    public program = this.RULE("program", () => {
        this.MANY(() => {
            this.SUBRULE(this.statement)
        })
    });
    public statement = this.RULE("statement", () => {
        this.OR([
            { ALT: () => this.SUBRULE(this.functionStatement)}

        ]);
    });
    public functionStatement = this.RULE("functionStatement", () => {
        this.OPTION( () => {
            this.SUBRULE(this.modifiersFunction);
        })
        this.CONSUME(FunctionToken);        
        this.SUBRULE(this.identifierStatement);
        this.CONSUME(LParam);
        this.OPTION1( () => {
            this.SUBRULE(this.formalParameters);
        });        
        this.CONSUME(RParam);
        this.CONSUME(CRLF);
        this.CONSUME(ReturnToken);
    })
    public identifierStatement= this.RULE("identifierStatement", () => {
        this.CONSUME(Identifier);
    })
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
        }
    )
    });
    
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
}
export function gettokenVocabulary(){
    let tokenVocabulary = [];
    allTokens.forEach(tokenType => {
    tokenVocabulary[tokenType.name] = tokenType })
return tokenVocabulary;
}