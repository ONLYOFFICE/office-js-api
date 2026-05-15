// Extract a row of mail merge recipient data by its index position in a spreadsheet.

// How do I pull contact details from a mail merge table at a specific row in a spreadsheet?

// Access a particular record from the merge data set and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 20);
worksheet.GetRange("A1").SetValue("Email address");
worksheet.GetRange("B1").SetValue("Greeting");
worksheet.GetRange("C1").SetValue("First name");
worksheet.GetRange("D1").SetValue("Last name");
worksheet.GetRange("A2").SetValue("user1@example.com");
worksheet.GetRange("B2").SetValue("Dear");
worksheet.GetRange("C2").SetValue("John");
worksheet.GetRange("D2").SetValue("Smith");
worksheet.GetRange("A3").SetValue("user2@example.com");
worksheet.GetRange("B3").SetValue("Hello");
worksheet.GetRange("C3").SetValue("Kate");
worksheet.GetRange("D3").SetValue("Cage");
let mailMergeData = Api.GetMailMergeData(0);
worksheet.GetRange("A5").SetValue("Mail merge data: " + mailMergeData);