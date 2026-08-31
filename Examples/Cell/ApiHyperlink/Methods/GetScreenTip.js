// Get the screen tip text of a hyperlink.

// Needed when reading the tooltip of a hyperlink in a cell.

// Get the screen tip text of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE website", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Screen tip: " + hyperlink.GetScreenTip());
