// This example shows how to remove replies from a comment.

// How to delete specified comment reply.

// Get all comments from the presentation and remove a reply from the first one's.

const presentation = Api.GetPresentation();

Api.pluginMethod_AddComment({"UserName": "John Smith", "Text": "Comment 1"});
const arrComments = presentation.GetAllComments();
arrComments[0].AddReply("Reply 1", "John Smith", "uid-1");
arrComments[0].AddReply("Reply 2", "John Smith", "uid-1");
arrComments[0].RemoveReplies(0, 1, false);
const reply = arrComments[0].GetReply(0);

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
paragraph.AddText("Comment replies count: " + arrComments[0].GetRepliesCount());
slide1.AddObject(shape);
