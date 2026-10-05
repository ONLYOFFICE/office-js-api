// Replace the content of a text range with an equation in a presentation.

// The range must be an ApiTextRange obtained from a shape's own text, and the equation source text is given explicitly.

// Replace a placeholder text range in a shape with an equation built from an explicit formula.

let presentation = Api.GetPresentation();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("PLACEHOLDER");
let range = shape.GetTextRange().GetRange(0, "PLACEHOLDER".length);
let math = presentation.GetMaths().ReplaceRange(range, "y^2", "unicode");
