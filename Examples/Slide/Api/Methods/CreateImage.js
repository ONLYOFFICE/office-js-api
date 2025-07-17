// This example creates an image and pastes it into the document.

// How to create an image object using a url and specifying its width and height.

// Create an image and insert it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const shape = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 300 * 36000, 150 * 36000);
slide.AddObject(shape);
