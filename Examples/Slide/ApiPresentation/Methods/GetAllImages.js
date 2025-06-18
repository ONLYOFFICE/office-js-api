// This example shows how to get all images from the current presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const copiesCount = 3;
for (let i = 0; i < copiesCount; i++) {
	const imageSource = 'https://api.onlyoffice.com/img/logo.svg';
	const drawing = Api.CreateImage(imageSource, 174 * 36000, 38 * 36000);
	drawing.SetPosition(0, i * 38 * 36000);
	slide.AddObject(drawing);
}

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 153, 204));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('heart', 38 * 36000, 38 * 36000, fill, stroke);
shape.SetPosition(184 * 36000, 0 * 36000);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const imagesCount = presentation.GetAllImages().length;
paragraph.AddText('' + imagesCount);
