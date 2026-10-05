// Convert a math equation from linear format to professional (built-up) display format in a spreadsheet.

// Switch how an equation is displayed, from a single line of text to a two-dimensional, textbook-like layout.

// Switch an equation to the linear view, convert it back to the professional view, then report its text.

let worksheet = Api.GetActiveSheet();
let shape = worksheet.AddShape("textRect", 50 * 36000, 50 * 36000, null, null, 0, 0, 0, 0);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let math = Api.CreateMath("a^2 + b^2 = c^(2/x)", "unicode");
paragraph.AddElement(math);
math.Linearize();
math.BuildUp();

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Equation text after BuildUp: " + math.GetText());
docContent.Push(paragraph2);
