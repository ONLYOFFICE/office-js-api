// Read the text representation of a math equation, either as unicode linear text or as LaTeX, in a spreadsheet.

// How do I get the formula of an equation back as plain text or as LaTeX in a spreadsheet?

// Build a fraction equation, then read it back both as unicode text and as LaTeX.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let math = Api.CreateMath("dx/dy", "unicode");
paragraph.AddElement(math);
let unicodeText = math.GetText(false);
let latexText = math.GetText(true);

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Unicode: " + unicodeText + ", LaTeX: " + latexText);
docContent.Push(paragraph2);
