// This shows how to link numbering level with the specified heading style.
var oDocument = Api.GetDocument();
let aHeadings = [];
for (var nLvl = 0; nLvl < 3; ++nLvl) {
    var oHeadingLvlStyle = oDocument.CreateStyle("Heading " + (nLvl + 1));
    var oTextPr = oHeadingLvlStyle.GetTextPr();
    oTextPr.SetBold(true);
    oTextPr.SetColor(nLvl*125, 0, 0, false);
    aHeadings.push(oHeadingLvlStyle);
}
var oNumbering = oDocument.CreateNumbering("numbered");
var oNumLvl, sFormatString;
for (var nLvl = 0; nLvl < 3; ++nLvl) {
    oNumLvl = oNumbering.GetLevel(nLvl);
    sFormatString = "";
    for (var nFSLvl = 1; nFSLvl <= (nLvl + 1); ++nFSLvl) {
        sFormatString += "%" + nFSLvl + ".";
    }
        
    oNumLvl.SetCustomType("decimal", sFormatString, "left");
    oNumLvl.LinkWithStyle(aHeadings[nLvl]);

    let oPara = Api.CreateParagraph();
    oPara.SetStyle(aHeadings[nLvl]);
    oPara.AddText("This paragraph with style: " + aHeadings[nLvl].GetName());
    oDocument.Push(oPara);
}