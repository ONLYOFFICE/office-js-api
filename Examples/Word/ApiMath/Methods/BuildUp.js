// Convert a linear-format equation to professional (built-up) display format.

// The equation is redrawn as a built-up formula, but its underlying text stays the same.

// Add a fraction, switch it to linear format and back to professional format, then report its text.

let doc = Api.GetDocument();
let math = doc.GetMaths().Add("a/b");
math.Linearize();
math.BuildUp();
let text = math.GetText();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Equation text after BuildUp: " + text);
doc.Push(paragraph);
