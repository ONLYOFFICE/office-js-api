// Get the range a hyperlink is attached to.

// Useful for getting the cell range of a hyperlink.

// Get the range of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("B2", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
let range = hyperlink.GetRange();

worksheet.GetRange("A4").SetValue("Hyperlink range address: " + range.GetAddress());
