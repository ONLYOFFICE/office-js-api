// This example sets the timestamp of the comment creation in the current time zone format.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Timestamp: ");
comment.SetTime(Date.now());
worksheet.GetRange("B3").SetValue(comment.GetTime());