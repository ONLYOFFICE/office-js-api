// Return the element that directly contains a math equation in a PDF.

// The parent is the paragraph that directly contains the math equation, or null if the equation has no parent.

// Insert a math equation into a paragraph, make its parent paragraph bold, then remove the equation and show its parent becomes null.

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

let parent = math.GetParent();
parent.SetBold(true);

math.Remove();
let parentAfterRemove = math.GetParent();

let report = Api.CreateParagraph();
report.AddText("Parent found: " + (parent !== null) + ", parent after remove: " + parentAfterRemove);
docContent.Push(report);
