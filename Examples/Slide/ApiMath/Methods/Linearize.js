// Convert a professional-format equation back to linear format in a presentation.

// The equation is redrawn as a single line of text, but its underlying text stays the same.

// Add a fraction in professional format to a presentation, convert it to linear format, then report its text.

let presentation = Api.GetPresentation();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.Select();
let math = presentation.GetMaths().Add("a/b");
math.Linearize();
let text = math.GetText();
let report = Api.CreateParagraph();
report.AddText("Equation text after Linearize: " + text);
shape.GetDocContent().Push(report);
