// Determine the index of a math equation within its parent element in a presentation.

// The position is the math equation's index within its parent paragraph.

// Read a math equation's position within its paragraph in a presentation and report it back.

let presentation = Api.GetPresentation();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.Select();
let math = presentation.GetMaths().Add("a^2 + b^2 = c^2");
let position = math.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The math equation is at position " + position + ".");
shape.GetDocContent().Push(report);
