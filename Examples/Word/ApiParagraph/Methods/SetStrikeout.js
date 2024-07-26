// This example specifies that the contents of this paragraph are displayed with a single horizontal line through the center of the line.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text struck out with a single line.");
oParagraph.SetStrikeout(true);
builder.SaveFile("docx", "SetStrikeout.docx");
builder.CloseFile();