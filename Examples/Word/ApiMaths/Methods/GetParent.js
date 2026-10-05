// Access the document that owns the collection of equations.

// The parent of the equations collection is the document itself.

// Get the equations collection's parent document and confirm it is the same document instance.

let doc = Api.GetDocument();
let maths = doc.GetMaths();
let parent = maths.GetParent();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Parent is document: " + (parent === doc));
doc.Push(paragraph);
