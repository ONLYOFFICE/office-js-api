// This example creastes an image and pastes it into the document.
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oShape = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/step2_1.png", 300 * 36000, 150 * 36000);
oSlide.AddObject(oShape);