// This example shows how to set a comment reply text.

// How to change a text of a comment reply.

// Get all comments from the presentation and set its first one's reply text.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const posX = 15 * 36000;
const posY = 35 * 36000;

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(posX, posY);
slide.AddObject(shape);

slide.AddComment(posX, posY, "Comment 1", "John Smith");
const arrComments = presentation.GetAllComments();
arrComments[0].AddReply("Reply 1", "John Smith", "uid-1");
const reply = arrComments[0].GetReply(0);
reply.SetText("New reply text");

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Comment's reply text: " + reply.GetText());
