// Return the collection of equations of the current document.

// The collection can be used to add, look up, and count the equations in a document.

// Get the equations collection, add an equation through it, then report the total number of equations.

let doc = Api.GetDocument();
let maths = doc.GetMaths();

let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
maths.Add("a^2 + b^2 = c^2");

let count = maths.GetCount();
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of equations: " + count);
doc.Push(paragraph);
