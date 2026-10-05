// Return the zero-based index of a math equation within its parent paragraph in a spreadsheet.

// Find out where an equation is located among the other elements of its paragraph, or get -1 if the equation has no parent.

// Add two equations to the same paragraph and report the position of the second one.

let worksheet = Api.GetActiveSheet();
let shape = worksheet.AddShape("rect", 50 * 36000, 50 * 36000, null, null, 0, 0, 0, 0);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let math1 = Api.CreateMath("a^2", "unicode");
let math2 = Api.CreateMath("b^2", "unicode");
paragraph.AddElement(math1);
paragraph.AddElement(math2);
let position = math2.GetPosInParent();

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Position in parent = " + position);
docContent.Push(paragraph2);
