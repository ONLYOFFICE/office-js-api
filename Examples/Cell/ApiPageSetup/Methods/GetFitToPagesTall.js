// Read how many pages tall the printout is scaled to in a spreadsheet.

// How do I find out the fit-to-pages-tall setting before printing in a spreadsheet?

// Check the vertical fit-to-page scaling (0 means automatic) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFitToPagesTall(2);
let tall = pageSetup.GetFitToPagesTall();
worksheet.GetRange("A1").SetValue("Fit to pages tall: " + tall);
