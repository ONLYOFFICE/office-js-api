// Set the spell-check language for a text range in a shape on a worksheet.

// The language applies to the covered fragment only.

// Set the language of the first word and print it.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("This is a sample text.");

let firstWord = shape.GetTextRange().GetRange(0, 4);
firstWord.SetLanguage("en-CA");
paragraph.AddText(" Language of the first word: " + firstWord.GetTextPr().GetLanguage());