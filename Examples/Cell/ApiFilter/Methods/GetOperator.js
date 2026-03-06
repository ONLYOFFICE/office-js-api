// This example reads the operator used by a filter.

// How to detect the type of filter (values, custom AND/OR, dynamic, top10, etc.).

// Use ApiFilter.GetOperator() to identify the filter operator.

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
