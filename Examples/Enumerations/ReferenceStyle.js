// Get the reference style.

// Retrieve the reference style and display it in the worksheet.

// The reference style value is written to cell A1.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());