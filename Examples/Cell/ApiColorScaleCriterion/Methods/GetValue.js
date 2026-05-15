// Read the threshold value stored in a color scale rule point in a spreadsheet.

// How do I retrieve the numeric boundary set for a color scale rule point in a spreadsheet?

// Confirm what boundary number a color scale rule entry holds before applying the gradient in a spreadsheet.

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
    let criterionValue = criteria[0].GetValue();
    
    worksheet.GetRange("C1").SetValue("Criterion Value:");
    worksheet.GetRange("C2").SetValue(criterionValue || "No value");
}