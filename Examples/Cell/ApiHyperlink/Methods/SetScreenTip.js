// Set a new screen tip text for a hyperlink.

// Useful for changing the tooltip of an existing hyperlink in a cell.

// Set a new screen tip for a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE website", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.SetScreenTip("Go to ONLYOFFICE Help Center");

worksheet.GetRange("A3").SetValue("New screen tip: " + hyperlink.GetScreenTip());
