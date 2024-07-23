// This example shows how to get all numbered paragraphs from the current document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("numbered");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var sFormatString = "";
	for (let nTempLvl = 0; nTempLvl <= nLvl; ++nTempLvl) sFormatString += "%" + nTempLvl + ".";
	oNumLvl.SetCustomType("lowerRoman", sFormatString, "left");
	oNumLvl.SetStart(nLvl + 1);
	oNumLvl.SetSuff("space");
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("Custom numbered lvl " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oParagraph.SetContextualSpacing(true);
	oDocument.Push(oParagraph);
}
var aNumberedParagraphs = oDocument.GetAllNumberedParagraphs();
aNumberedParagraphs[0].SetBold(true);
builder.SaveFile("docx", "GetAllNumberedParagraphs.docx");
builder.CloseFile();