// This example creates a bullet for a paragraph.
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 2; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("This is an example of the bulleted paragraph № " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oDocument.Push(oParagraph);
}