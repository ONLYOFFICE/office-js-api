// This example converts the ApiInlineLvlSdt object into the JSON object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.SetAlias("№1");
var json = oInlineLvlSdt.ToJSON(true);
var oInlineLvlSdtFromJSON = Api.FromJSON(json);
oParagraph.AddInlineLvlSdt(oInlineLvlSdtFromJSON);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control.");
oInlineLvlSdtFromJSON.AddElement(oRun, 0);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();