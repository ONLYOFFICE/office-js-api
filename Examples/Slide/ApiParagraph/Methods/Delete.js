// This example deletes the paragraph.

// How to remove a paragraph from the slide.

// Delete a text.

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
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oDocContent.Push(oParagraph);
oParagraph.Delete();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph. The first paragraph was removed from the shape content.");
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);