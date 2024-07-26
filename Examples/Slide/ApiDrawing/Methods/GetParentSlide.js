// This example show how to get the drawing parent slide.
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);
var oParent = oShape.GetParentSlide();
var sType = oParent.GetClassType();
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type of the shape parent = " + sType);
builder.SaveFile("pptx", "GetParentSlide.pptx");
builder.CloseFile();