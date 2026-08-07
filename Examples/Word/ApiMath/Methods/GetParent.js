// Access the element that directly contains a math equation.

// The parent is the paragraph that directly contains the math equation.

// Navigate from a math equation up to its parent paragraph and make it italic.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Equation: ");
let math = Api.CreateMath("a^2 + b^2 = c^2");
paragraph.AddElement(math);
let parent = math.GetParent();
parent.SetItalic(true);
