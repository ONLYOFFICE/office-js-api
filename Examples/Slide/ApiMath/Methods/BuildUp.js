// Convert a linear-format equation to professional (built-up) display format in a presentation.

// The equation is redrawn as a built-up formula, but its underlying text stays the same.

// Add a fraction to a presentation, switch it to linear format and back to professional format, then report its text.

let presentation = Api.GetPresentation();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.Select();
let math = presentation.GetMaths().Add("a/b");
math.Linearize();
math.BuildUp();
let text = math.GetText();
let report = Api.CreateParagraph();
report.AddText("Equation text after BuildUp: " + text);
shape.GetDocContent().Push(report);
