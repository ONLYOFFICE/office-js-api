// This example adds a comment to the document.
builder.CreateFile("docx"); 
var oDocument = Api.GetDocument(); 
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("This is just a sample text.");
oParagraph.AddLineBreak();
oParagraph.AddText("The comment was added to this document.");
oDocument.AddComment("This is a comment to the document.", "Jane");
builder.SaveFile("docx",  "AddComment.docx"); 
builder.CloseFile();