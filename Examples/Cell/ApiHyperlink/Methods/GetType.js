// This example gets the type of a hyperlink.

// How to check the type of a hyperlink attached to a cell range.

// Get the type of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Hyperlink type: " + hyperlink.GetType());
