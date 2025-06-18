// This example shows how to get an author of a comment.

// How to find out a comment's author.

// Get all comments from the presentation and display the first one's author name.

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
const authorName = arrComments[0].GetAuthorName();

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Comment's author: " + authorName);
