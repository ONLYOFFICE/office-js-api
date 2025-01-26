// This example specifies whether the sheet gridlines must be displayed or not.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no gridlines");
worksheet.SetDisplayGridlines(false);