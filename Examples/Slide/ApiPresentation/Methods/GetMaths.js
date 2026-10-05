// Return the collection of equations of the current presentation.

// The collection can be used to add, look up, and count the equations in a presentation.

// Get the equations collection, add an equation through it, then report the total number of equations.

let presentation = Api.GetPresentation();
let maths = presentation.GetMaths();

let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.Select();
maths.Add("a^2 + b^2 = c^2");

let count = maths.GetCount();
let report = Api.CreateParagraph();
report.AddText("Number of equations: " + count);
shape.GetDocContent().Push(report);
