// This example splits the selected merged cell range into the single cells.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3:E8").Merge(true);
worksheet.GetRange("A5:E5").UnMerge();