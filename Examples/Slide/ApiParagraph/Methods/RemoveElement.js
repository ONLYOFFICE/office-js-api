// This example removes an element using the position specified.
builder.CreateFile("pptx");
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
var oParagraph = oDocContent.GetElement(0);
oParagraph = oDocContent.GetElement(0);
oParagraph.RemoveAllElements();
var oRun = Api.CreateRun();
oRun.AddText("This is the first paragraph element. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is the second paragraph element. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is the third paragraph element (it will be removed from the paragraph and we will not see it). ");
oParagraph.AddElement(oRun);
oParagraph.AddLineBreak();
oRun = Api.CreateRun();
oRun.AddText("This is the fourth paragraph element - it became the third, because we removed the previous run from the paragraph. ");
oParagraph.AddElement(oRun);
oParagraph.AddLineBreak();
oRun = Api.CreateRun();
oRun.AddText("Please note that line breaks are not counted into paragraph elements!");
oParagraph.AddElement(oRun);
oParagraph.RemoveElement(3);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "RemoveElement.pptx");
builder.CloseFile();