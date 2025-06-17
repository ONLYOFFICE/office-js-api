// This example shows how to get the slide width in English measure units.

// How to find a slide's width and display it on the slide.

// Get a width of the ApiSlide object and show it in the slide.

const presentation = Api.GetPresentation();
presentation.SetSizes(254 * 36000, 190 * 36000);

const slide = presentation.GetCurrentSlide();
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const slideWidth = slide.GetWidth();
paragraph.AddText("The slide width = " + slideWidth / 36000 + " mm");
slide.AddObject(shape);
