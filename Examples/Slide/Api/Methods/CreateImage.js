// Insert an image from a URL in a presentation.

// How do I add an image with specific dimensions to a slide in a presentation?

// Place an image on a slide by specifying its source and size in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const shape = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
slide.AddObject(shape);