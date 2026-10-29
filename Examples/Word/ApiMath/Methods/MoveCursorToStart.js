// Move the cursor to the start of a math equation in a document.

// The cursor is placed inside the equation, before its first character.

// Add a term at the beginning of the equation.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Equation: ");
let math = Api.CreateMath("b + c");
paragraph.AddElement(math);
math.MoveCursorToStart();
doc.EnterText("a + ");
