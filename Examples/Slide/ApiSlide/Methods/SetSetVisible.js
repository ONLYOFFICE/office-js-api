// This example sets the visibility to the current presentation slide.
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
oSlide.SetSetVisible(false);
oPresentation.AddSlide(oSlide);