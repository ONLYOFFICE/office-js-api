// Control the visibility of a slide in the presentation.

// Create a new slide in the presentation.

// Hide the slide using the SetVisible method.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
slide.SetVisible(false);
presentation.AddSlide(slide);