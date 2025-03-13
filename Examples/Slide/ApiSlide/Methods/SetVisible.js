// This example sets the visibility to the current presentation slide.

// How to change visibility of the slide.

// Create a slide and make it hidden.

var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
oSlide.SetVisible(false);
oPresentation.AddSlide(oSlide);