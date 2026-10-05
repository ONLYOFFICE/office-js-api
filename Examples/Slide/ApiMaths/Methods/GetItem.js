// Return the equation at the specified index in the collection of equations of a presentation.

// The index is zero-based; an index past the end of the collection returns null.

// Add two equations to a presentation, then get each one back by its index and report their text.

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

let firstMath = presentation.GetMaths().GetItem(0);
let secondMath = presentation.GetMaths().GetItem(1);
let outOfRange = presentation.GetMaths().GetItem(10);

let report = Api.CreateParagraph();
report.AddText("Items: " + firstMath.GetText() + ", " + secondMath.GetText() + ", out of range: " + outOfRange);
shape.GetDocContent().Push(report);
