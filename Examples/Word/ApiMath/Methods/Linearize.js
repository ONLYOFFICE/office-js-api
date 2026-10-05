// Convert a professional-format equation back to linear format.

// The equation is redrawn as a single line of text, but its underlying text stays the same.

// Add a fraction in professional format, convert it to linear format, then report its text.

let doc = Api.GetDocument();
let math = doc.GetMaths().Add("a/b");
math.Linearize();
let text = math.GetText();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Equation text after Linearize: " + text);
doc.Push(paragraph);
