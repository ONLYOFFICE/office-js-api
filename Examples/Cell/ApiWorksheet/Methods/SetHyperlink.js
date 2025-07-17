// This example adds a hyperlink to the specified range.

// How to add hyperlinks to the range.

// Add a hyperlink to the cell.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", "Api ONLYOFFICE", "ONLYOFFICE for developers");