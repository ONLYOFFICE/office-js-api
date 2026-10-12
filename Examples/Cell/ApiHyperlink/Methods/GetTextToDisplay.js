// Get the display text of a hyperlink.

// Needed when reading the text shown in a cell for a hyperlink.

// Get the display text of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Text to display: " + hyperlink.GetTextToDisplay());
