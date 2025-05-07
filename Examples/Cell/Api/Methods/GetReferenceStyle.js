// This example gets reference style.

// Get style of a reference.

// Insert a reference style into the cell.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());