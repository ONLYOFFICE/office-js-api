// This example sets your own customized numbering type.
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("numbered");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var sFormatString = "";
	for (let nTempLvl = 1; nTempLvl <= (nLvl + 1); ++nTempLvl) sFormatString += "%" + nTempLvl + ".";
	oNumLvl.SetCustomType("lowerRoman", sFormatString, "left");
	oNumLvl.SetStart(nLvl + 1);
	oNumLvl.SetSuff("space");
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("Custom numbered lvl " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oParagraph.SetContextualSpacing(true);
	oDocument.Push(oParagraph);
}