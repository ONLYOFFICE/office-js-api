// Get the slide height in English measure units in a presentation.

// Retrieve the slide height using GetHeight and display the measurement on the slide.

// Convert the height value from EMUs to millimeters for display.

const presentation = Api.GetPresentation();
presentation.SetSizes(254 * 36000, 190 * 36000);

const slide = presentation.GetCurrentSlide();
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const slideHeight = slide.GetHeight();
paragraph.AddText("The slide height = " + slideHeight / 36000 + " mm");
slide.AddObject(shape);