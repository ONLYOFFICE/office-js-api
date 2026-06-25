// Set the print scaling factor (zoom) of a worksheet in a spreadsheet.

// How do I shrink or enlarge the printout to a percentage of its size in a spreadsheet?

// Scale the printed worksheet to a given percentage in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetZoom(80);
