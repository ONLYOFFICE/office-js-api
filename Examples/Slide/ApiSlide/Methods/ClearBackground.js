// This example clears the slide background.

// How to remove the background from the slide.

// Create a duplicate slide and change its background.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);

const duplicateSlide = slide.Duplicate(1);
duplicateSlide.ClearBackground();
