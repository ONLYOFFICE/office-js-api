// Build a math equation object and insert it into a paragraph like a text run in a document.

// Create the equation from a Unicode math expression string before attaching it to the paragraph.

// Produce a reusable equation object and place it into paragraph content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
