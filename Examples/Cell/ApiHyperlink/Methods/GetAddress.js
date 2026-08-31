// Get the address of a hyperlink.

// Needed when reading the URL of a hyperlink in a cell.

// Get the address of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Address: " + hyperlink.GetAddress());
