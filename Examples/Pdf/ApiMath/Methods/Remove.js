// Remove a math equation from its paragraph in a PDF.

// Removing the equation detaches it from its paragraph, so it no longer has a parent.

// Insert a math equation, remove it and report the result, then remove it again to show it now returns false.

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

let removed = math.Remove();
let removedAgain = math.Remove();

let report = Api.CreateParagraph();
report.AddText("Removed: " + removed + ", removed again: " + removedAgain + ", parent: " + math.GetParent());
docContent.Push(report);
