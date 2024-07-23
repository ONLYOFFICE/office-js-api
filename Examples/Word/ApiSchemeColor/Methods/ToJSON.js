// This example converts the ApiSchemeColor object into the JSON object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSchemeColor = Api.CreateSchemeColor("dk1");
var json = oSchemeColor.ToJSON();
var oSchemeColorFromJSON = Api.FromJSON(json);
var oFill = Api.CreateSolidFill(oSchemeColorFromJSON);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();