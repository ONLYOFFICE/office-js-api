// Convert a professional-format equation back to linear display format in a PDF.

// The equation is redrawn as a single line of text, but its underlying text stays the same.

// Insert a fraction equation in professional format, convert it to linear format, then report its text.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, null, null);
shape.SetPosition(0, 0);
page.AddObject(shape);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Equation: ");
let math = Api.CreateMath("a/b", "unicode");
paragraph.AddElement(math);

math.Linearize();
let text = math.GetText();

let report = Api.CreateParagraph();
report.AddText("Equation text after Linearize: " + text);
docContent.Push(report);
