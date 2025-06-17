// This example shows how to set a user ID.

// How to change an author's user ID of a comment.

// Get all comments from the presentation and change its first one's user ID.

const presentation = Api.GetPresentation();

Api.pluginMethod_AddComment({"UserName": "John Smith", "Text": "Comment 1"});
const arrComments = presentation.GetAllComments();
arrComments[0].SetUserId("uid-2");

const slide1 = presentation.GetSlideByIndex(0);
slide1.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
const userId = arrComments[0].GetUserId();
paragraph.AddText("The ID of the user who commented on this presentation is " + userId + ".");
slide1.AddObject(shape);
