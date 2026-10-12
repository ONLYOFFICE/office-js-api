// Set a new display text for a hyperlink.

// Useful for changing the text shown in a cell for a hyperlink.

// Set a new display text for a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.SetTextToDisplay("Go to ONLYOFFICE");

worksheet.GetRange("A3").SetValue("New display text: " + hyperlink.GetTextToDisplay());
