// This example gets a specific conditional formatting rule by index.

// How to get individual conditional formatting rules from a collection.

// Get specific conditional formatting rule by index.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sample Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(45);
worksheet.GetRange("A4").SetValue(75);
worksheet.GetRange("A5").SetValue(25);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

formatConditions.AddDatabar();

let firstRule = formatConditions.GetItem(1);

worksheet.GetRange("B1").SetValue("Rule found: " + (firstRule !== null));
