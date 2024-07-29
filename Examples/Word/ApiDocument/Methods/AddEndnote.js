// This example adds an for the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("This is just a sample text.");
oDocument.AddEndnote();
var aEndNotesFirstParagraphs = oDocument.GetEndNotesFirstParagraphs();
aEndNotesFirstParagraphs[0].AddText("Endnote 1");
aEndNotesFirstParagraphs[0].SetBold(true);
builder.SaveFile("docx", "AddEndnote.docx");
builder.CloseFile();