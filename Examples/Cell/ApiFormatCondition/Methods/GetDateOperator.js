// Retrieve the time period comparison type used by a date-based formatting rule in a spreadsheet.

// How do I check which date period a conditional formatting rule is set to highlight in a spreadsheet?

// Inspect the date condition of a rule to confirm it targets the intended time window in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Dates");
worksheet.GetRange("A2").SetValue("2023-01-15");
worksheet.GetRange("A3").SetValue("2023-02-20");
worksheet.GetRange("A4").SetValue("2023-03-10");
worksheet.GetRange("A5").SetValue("2023-04-05");
worksheet.GetRange("A6").SetValue("2023-05-25");

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlTimePeriod", "xlThisMonth");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let dateOperator = condition1.GetDateOperator();

worksheet.GetRange("C1").SetValue("Date operator:");
worksheet.GetRange("C2").SetValue(dateOperator ? dateOperator : "None");