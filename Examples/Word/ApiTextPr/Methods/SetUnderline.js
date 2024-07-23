// This example specifies that the contents of the current run are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line).
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetUnderline(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text underlined with a single line.");
builder.SaveFile("docx", "SetUnderline.docx");
builder.CloseFile();