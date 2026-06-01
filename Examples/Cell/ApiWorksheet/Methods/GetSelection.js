// Operate on cells the user currently has chosen in a spreadsheet.

// Identify which cells are active and modify them regardless of their location in a spreadsheet?

// Put text into selected cells without knowing their exact position in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetSelection().SetValue("selected");