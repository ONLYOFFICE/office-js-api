// This example gets the subaddress of a hyperlink.

// How to read the internal location of a hyperlink in a cell.

// Get the subaddress of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "", "Sheet1!B5", "Go to B5", "Internal link");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("SubAddress: " + hyperlink.GetSubAddress());
