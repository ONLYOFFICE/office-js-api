// This example demonstrates setting the type of color scale criterion.

// How to change the type of a color scale criterion.

// Set the type of a color scale criterion.

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
    worksheet.GetRange("C1").SetValue("Before:");
    worksheet.GetRange("C2").SetValue(criteria[0].GetType());
    
    criteria[0].SetType("xlConditionValuePercent");
    
    worksheet.GetRange("C3").SetValue("After:");
    worksheet.GetRange("C4").SetValue(criteria[0].GetType());
}
