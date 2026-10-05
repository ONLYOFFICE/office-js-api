// Return the paragraph that contains a math equation in a spreadsheet.

// Get access to the paragraph object that owns an equation, or null if the equation is not attached to any paragraph.

// Add an equation to a shape, then check that its parent paragraph can be found.

let worksheet = Api.GetActiveSheet();
let shape = worksheet.AddShape("rect", 50 * 36000, 50 * 36000, null, null, 0, 0, 0, 0);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let math = Api.CreateMath("a^2 + b^2 = c^2", "unicode");
paragraph.AddElement(math);
let parent = math.GetParent();

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Parent class type = " + parent.GetClassType());
docContent.Push(paragraph2);
