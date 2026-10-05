// Return the number of equations in the document.

// The count grows as more equations are added to the document.

// Add two equations to the document, then report the total number of equations.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
doc.GetMaths().Add("a+b");

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
doc.GetMaths().Add("c+d");

let count = doc.GetMaths().GetCount();
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of equations: " + count);
doc.Push(paragraph);
