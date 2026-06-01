// Display or conceal a sheet in a spreadsheet.

// How do I make a sheet visible or hidden from other users in a spreadsheet?

// Control whether a sheet appears in the tab list or remains inaccessible in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
worksheet.GetRange("A1").SetValue("The current worksheet is visible.");