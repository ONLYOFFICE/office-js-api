// This example converts the ApiSection object into the JSON object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with a page size set in the current document section.");
var oSection = oDocument.GetFinalSection();
oSection.SetPageMargins(720, 720, 720, 720);
oSection.SetPageSize(7200, 4320);
var json = oSection.ToJSON(false, true);
var oSectionFromJSON = Api.FromJSON(json);
var sType = oSectionFromJSON.GetClassType();
oParagraph.AddLineBreak();
oParagraph.AddText("Class type = " + sType);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();