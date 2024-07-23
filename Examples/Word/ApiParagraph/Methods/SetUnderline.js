// This example specifies that the contents of this paragraph are displayed along with a line appearing directly below the character.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text underlined with a single line.");
oParagraph.SetUnderline(true);
builder.SaveFile("docx", "SetUnderline.docx");
builder.CloseFile();