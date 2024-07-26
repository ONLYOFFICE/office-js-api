// This example converts the ApiStroke object into the JSON object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRGBColor = Api.CreateRGBColor(255, 111, 61);
var oFill = Api.CreateSolidFill(oRGBColor);
var oStroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
var json = oStroke.ToJSON();
var oStrokeFromJSON = Api.FromJSON(json);
var oDrawing = Api.CreateShape("roundRect", 5930900, 395605, oFill, oStrokeFromJSON);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();