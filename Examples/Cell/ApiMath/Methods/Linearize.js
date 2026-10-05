// Convert a math equation from professional (built-up) display format back to linear format in a spreadsheet.

// Switch how an equation is displayed, from a two-dimensional, textbook-like layout back to a single line of text.

// Add an equation in the professional view, convert it to the linear view, then report its text.

let worksheet = Api.GetActiveSheet();
let shape = worksheet.AddShape("rect", 50 * 36000, 50 * 36000, null, null, 0, 0, 0, 0);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let math = Api.CreateMath("a^2 + b^2 = c^(2/x)", "unicode");
paragraph.AddElement(math);
math.Linearize();

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Equation text after Linearize: " + math.GetText());
docContent.Push(paragraph2);
