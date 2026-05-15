// Count the number of replies attached to a comment in a presentation.

// How many replies does a comment have in a presentation?

// Check the reply count for a specific comment in a presentation.

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
const repliesCount = 3;
for (let i = 0; i < repliesCount; i++) {
	arrComments[0].AddReply("Reply " + (i + 1), "John Smith", "uid-" + (i + 1));
}

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Comment replies count: " + arrComments[0].GetRepliesCount());