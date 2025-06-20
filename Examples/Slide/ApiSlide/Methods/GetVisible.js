// This example shows how to get visibility property of the slide.

// How to find out whether a slide is visible or not.

// Get a slide, set its visibility and show it in the slide.

const presentation = Api.GetPresentation();
let slide = Api.CreateSlide();

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const bgFill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(bgFill);
presentation.AddSlide(slide);

slide = presentation.GetSlideByIndex(0);
slide.SetVisible(false);
const isVisible = slide.GetVisible();

slide = presentation.GetSlideByIndex(1);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("The first slide visibility: " + isVisible);
