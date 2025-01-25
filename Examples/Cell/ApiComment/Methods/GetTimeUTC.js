// This example shows how to get the timestamp of the comment creation in UTC format.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Timestamp UTC: ");
worksheet.GetRange("B3").SetValue(comment.GetTimeUTC());