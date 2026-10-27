// Get the name of a hyperlink.

// Needed when reading the name of a hyperlink in a cell.

// Get the name of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Hyperlink name: " + hyperlink.GetName());
