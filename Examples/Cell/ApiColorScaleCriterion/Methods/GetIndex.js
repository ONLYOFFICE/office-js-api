// Retrieve the position number of a breakpoint within a color gradient rule in a spreadsheet.

// How do I find out which stop number a particular criterion occupies in a color scale in a spreadsheet?

// Identify the sequential order of a color scale breakpoint to understand its place in the gradient in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(30);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(70);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale(3);
let criteria = colorScale.GetColorScaleCriteria();

if (criteria && criteria.length > 0) {
    worksheet.GetRange("C1").SetValue("Criterion 1 Index:");
    worksheet.GetRange("C2").SetValue(criteria[0].GetIndex());
    
    if (criteria.length > 1) {
        worksheet.GetRange("C3").SetValue("Criterion 2 Index:");
        worksheet.GetRange("C4").SetValue(criteria[1].GetIndex());
    }
}