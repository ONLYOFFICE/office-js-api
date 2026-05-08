// This example sets a new address for a hyperlink.

// How to change the URL of an existing hyperlink in a cell.

// Set a new address for a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.SetAddress("https://helpcenter.onlyoffice.com");

worksheet.GetRange("A3").SetValue("New address: " + hyperlink.GetAddress());
