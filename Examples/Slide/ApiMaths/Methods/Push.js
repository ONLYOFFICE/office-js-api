// Insert an equation created separately at the current cursor position in a presentation.

// The equation built with Api.CreateMath appears on the slide only after it is pushed to the equations collection of the presentation.

// Create an equation, insert it after the text of a shape, then report the text of the inserted equation.

let presentation = Api.GetPresentation();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
let docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Pythagorean theorem: ");
shape.GetTextRange().Select();
presentation.MoveCursorRight();
let math = Api.CreateMath("a^2 + b^2 = c^2", "unicode");
let insertedMath = presentation.GetMaths().Push(math);
let report = Api.CreateParagraph();
report.AddText("Inserted equation: " + insertedMath.GetText());
docContent.Push(report);
