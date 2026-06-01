// Link a numbering level to a heading style in a document.

// How do I connect a list numbering level to a paragraph heading style in a document?

// Combine custom numbered lists with styled headings to create a formatted outline in a document.

const doc = Api.GetDocument();
const headings = [];

for (let nLvl = 0; nLvl < 3; ++nLvl) {
    const headingLvlStyle = doc.CreateStyle("Heading " + (nLvl + 1));
    const textPr = headingLvlStyle.GetTextPr();
    textPr.SetBold(true);
    textPr.SetColor(nLvl*125, 0, 0, false);
    headings.push(headingLvlStyle);
}

let numLvl, formatString;
const numbering = doc.CreateNumbering("numbered");
for (let nLvl = 0; nLvl < 3; ++nLvl) {
    numLvl = numbering.GetLevel(nLvl);
    formatString = "";
    for (let nFSLvl = 1; nFSLvl <= (nLvl + 1); ++nFSLvl) {
        formatString += "%" + nFSLvl + ".";
    }
        
    numLvl.SetCustomType("decimal", formatString, "left");
    numLvl.LinkWithStyle(headings[nLvl]);

    const para = Api.CreateParagraph();
    para.SetStyle(headings[nLvl]);
    para.AddText("This paragraph with style: " + headings[nLvl].GetName());
    doc.Push(para);
}