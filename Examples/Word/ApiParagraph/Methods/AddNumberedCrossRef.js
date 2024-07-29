// This example adds a numbered cross-reference to the paragraph.
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
oParagraph = Api.CreateParagraph();
oParagraph.AddText("An example of the customized numbering type can be found in the paragraph № ");
oDocument.Push(oParagraph);
oParagraph.AddNumberedCrossRef("paraNum", aNumberedParagraphs[1], true, true);