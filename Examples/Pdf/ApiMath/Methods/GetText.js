// Read the text representation of a math equation, either as unicode linear text or as LaTeX, in a PDF.

// Get the formula of an equation back as plain text or as LaTeX in a PDF.

// Build a fraction equation, then read it back both as unicode text and as LaTeX.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const math = Api.CreateMath("dx/dy", "unicode");
paragraph.AddElement(math);
const unicodeText = math.GetText("unicode");
const latexText = math.GetText("latex");

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Unicode: " + unicodeText + ", LaTeX: " + latexText);
docContent.Push(paragraph2);
