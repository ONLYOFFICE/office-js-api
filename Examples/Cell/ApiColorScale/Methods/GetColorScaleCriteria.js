// Access the list of threshold criteria that define a color scale rule in a spreadsheet.

// How do I retrieve the individual breakpoints and colors that make up a color scale rule in a spreadsheet?

// Count the criteria entries of a color scale rule and display the total in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(30);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(70);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale(2);

let criteria = colorScale.GetColorScaleCriteria();

worksheet.GetRange("C1").SetValue("Criteria Count:");
worksheet.GetRange("C2").SetValue(criteria ? criteria.length : 0);