// This example shows how to add a reply to the comment.

// How to reply to the comment.

// Get all comments from the presentation and reply to the first one.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const posX = 15 * 36000;
const posY = 35 * 36000;
const shapeWidth = 300 * 36000;
const shapeHeight = 100 * 36000;

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", shapeWidth, shapeHeight, fill, stroke);
shape.SetPosition(posX, posY);
slide.AddObject(shape);

slide.AddComment(posX, posY, "Comment from current user with default params");
slide.AddComment(posX + shapeWidth, posY + shapeHeight, "Comment from another user", "John Doe", "uid-2");

const arrComments = presentation.GetAllComments();
arrComments[0].AddReply("Hello, this is a reply", "John Smith", "uid-1");
const reply = arrComments[0].GetReply(0);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("First comment and its reply are aligned to the top left corner of the shape." + "\n");
paragraph.AddText("Comment from John Doe is aligned to the bottom right corner of the shape." + "\n");
paragraph.AddLineBreak();
paragraph.AddText("Comment's reply text: " + reply.GetText());
