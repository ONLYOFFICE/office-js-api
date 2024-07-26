// This example converts the ApiRun object into the JSON object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is a text run");
var json = oRun.ToJSON(true);
var oRunFromJSON = Api.FromJSON(json);
oRunFromJSON.SetBold(true);
oParagraph.AddElement(oRunFromJSON);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();