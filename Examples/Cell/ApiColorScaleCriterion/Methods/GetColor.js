// Read the color assigned to a threshold point of a color gradient rule in a spreadsheet.

// How do I find out what color is used at a specific stop of a color scale in a spreadsheet?

// Inspect the fill color tied to one of the gradient breakpoints in a color scale rule in a spreadsheet.

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

if (criteria && criteria.length > 0) {
    let criterionColor = criteria[0].GetColor();
    
    worksheet.GetRange("C1").SetValue("Has Color:");
    worksheet.GetRange("C2").SetValue(criterionColor ? "Yes" : "No");
}