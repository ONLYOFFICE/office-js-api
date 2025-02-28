// This example shows how to get all font names from all elements inside the run.

// How to get all font names used in the text.

// Retrieve ApiRun font names and display them in the slide.

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
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetFontFamily("Comic Sans MS");
oRun.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
oParagraph.AddElement(oRun);
oParagraph.AddLineBreak();
var aFontNames = oRun.GetFontNames();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Run font names: ");
oParagraph.AddLineBreak();
for (let i = 0; i < aFontNames.length; i++ ){
	oParagraph.AddText(aFontNames[i]);
	oParagraph.AddLineBreak();
}
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);