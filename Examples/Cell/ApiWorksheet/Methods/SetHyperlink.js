// This example adds a hyperlink to the specified range.

// How to add hyperlinks to the range.

// Add a hyperlink to the cell.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://api.onlyoffice.com/docbuilder/basic", "Api ONLYOFFICE", "ONLYOFFICE for developers");