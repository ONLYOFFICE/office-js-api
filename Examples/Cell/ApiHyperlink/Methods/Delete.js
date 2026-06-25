// Delete a hyperlink from a cell.

// Useful for removing a hyperlink while keeping the cell text.

// Delete a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.Delete();

worksheet.GetRange("A3").SetValue("Hyperlinks count after delete: " + worksheet.GetHyperlinks().length);
