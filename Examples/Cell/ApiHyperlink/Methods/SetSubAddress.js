// This example sets a new subaddress for a hyperlink.

// How to change the internal location of an existing hyperlink in a cell.

// Set a new subaddress for a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "", "Sheet1!B5", "Go to B5", "Internal link");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.SetSubAddress("Sheet1!D10");

worksheet.GetRange("A3").SetValue("New subaddress: " + hyperlink.GetSubAddress());
