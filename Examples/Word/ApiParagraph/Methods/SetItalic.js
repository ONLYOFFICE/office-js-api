// This example sets the italic property to the text character.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a text run with the font set to italicized letters.");
oParagraph.SetItalic(true);
builder.SaveFile("docx", "SetItalic.docx");
builder.CloseFile();