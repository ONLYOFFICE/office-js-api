// Determine the index of a math equation within its parent paragraph in a PDF.

// The position reflects where the equation sits among the paragraph's other elements, or -1 if the equation has no parent.

// Insert a math equation into a paragraph and report the position it actually ends up at within that paragraph.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, null, null);
shape.SetPosition(0, 0);
page.AddObject(shape);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Equation: ");
let math = Api.CreateMath("a^2 + b^2 = c^2", "unicode");
paragraph.AddElement(math);

let position = math.GetPosInParent();

let report = Api.CreateParagraph();
report.AddText("The math equation is at position " + position + " within its parent.");
docContent.Push(report);
