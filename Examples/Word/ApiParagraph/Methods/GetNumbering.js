// This example shows how to get the numbering definition and numbering level for the numbered list.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("numbered");
var oNumLvl = oNumbering.GetLevel(0);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is the first element of a numbered list");
oParagraph.SetNumbering(oNumLvl);
oParagraph.SetContextualSpacing(true);
var oNumbering1 = oParagraph.GetNumbering();
oNumLvl = oNumbering.GetLevel(0);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second element of a numbered list");
oParagraph.SetNumbering(oNumLvl);
oParagraph.SetContextualSpacing(true);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetNumbering.docx");
builder.CloseFile();