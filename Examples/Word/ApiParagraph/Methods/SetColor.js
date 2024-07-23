// This example sets the text color to the current paragraph in the RGB format.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the font color set to orange.");
oParagraph.SetColor(255, 111, 61);
builder.SaveFile("docx", "SetColor.docx");
builder.CloseFile();