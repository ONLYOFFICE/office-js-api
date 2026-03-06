// This example shows how to create a hyperlink and set it to an image.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000
);
slide.AddObject(image);

const hyperlink = Api.CreateHyperlink('https://onlyoffice.com', 'Link to OnlyOffice website');
image.SetHyperlink(hyperlink);
