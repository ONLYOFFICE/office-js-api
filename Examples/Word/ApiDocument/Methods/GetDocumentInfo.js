// This example shows how to get the document info represented as an object and paste the application name into the last paragraph.
builder.CreateFile("docx");
const oDocument = Api.GetDocument();
const oDocInfo = oDocument.GetDocumentInfo();
const oParagraph = Api.CreateParagraph();
oParagraph.AddText('This document has been created with: ' + oDocInfo.Application)
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetDocumentInfo.docx");
builder.CloseFile();