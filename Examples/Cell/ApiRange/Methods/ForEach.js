// This example executes a provided function once for each cell.

// How to iterate through each cell from a range.

// For Each cycle implementation for ApiRange.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let range = worksheet.GetRange("A1:C1");
range.ForEach(function (range) {
    let value = range.GetValue();
    if (value != "1") {
        range.SetBold(true);
    }
});