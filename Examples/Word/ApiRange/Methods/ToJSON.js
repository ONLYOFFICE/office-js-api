// This example converts the ApiRange object into the JSON object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = Api.CreateRange(oParagraph, 0, 9);
oRange.SetBold(true);
var json = oRange.ToJSON(false, true);
var oRangeFromJSON = Api.FromJSON(json);
oDocument.Push(oRangeFromJSON[0]);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();