// Convert a linear-format equation to professional (built-up) display format in a PDF.

// The equation is redrawn as a built-up formula, but its underlying text stays the same.

// Insert a fraction equation, switch it to linear format and back to professional format, then report its text.

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
math.BuildUp();
let text = math.GetText();

let report = Api.CreateParagraph();
report.AddText("Equation text after BuildUp: " + text);
docContent.Push(report);
