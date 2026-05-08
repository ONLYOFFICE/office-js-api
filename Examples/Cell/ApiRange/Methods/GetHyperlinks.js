// This example gets all the hyperlinks from the range.

// How to retrieve hyperlinks within a specific cell range.

// Get all hyperlinks from the range.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");
worksheet.SetHyperlink("C1", "https://helpcenter.onlyoffice.com", null, "Help Center", "ONLYOFFICE Help");

let hyperlinks = worksheet.GetRange("A1").GetHyperlinks();

worksheet.GetRange("A3").SetValue("Hyperlinks in A1: " + hyperlinks.length);
worksheet.GetRange("A4").SetValue("Address: " + hyperlinks[0].GetAddress());
