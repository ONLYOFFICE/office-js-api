// This example specifies that the contents of this paragraph are displayed with two horizontal lines through each character displayed on the line.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text struck out with two lines.");
oParagraph.SetDoubleStrikeout(true);
builder.SaveFile("docx", "SetDoubleStrikeout.docx");
builder.CloseFile();