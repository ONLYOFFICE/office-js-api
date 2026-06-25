// Read the page orientation used when printing a spreadsheet.

// How do I find out if a worksheet prints in portrait or landscape in a spreadsheet?

// Check the current page orientation before printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOrientation("xlLandscape");
let orientation = pageSetup.GetOrientation();
worksheet.GetRange("A1").SetValue("Orientation: " + orientation);
