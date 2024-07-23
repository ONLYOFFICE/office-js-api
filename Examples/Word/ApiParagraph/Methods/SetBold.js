// This example sets the bold property to the text character.
builder.CreateFile("docx");
var oDocument = editor.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the font set to bold.");
oParagraph.SetBold(true);
builder.SaveFile("docx", "SetBold.docx");
builder.CloseFile();