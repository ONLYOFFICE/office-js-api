// Move the text cursor to the right in the text being edited in a spreadsheet.

// The cursor moves only while the text of a drawing is being edited, otherwise the method returns false.

// Add an equation, move the cursor to its start and then two characters to the right, then insert the missing part of the equation.

let worksheet = Api.GetActiveSheet();
let math = worksheet.GetMaths().Add("a+c", "unicode");
worksheet.MoveCursorLeft(3);
worksheet.MoveCursorRight(2);
worksheet.EnterText("b+");
worksheet.GetRange("A1").SetValue("Equation text: " + math.GetText());
