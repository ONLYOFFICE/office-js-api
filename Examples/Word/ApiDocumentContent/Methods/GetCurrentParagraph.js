// This example shows how to get the current paragraph from the document content.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const rgb = Api.CreateRGBColor(100, 150, 200);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(drawing);

const docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
const newParagraph = Api.CreateParagraph();
newParagraph.AddText("This is a new paragraph inside the shape.");
docContent.Push(newParagraph);

const currentParagraph = docContent.GetCurrentParagraph();
currentParagraph.AddText("(Current paragraph detected!)");
