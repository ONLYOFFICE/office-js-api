// Read how many pages wide the printout is scaled to in a spreadsheet.

// How do I find out the fit-to-pages-wide setting before printing in a spreadsheet?

// Check the horizontal fit-to-page scaling (0 means automatic) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFitToPagesWide(1);
let wide = pageSetup.GetFitToPagesWide();
worksheet.GetRange("A1").SetValue("Fit to pages wide: " + wide);
