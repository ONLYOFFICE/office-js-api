// Read the expand and collapse button visibility of a pivot table in a spreadsheet.

// Create a pivot table with two row fields.

// Display whether the pivot table shows expand and collapse buttons.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1:D5").SetValue([
    ["Region", "Style", "Price"],
    ["East", "Fancy", 10],
    ["East", "Tee", 20],
    ["West", "Fancy", 30],
    ["West", "Tee", 40]
]);

let pivotTable = Api.InsertPivotNewWorksheet(worksheet.GetRange("B1:D5"));
pivotTable.AddDataField("Price");
pivotTable.AddFields({ rows: ["Region", "Style"] });

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange("A12").SetValue("Show drill indicators");
pivotWorksheet.GetRange("B12").SetValue(pivotTable.GetShowDrillIndicators());
