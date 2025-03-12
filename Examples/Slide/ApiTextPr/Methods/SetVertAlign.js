// This example specifies the alignment which will be applied to the contents of the run in relation to the default appearance of the run text.

// How to set a vertical alignment of the text.

// Get the text properties of the run and make it superscript, subscript, etc.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(50);
oTextPr.SetVertAlign("superscript");
oParagraph.SetJc("left");
oRun.AddText("This is a text inside the shape with vertical alignment set to 'superscript'.");
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);