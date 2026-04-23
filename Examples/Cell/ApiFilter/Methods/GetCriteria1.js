// Retrieve the primary condition applied to a column filter to see what values pass through in a spreadsheet.

// How do I find out the main filtering condition set on a column in a spreadsheet?

// Examine the first rule of an active column filter and display its value in a spreadsheet.

let worksheet = Api.GetActiveSheet();

// Prepare numeric data
worksheet.GetRange("A1").SetValue("Value");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

// Create a custom filter with two criteria (xlOr)
let dataRange = worksheet.GetRange("A1:A6");
dataRange.SetAutoFilter(1, ">20", "xlOr", "<=30");

// Get the first filter object
let autoFilter = worksheet.AutoFilter;
let filters = autoFilter.Filters;

if (filters.length > 0) {
    let filter = filters[0];
    let criteria1 = filter.GetCriteria1();  // or filter.Criteria1

    worksheet.GetRange("C1").SetValue("Criteria1 (first condition):");
    worksheet.GetRange("D1").SetValue(criteria1);
}