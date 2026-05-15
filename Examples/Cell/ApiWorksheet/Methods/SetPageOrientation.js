// Switch between portrait and landscape page layouts in a spreadsheet.

// How do I rotate the page orientation from vertical to horizontal in a spreadsheet?

// Choose whether your printed pages display in tall or wide format in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPageOrientation("xlPortrait");
let pageOrientation = worksheet.GetPageOrientation();
worksheet.GetRange("A1").SetValue("Page orientation: ");
worksheet.GetRange("C1").SetValue(pageOrientation);