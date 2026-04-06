// This example sets the position of the comment in the presentation.

const presentation = Api.GetPresentation();
presentation.GetAllComments().forEach(comment => {
	comment.Delete();
});
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(173, 216, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

slide.AddComment(0, 0, 'Comment 1', 'John Smith');
const arrComments = presentation.GetAllComments();
arrComments[0].SetPosition(Api.MillimetersToEmus(20 + 300), Api.MillimetersToEmus(35 + 130));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('The comment position was changed from (0, 0) to (320, 165).');
