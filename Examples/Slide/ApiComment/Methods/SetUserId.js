// Set a user ID for a comment in a presentation.

// How do I assign a user ID to a comment in a presentation?

// Change the author's user ID of a comment to track comment ownership in a presentation.

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
const comment = presentation.GetAllComments()[0];

comment.SetUserId("uid-42");
const userId = comment.GetUserId();

const paragraph = shape.GetDocContent().GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("The ID of the user who commented on this presentation is " + userId);