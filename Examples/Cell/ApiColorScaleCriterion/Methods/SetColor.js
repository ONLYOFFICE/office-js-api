// This example demonstrates setting the color of color scale criterion.

// How to change the color of a color scale criterion.

// Set the color of a color scale criterion.

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
    worksheet.GetRange("C1").SetValue("Before Color:");
    worksheet.GetRange("C2").SetValue(criteria[0].GetColor() ? "Set" : "None");
    
    let newColor = Api.CreateColorFromRGB(255, 0, 0);
    criteria[0].SetColor(newColor);
    
    worksheet.GetRange("C3").SetValue("After Color:");
    worksheet.GetRange("C4").SetValue(criteria[0].GetColor() ? "Set" : "None");
}
