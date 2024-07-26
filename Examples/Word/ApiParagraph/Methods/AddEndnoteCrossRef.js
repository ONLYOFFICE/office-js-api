// This example adds an endnote cross-reference to the paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("This is just a sample text.");
oDocument.AddEndnote();
var aEndNotesFirstParagraphs = oDocument.GetEndNotesFirstParagraphs();
aEndNotesFirstParagraphs[0].AddText("Endnote 1");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("For more information on previous sentences see endnote on page ");
oDocument.Push(oParagraph);
oParagraph.AddEndnoteCrossRef("pageNum", aEndNotesFirstParagraphs[0]);
builder.SaveFile("docx", "AddEndnoteCrossRef.docx");
builder.CloseFile();