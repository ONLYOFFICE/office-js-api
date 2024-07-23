// This example converts the ApiParaPr object into the JSON object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetLeftBorder("single", 24, 0, 0, 255, 0);
var json = oParaPr.ToJSON(true);
var oParaPrFromJSON = Api.FromJSON(json);
var sType = oParaPrFromJSON.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class type = " + sType);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();