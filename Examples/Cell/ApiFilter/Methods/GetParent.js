// This example retrieves the parent AutoFilter of a filter column.

// How to navigate from ApiFilter back to ApiAutoFilter.

// Use ApiFilter.GetParent() to access the parent filters collection.

let worksheet = Api.GetActiveSheet();

// Prepare a small table
worksheet.GetRange("A1").SetValue("City");
worksheet.GetRange("B1").SetValue("Temperature");

worksheet.GetRange("A2").SetValue("London");
worksheet.GetRange("B2").SetValue(20);
worksheet.GetRange("A3").SetValue("Paris");
worksheet.GetRange("B3").SetValue(10);
worksheet.GetRange("A4").SetValue("Rome");
worksheet.GetRange("B4").SetValue(30);

// Apply a filter on column B
let dataRange = worksheet.GetRange("A1:B4");
dataRange.SetAutoFilter(2, ">15", "xlOr");

// Get the first ApiFilter
let autoFilter = worksheet.AutoFilter;
let filters = autoFilter.Filters;

if (filters.length > 0) {
    let filter = filters[0];
    let parentAutoFilter = filter.GetParent();     // or filter.Parent

    worksheet.GetRange("D1").SetValue("Parent AutoFilter range:");
    let parentRange = parentAutoFilter.GetRange();
    if (parentRange !== null) {
        worksheet.GetRange("D2").SetValue(parentRange.GetAddress());
    }

    worksheet.GetRange("D4").SetValue("This filter belongs to the sheet:");
    worksheet.GetRange("D5").SetValue(parentAutoFilter.Parent.GetName());
}
