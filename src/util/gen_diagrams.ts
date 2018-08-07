const path = require("path")
const fs = require("fs")
const chevrotain = require("chevrotain")
export function genHTML(serializedGrammar){
    const htmlText = chevrotain.createSyntaxDiagramsCode(serializedGrammar)

    // Write the HTML file to disk
    const outPath = path.resolve(__dirname, "./")
    fs.writeFileSync(outPath + "/generated_diagrams.html", htmlText)
}


