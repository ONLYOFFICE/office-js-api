// This example saves changes to the specified document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This sample text is saved to the document.");
Api.Save();
builder.SaveFile("docx", "Save.docx");
builder.CloseFile();