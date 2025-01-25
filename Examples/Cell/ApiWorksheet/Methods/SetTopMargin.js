let worksheet = Api.GetActiveSheet();
worksheet.SetTopMargin(25.1);
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");