// This example gets width of shape and inserts it into the presentation.
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var nWidth = oShape.GetWidth();
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("Drawing width: " + nWidth);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetWidth.pptx");
builder.CloseFile();