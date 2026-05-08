// This example gets all the hyperlinks from the worksheet.

// How to retrieve all hyperlinks on a worksheet as an array.

// Get all hyperlinks from the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");
worksheet.SetHyperlink("A2", "https://helpcenter.onlyoffice.com", null, "Help Center", "ONLYOFFICE Help");

let hyperlinks = worksheet.GetHyperlinks();

worksheet.GetRange("A4").SetValue("Hyperlinks count: " + hyperlinks.length);
worksheet.GetRange("A5").SetValue("First hyperlink address: " + hyperlinks[0].GetAddress());
worksheet.GetRange("A6").SetValue("Second hyperlink address: " + hyperlinks[1].GetAddress());
