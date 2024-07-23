// This example converts the ApiParagraph object into the JSON object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a new paragraph");
var json = oParagraph.ToJSON(false, true);
var oParagraphFromJSON = Api.FromJSON(json);
oParagraphFromJSON.SetBold(true);
oDocument.AddElement(0, oParagraphFromJSON);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();