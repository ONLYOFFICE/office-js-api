// Move the cursor to the end of a math equation in a document.

// The cursor is placed inside the equation, after its last character.

// Add a term at the end of the equation.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Equation: ");
let math = Api.CreateMath("a + b");
paragraph.AddElement(math);
math.MoveCursorToEnd();
doc.EnterText(" = c");
