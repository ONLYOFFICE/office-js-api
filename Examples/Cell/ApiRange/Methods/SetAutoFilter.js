// This example sets the autofilter by cell range.
// How to auto filter specified range values.
// Automatically filter out a range values.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("header");
worksheet.GetRange("A2").SetValue("value2");
worksheet.GetRange("A3").SetValue("value3");
worksheet.GetRange("A4").SetValue("value4");
worksheet.GetRange("A5").SetValue("value5");
let range = worksheet.GetRange("A1:A5");
range.SetAutoFilter(1, ["value2","value3"], "xlFilterValues");
