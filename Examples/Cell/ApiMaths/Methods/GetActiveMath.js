// Return the equation in which the text cursor is currently located in a spreadsheet.

// Find out which equation, if any, is currently being edited on the worksheet, or get null if no equation is active.

// Add an equation to the active sheet, then check whether it is reported as the currently active equation.

let worksheet = Api.GetActiveSheet();
let maths = worksheet.GetMaths();
let math = maths.Add("x^2", "unicode");

let activeMath = worksheet.GetMaths().GetActiveMath();
worksheet.GetRange("E6").SetValue("Active math found = " + (null !== activeMath));
