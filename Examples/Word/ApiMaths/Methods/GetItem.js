// Return the equation at the specified index in the collection of equations.

// The index is zero-based; an index past the end of the collection returns null.

// Add two equations, then get each one back by its index and report their text.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
doc.GetMaths().Add("a+b");

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
doc.GetMaths().Add("c+d");

let firstMath = doc.GetMaths().GetItem(0);
let secondMath = doc.GetMaths().GetItem(1);
let outOfRange = doc.GetMaths().GetItem(10);

paragraph = Api.CreateParagraph();
paragraph.AddText("Items: " + firstMath.GetText() + ", " + secondMath.GetText() + ", out of range: " + outOfRange);
doc.Push(paragraph);
