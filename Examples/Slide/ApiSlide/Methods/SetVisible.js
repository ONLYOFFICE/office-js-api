// This example sets the visibility to the current presentation slide.

// How to change visibility of the slide.

// Create a slide and make it hidden.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
slide.SetVisible(false);
presentation.AddSlide(slide);
