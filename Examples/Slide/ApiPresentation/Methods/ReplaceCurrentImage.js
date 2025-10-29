// This example shows how to replace the current image with an image specified.

// How to replace an image with another one.

// Replace the current ApiImage with another image on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const url1 = 'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png';
const url2 = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';

const drawing = Api.CreateImage(url1, 300 * 36000, 150 * 36000);
slide.AddObject(drawing);
drawing.Select();
presentation.ReplaceCurrentImage(url2, 60 * 36000, 60 * 36000);
