// This example sets the visibility to the current presentation slide.
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
oSlide.SetVisible(false);
oPresentation.AddSlide(oSlide);