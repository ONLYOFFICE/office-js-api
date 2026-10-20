// Determine the index of a math equation within its parent element.

// The position is the math equation's index within its parent paragraph.

// Read a math equation's position within its paragraph and report it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Equation: ");
let math = Api.CreateMath("a^2 + b^2 = c^2");
paragraph.AddElement(math);
let position = math.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The math equation is at position " + position + ".");
doc.Push(report);
