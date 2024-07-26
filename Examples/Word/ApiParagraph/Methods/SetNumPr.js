// This example specifies that the current paragraph references a numbering definition instance in the current document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
var oNumbering = oDocument.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("Default bullet lvl " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oParagraph.SetContextualSpacing(true);
	oDocument.Push(oParagraph);
}
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oMyStyle);
oParagraph.SetNumPr(oNumbering, 3);
oParagraph.AddText("This is a paragraph styled as level 4 of a bulleted list.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetNumPr.docx");
builder.CloseFile();