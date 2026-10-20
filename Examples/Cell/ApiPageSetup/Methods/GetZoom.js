// Read the print scaling factor (zoom) of a worksheet in a spreadsheet.

// How do I find out the print scaling percentage before printing in a spreadsheet?

// Check the current print zoom level of a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetZoom(80);
let zoom = pageSetup.GetZoom();
worksheet.GetRange("A1").SetValue("Print zoom: " + zoom + "%");
