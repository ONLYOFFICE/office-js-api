// Insert text at the cursor position in the text being edited in a spreadsheet.

// The text is entered only while the text of a drawing is being edited, otherwise the method returns false.

// Create a shape, place the cursor after its first word, and insert another word at that position.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);
shape.GetContent().GetElement(0).AddText("Hello World");
shape.GetTextRange().MoveCursorToPos(6);
worksheet.EnterText("Beautiful ");
