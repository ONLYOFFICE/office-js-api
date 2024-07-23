// This example gets a class type and inserts it into the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("Default bullet lvl " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oParagraph.SetContextualSpacing(true);
	oDocument.Push(oParagraph);
}
var sClassType = oNumLvl.GetClassType();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class Type = " + sClassType);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();