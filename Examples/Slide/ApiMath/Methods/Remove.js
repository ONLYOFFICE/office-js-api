// Remove a math equation from its paragraph in a presentation.

// Removing the equation detaches it from its paragraph, so it no longer has a parent.

// Create an equation in a presentation, remove it and report the result, then try removing it again to show it now returns false.

let presentation = Api.GetPresentation();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.Select();
let math = presentation.GetMaths().Add("a^2 + b^2 = c^2");
let removed = math.Remove();
let removedAgain = math.Remove();
let report = Api.CreateParagraph();
report.AddText("Removed: " + removed + ", removed again: " + removedAgain + ", parent: " + math.GetParent());
shape.GetDocContent().Push(report);
