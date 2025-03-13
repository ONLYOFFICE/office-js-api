// This example shows how to get the next paragraph.

// How to get the next paragraph of the current one.

// Return the next paragraph on the slide and make its text bold.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
oDocContent.RemoveAllElements();
var oParagraph1 = Api.CreateParagraph();
oParagraph1.AddText("This is the first paragraph.");
oDocContent.Push(oParagraph1);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is the second paragraph.");
oDocContent.Push(oParagraph2);
oSlide.AddObject(oShape);
var oNextParagraph = oParagraph1.GetNext();
oNextParagraph.SetBold(true);