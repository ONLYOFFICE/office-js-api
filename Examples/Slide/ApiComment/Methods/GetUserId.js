// This example shows how to get a user ID.

const presentation = Api.GetPresentation();

Api.pluginMethod_AddComment({"UserName": "John Smith", "Text": "Comment 1"});
const comment = presentation.GetAllComments()[0];

comment.SetUserId("uid-42");
const userId = comment.GetUserId();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const paragraph = shape.GetDocContent().GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("The ID of the user who commented on this presentation is " + userId);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
