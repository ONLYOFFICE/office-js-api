// This example shows how to replace the current image with an image specified.

// How to replace an image with another one.

// Replace the current ApiImage with another image on the slide.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 300 * 36000, 150 * 36000);
oSlide.AddObject(oDrawing);
oDrawing.Select();
oPresentation.ReplaceCurrentImage("https://helpcenter.onlyoffice.com/images/Help/GettingStarted/Documents/big/EditDocument.png", 60 * 36000, 35 * 36000);