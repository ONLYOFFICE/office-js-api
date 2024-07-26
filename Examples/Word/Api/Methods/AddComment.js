// This example adds text and comment to the first paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
Api.AddComment(oParagraph, "ONLYOFFICE for developers", "Jane");
builder.SaveFile("docx", "AddComment.docx");
builder.CloseFile();