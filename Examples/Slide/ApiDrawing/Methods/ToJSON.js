// This example converts the shape into JSON.
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
var json = oDrawing.ToJSON();
var oDrawingFromJSON = Api.FromJSON(json);
oDrawingFromJSON.SetPosition(608400, 1267200);
oDrawingFromJSON.SetSize(300 * 36000, 130 * 36000);
oSlide.AddObject(oDrawingFromJSON);
builder.SaveFile("pptx", "ToJSON.pptx");
builder.CloseFile();