// This example shows how to get the text properties which will be applied to the text in the numbering level itself, not to the text in the subsequent paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("numbered");
var oNumLvl = oNumbering.GetLevel(0);
var oTextPr = oNumLvl.GetTextPr();
oTextPr.SetBold(true);
oTextPr.SetFontFamily("Calibri");
oTextPr.SetFontSize(28);
var oParagraph = oDocument.GetElement(0);
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the first element of a numbered list which starts with '1'");
oParagraph = Api.CreateParagraph();
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the second element of a numbered list which starts with '2'");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetTextPr.docx");
builder.CloseFile();