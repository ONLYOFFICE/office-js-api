// This example shows how to the depreciation of an asset for a specified period using the double-declining balance method or some other method you specify. 

// How to count the non-empty cells containing numbers in the field (column) of records in the database that match the conditions you specify.

// Use function to count numbers from non-empty database records that met a condition specified.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.DDB(3500, 500, 5, 1, 2));