// Remove a specific element from the content inside a shape in a presentation.

// How do I delete an element by its position in a shape in a presentation?

// Access the shape's content and remove a single text or object element in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is the first paragraph.");
docContent.RemoveElement(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph. The first paragraph was removed from the document content.");
docContent.Push(paragraph);
slide.AddObject(shape);