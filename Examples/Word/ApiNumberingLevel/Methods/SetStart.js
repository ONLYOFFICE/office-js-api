// This example specifies the starting value for the numbering used by the parent numbering level within a given numbering level definition.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("numbered");
var oNumLvl = oNumbering.GetLevel(0);
var oNumLvl1 = oNumbering.GetLevel(1);
oNumLvl1.SetStart(5);
var oParagraph = oDocument.GetElement(0);
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the first element of a parent numbered list which starts with '1'");
oParagraph = Api.CreateParagraph();
oParagraph.SetNumbering(oNumLvl1);
oParagraph.AddText("This is the first element of a child numbered list which starts with 'e'");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetStart.docx");
builder.CloseFile();