// Access the final element of a paragraph in a PDF.

// How do I get the last element from a paragraph in a PDF?

// Retrieve and modify the final run in a paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

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
page.AddObject(shape);