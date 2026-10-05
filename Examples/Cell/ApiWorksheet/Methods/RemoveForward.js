// Remove characters after the cursor in the text being edited in a spreadsheet.

// The method works like the Delete key and deletes characters or whole words to the right of the cursor.

// Create a shape, place the cursor before the second word, and delete this word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);
shape.GetContent().GetElement(0).AddText("Hello Beautiful World");
shape.GetTextRange().MoveCursorToPos(6);
worksheet.RemoveForward(10);
