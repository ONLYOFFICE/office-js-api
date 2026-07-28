// Read the text representation of a math equation, either as unicode linear text or as LaTeX, in a presentation.

// Get the formula of an equation back as plain text or as LaTeX in a presentation.

// Build a fraction equation, then read it back both as unicode text and as LaTeX.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const math = Api.CreateMath("dx/dy", "unicode");
paragraph.AddElement(math);
const unicodeText = math.GetText(false);
const latexText = math.GetText(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Unicode: " + unicodeText + ", LaTeX: " + latexText);
docContent.Push(paragraph2);
