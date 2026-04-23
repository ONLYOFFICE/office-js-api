// Read the comparison operator used by a column filter in a spreadsheet.

// How do I find out what kind of filtering rule is applied to a column in a spreadsheet?

// Identify the filtering logic behind a column's filter to understand how rows are shown or hidden in a spreadsheet.

let worksheet = Api.GetActiveSheet();

// Prepare data
worksheet.GetRange("A1").SetValue("Amount");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

// Apply a Top10 items filter
let dataRange = worksheet.GetRange("A1:A6");
dataRange.SetAutoFilter(1, "3", "xlTop10Items");

// Get the filter and read its operator
let autoFilter = worksheet.AutoFilter;
let filters = autoFilter.Filters;

if (filters.length > 0) {
    let filter = filters[0];

    worksheet.GetRange("C1").SetValue("Filter operator:");
    worksheet.GetRange("D1").SetValue(filter.GetOperator());   // or filter.Operator
}