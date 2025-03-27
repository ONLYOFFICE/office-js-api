// This example shows how to get the range address.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let address = worksheet.GetRange("A1").GetAddress(true, true, "xlA1", false);
worksheet.GetRange("A3").SetValue("Address: ");
worksheet.GetRange("B3").SetValue(address);