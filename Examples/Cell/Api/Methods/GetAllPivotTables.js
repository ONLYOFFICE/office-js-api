// Retrieve every pivot table across all sheets in a spreadsheet.

// How do I access all pivot tables at once in a spreadsheet?

// Loop through each pivot table to apply changes in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
Api.InsertPivotNewWorksheet(dataRef);
Api.InsertPivotNewWorksheet(dataRef);
Api.InsertPivotNewWorksheet(dataRef);

Api.GetAllPivotTables().forEach(function (pivot) {
    pivot.AddDataField('Price');
});