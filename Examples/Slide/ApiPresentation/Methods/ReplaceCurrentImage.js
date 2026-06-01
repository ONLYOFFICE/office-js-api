// Swap an image for a different one in a presentation.

// How do I replace an image with another image in a presentation?

// Replace the selected image by loading a new one from a URL.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const url1 = 'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png';
const url2 = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';

const drawing = Api.CreateImage(url1, 300 * 36000, 150 * 36000);
slide.AddObject(drawing);
drawing.Select();
presentation.ReplaceCurrentImage(url2, 60 * 36000, 60 * 36000);