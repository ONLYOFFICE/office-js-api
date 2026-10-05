// Return the equation the cursor is currently located in, in a presentation.

// If the cursor is not inside an equation, null is returned instead.

// Insert an equation into a presentation, then get the equation the cursor is left inside of and report its text.

let presentation = Api.GetPresentation();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.Select();
presentation.GetMaths().Add("x+1");

let activeMath = presentation.GetMaths().GetActiveMath();
let report = Api.CreateParagraph();
report.AddText("Active equation text: " + activeMath.GetText());
shape.GetDocContent().Push(report);
