// This example demonstrates how to add a comment to a specific slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const commentText = "Note: check method to add comments to slides.";
const commentAuthor = "Mark Pottato";
const commentUserId = "user-42";
const posX = 20 * 36000;
const posY = 20 * 36000;

slide.AddComment(posX, posY, commentText, commentAuthor, commentUserId);
slide.AddComment(posX, posY, 'Author for this comment was not specified');

const fill = Api.CreateSolidFill(Api.CreateRGBColor(50, 100, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetDocContent().GetElement(0);

const comments = presentation.GetAllComments();
for (let i = 0; i < comments.length; i++) {
	const comment = comments[i];
	paragraph.AddText('Comment' + (i + 1) + ':' + '\n');
	paragraph.AddText('Text: ' + comment.GetText() + '\n');
	paragraph.AddText('Author: ' + comment.GetAuthorName() + '\n');
	paragraph.AddText('User ID: ' + comment.GetUserId() + '\n');
	paragraph.AddLineBreak();
}

slide.RemoveAllObjects();
shape.SetPosition(posX, posY);
slide.AddObject(shape);
