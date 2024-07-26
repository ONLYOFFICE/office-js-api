// This example sets the placeholder type.
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oPlaceholder = Api.CreatePlaceholder("chart");
oShape.SetPlaceholder(oPlaceholder);
oPlaceholder.SetType("picture");
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetType.pptx");
builder.CloseFile();