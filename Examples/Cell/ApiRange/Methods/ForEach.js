// Run a custom action on every cell in a range in a spreadsheet.

// How do I apply the same operation to each cell in a selection in a spreadsheet?

// Loop over a group of cells and bold any that do not contain a specific value.

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