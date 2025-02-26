// This example splits the selected merged cell range into the single cells.

// How to unmerge a range of cells.

// Get a range and split its merged cells.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A3:E8").Merge(true);
oWorksheet.GetRange("A5:E5").UnMerge();