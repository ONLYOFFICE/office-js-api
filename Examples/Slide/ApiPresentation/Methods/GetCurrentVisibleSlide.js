// This example shows how to get an object for a Slide, Layout, or Master that is currently visible.

const oPresentation = Api.GetPresentation();
const slide = oPresentation.GetCurrentVisibleSlide();