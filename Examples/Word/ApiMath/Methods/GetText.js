// Read the text representation of a math equation, either as unicode linear text or as LaTeX, in a document.

// Get the formula of an equation back as plain text or as LaTeX in a document.

// Build a fraction equation, then read it back both as unicode text and as LaTeX.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let math = Api.CreateMath("dx/dy", "unicode");
paragraph.AddElement(math);
let unicodeText = math.GetText(false);
let latexText = math.GetText(true);
paragraph = Api.CreateParagraph();
paragraph.AddText("Unicode: " + unicodeText + ", LaTeX: " + latexText);
doc.Push(paragraph);
