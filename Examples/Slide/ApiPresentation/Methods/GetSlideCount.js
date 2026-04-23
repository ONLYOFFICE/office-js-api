// Count the number of slides in a presentation.

// How do I find out how many slides are in a presentation?

// Display the total slide count on the current slide.

const presentation = Api.GetPresentation();
const slide1 = presentation.GetSlideByIndex(0);
slide1.RemoveAllObjects();

const slide2 = Api.CreateSlide();
presentation.AddSlide(slide2);

const slideCount = presentation.GetSlideCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of slides = " + slideCount);
slide1.AddObject(shape);