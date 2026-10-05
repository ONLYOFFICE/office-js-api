// Move the text cursor to the left in the text being edited in a spreadsheet.

// The cursor moves only while the text of a drawing is being edited, otherwise the method returns false.

// Add an equation, move the cursor one character to the left, then insert the missing part of the equation at the new position.

let worksheet = Api.GetActiveSheet();
let math = worksheet.GetMaths().Add("a+c", "unicode");
worksheet.MoveCursorLeft(1);
worksheet.EnterText("b+");
worksheet.GetRange("A1").SetValue("Equation text: " + math.GetText());
