// This example adds a hyperlink to the specified range.
let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://api.onlyoffice.com/docbuilder/basic", "Api ONLYOFFICE", "ONLYOFFICE for developers");