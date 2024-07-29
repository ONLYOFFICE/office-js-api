// This example converts the ApiNumbering object into the JSON object.
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("bullet");
var json = oNumbering.ToJSON();
var oNumberingFromJSON = Api.FromJSON(json);
for (var nLvl = 0; nLvl < 2; ++nLvl) {
	var oNumLvl = oNumberingFromJSON.GetLevel(nLvl);
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("This is an example of the bulleted paragraph № " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oDocument.Push(oParagraph);
}
var sType = oNumberingFromJSON.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type = " + sType);
oDocument.Push(oParagraph);