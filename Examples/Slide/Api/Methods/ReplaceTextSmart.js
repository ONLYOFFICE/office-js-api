// This example replace text from two paragraphs to another text.
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
var oFParagraph = oDocContent.GetElement(0);
oFParagraph.AddText("This is the text for the first line. The line break is added after it.");
oFParagraph.AddLineBreak();
var oSParagraph = Api.CreateParagraph();
oSParagraph.AddTabStop();
oSParagraph.AddText("This is just a sample text with a tab stop before it.");
oDocContent.AddElement(oSParagraph);
oSlide.AddObject(oShape);
// todo_example problem (how to make select in slide)
// var oRange1 = oFParagraph.GetRange();
// var oRange2 = oSParagraph.GetRange();
// var oRange3 = oRange1.ExpandTo(oRange2);
// oRange3.Select();
var arr = ["test_1", "test_2"];
Api.ReplaceTextSmart(arr, "", "");
builder.SaveFile("pptx", "ReplaceTextSmart.pptx");
builder.CloseFile();