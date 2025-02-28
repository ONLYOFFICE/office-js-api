// This example creates an image and pastes it into the document.

// How to create an image object using a url and specifying its width and height.

// Create an image and insert it to the slide.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oShape = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/step2_1.png", 300 * 36000, 150 * 36000);
oSlide.AddObject(oShape);