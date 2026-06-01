// Count the number of paragraphs inside a shape in a PDF.

// How do I find out how many text blocks are in a shape in a PDF?

// Determine the total of content sections that a shape holds in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("We got the first paragraph inside the shape.");
paragraph.AddLineBreak();
paragraph.AddText("Number of elements inside the shape: " + docContent.GetElementsCount());
paragraph.AddLineBreak();
paragraph.AddText("Line breaks are NOT counted into the number of elements.");
page.AddObject(shape);