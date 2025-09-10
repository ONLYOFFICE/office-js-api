// This example demonstrates getting the calculation scope for above average conditions in pivot tables.

// How to check the calculation scope setting for pivot table conditional formatting.

// Get the calculation scope for above average conditional formatting.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition = formatConditions.AddAboveAverage();
condition.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let calcFor = condition.GetCalcFor();

worksheet.GetRange("C1").SetValue("Calc Scope:");
worksheet.GetRange("C2").SetValue(calcFor.toString());
