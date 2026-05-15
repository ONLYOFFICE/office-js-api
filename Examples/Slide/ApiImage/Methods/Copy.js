// Duplicate an image and place the copy on another slide in a presentation.

// How do I make a copy of an image in a presentation?

// Create an exact duplicate of an image and add it to a new slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const image = Api.CreateImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 60 * 36000, 60 * 36000);
slide.AddObject(image);

const copyImage = image.Copy();
const newSlide = Api.CreateSlide();
presentation.AddSlide(newSlide);
newSlide.AddObject(copyImage);
