// Identify the object type of a math equation in a document.

// Find out what kind of object a formula is in a document.

// Confirm the category a math equation belongs to in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
let classType = math.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
