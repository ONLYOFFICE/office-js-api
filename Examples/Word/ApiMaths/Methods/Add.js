// Add an equation at the current cursor position, replacing the current selection if any.

// The equation source text can be provided in unicode or LaTeX format.

// Insert two equations, one written in unicode format and another in LaTeX format, each into its own paragraph.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
let mathUnicode = doc.GetMaths().Add("x^2 + y^2 = z^2", "unicode");

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
let mathLatex = doc.GetMaths().Add("e^{i\\pi} + 1 = 0", "latex");
