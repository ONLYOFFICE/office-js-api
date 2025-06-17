// This example returns all comments from the current presentation.

// How to return an array of all comments from the ApiPresentation object and add a text of the first comment to the created shape.

// Get the ApiComment objects from the current presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

Api.pluginMethod_AddComment({"UserName": "John Smith", "Text": "Comment 1"});
const comments = presentation.GetAllComments();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Comment text: " + comments[0].GetText());
slide.AddObject(shape);
