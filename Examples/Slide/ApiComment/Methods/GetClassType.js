// Retrieve the class type of a comment in a presentation.

// How to identify the class type of a comment in a presentation?

// Obtain the class type identifier of a comment object in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const posX = 15 * 36000;
const posY = 35 * 36000;

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(posX, posY);
slide.AddObject(shape);

slide.AddComment(posX, posY, "Comment 1", "John Smith");
const arrComments = presentation.GetAllComments();
const classType = arrComments[0].GetClassType();

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Comment's class type: " + classType);