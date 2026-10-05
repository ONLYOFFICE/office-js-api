// Return the number of equations in the presentation.

// The count grows as more equations are added to the presentation.

// Add two equations to a presentation, then report the total number of equations.

let presentation = Api.GetPresentation();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.Select();
presentation.GetMaths().Add("a+b");

paragraph = Api.CreateParagraph();
shape.GetDocContent().Push(paragraph);
paragraph.Select();
presentation.GetMaths().Add("c+d");

let count = presentation.GetMaths().GetCount();
let report = Api.CreateParagraph();
report.AddText("Number of equations: " + count);
shape.GetDocContent().Push(report);
