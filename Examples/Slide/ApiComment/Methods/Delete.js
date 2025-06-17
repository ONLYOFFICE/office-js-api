// This example shows how to delete a comment.

// How to remove a comment.

// Get all comments from the presentation and remove the first one.

const presentation = Api.GetPresentation();

Api.pluginMethod_AddComment({"UserName": "John Smith", "Text": "Comment 1"});
const arrComments = presentation.GetAllComments();
arrComments[0].Delete();

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
paragraph.AddText("The comment was just deleted from the current presentation.");
slide1.AddObject(shape);
