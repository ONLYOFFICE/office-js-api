// This example returns all comments from the current presentation.

// How to return an array of all comments from the ApiPresentation object and add a text of the first comment to the created shape.

// Get the ApiComment objects from the current presentation.

var oPresentation = Api.GetPresentation();
Api.pluginMethod_AddComment({"UserName": "John Smith", "Text": "Comment 1"});
var arrComments = oPresentation.GetAllComments();
var oSlide1 = oPresentation.GetSlideByIndex(0);
oSlide1.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Comment text: " + arrComments[0].GetText());
oSlide1.AddObject(oShape);