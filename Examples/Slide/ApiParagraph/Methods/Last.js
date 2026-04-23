// Get the last element from a paragraph in a presentation.

// How do I retrieve the last element in a paragraph in a presentation?

// Access the last element to modify its formatting in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.RemoveAllElements();

const run1 = Api.CreateRun();
run1.AddText('This is the first run. ');
paragraph.Push(run1);

const run2 = Api.CreateRun();
run2.AddText('And this is the last run in the paragraph.');
paragraph.Push(run2);

const lastElement = paragraph.Last();
lastElement.SetBold(true);
slide.AddObject(shape);