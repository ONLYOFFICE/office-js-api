// This example shows how to get an author of a comment reply.

// How to find out a comment's reply author.

// Get all comments from the presentation and display the first one's reply author name.

var oPresentation = Api.GetPresentation();
Api.pluginMethod_AddComment({"UserName": "John Smith", "Text": "Comment 1"});
var arrComments = oPresentation.GetAllComments();
arrComments[0].AddReply("Reply 1", "John Smith", "uid-1");
var oReply = arrComments[0].GetReply(0);
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
oParagraph.AddText("Comment's reply author: " + oReply.GetAuthorName());
oSlide1.AddObject(oShape);