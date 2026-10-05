// Remove a math equation from its parent paragraph in a spreadsheet.

// Detach an equation from its paragraph; the method returns true when the equation is removed and false when it is already detached.

// Add an equation to a shape, remove it, then try to remove it a second time to show the returned values differ.

let worksheet = Api.GetActiveSheet();
let shape = worksheet.AddShape("rect", 50 * 36000, 50 * 36000, null, null, 0, 0, 0, 0);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let math = Api.CreateMath("a^2 + b^2 = c^2", "unicode");
paragraph.AddElement(math);
let removed = math.Remove();
let removedAgain = math.Remove();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Removed: " + removed + ", removed again: " + removedAgain);
docContent.Push(paragraph2);
