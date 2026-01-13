// This example sets a hyperlink for a shape and an image on a slide.

const presentation = Api.GetPresentation();
presentation.AddSlide(Api.CreateSlide());

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#e2e4f6'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
slide.AddObject(shape);

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000
);
image.SetPosition(160 * 36000, 0);
slide.AddObject(image);

const urlHyperlink = Api.CreateHyperlink('https://onlyoffice.com', 'Link to OnlyOffice website');
const pageHyperlink = Api.CreateHyperlink('ppaction://hlinksldjumpslide1', 'Link to the second slide');
shape.SetHyperlink(urlHyperlink);
image.SetHyperlink(pageHyperlink);
