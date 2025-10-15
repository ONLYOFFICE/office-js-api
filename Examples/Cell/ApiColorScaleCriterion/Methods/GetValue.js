// This example demonstrates getting the value of color scale criterion.

// How to retrieve the value of a color scale criterion.

// Get the value of a color scale criterion.

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
