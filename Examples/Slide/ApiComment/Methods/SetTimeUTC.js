// This example shows how to set a comment time in UTC.

// How to change a creation time of a comment in UTC format.

// Get all comments from the presentation and change its first one's creation UTC time.

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
arrComments[0].SetTimeUTC('Jan 20 2000');
const timeUTC = arrComments[0].GetTimeUTC();

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Comment's time (UTC): " + timeUTC);
