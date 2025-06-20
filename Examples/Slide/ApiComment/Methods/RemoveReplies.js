// This example shows how to remove replies from a comment.

// How to delete specified comment reply.

// Get all comments from the presentation and remove a reply from the first one's.

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
arrComments[0].AddReply("Reply 1 (own reply)", "John Smith", "uid-1");
arrComments[0].AddReply("Reply 2", "Mark Pottato", "uid-2");
arrComments[0].AddReply("Reply 3", "Hamish Mitchell", "uid-3");
arrComments[0].RemoveReplies(0, 1, false);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Comment replies count: " + arrComments[0].GetRepliesCount());
paragraph.AddLineBreak();
paragraph.AddText("Own reply was removed, but other two replies are still here.");
