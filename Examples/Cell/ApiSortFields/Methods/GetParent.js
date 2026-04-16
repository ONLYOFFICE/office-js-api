// Get the parent sort object from a sort fields collection in a spreadsheet.

// How to navigate from a sort fields collection back to the sort object in a spreadsheet.

// Navigating back to the sort object lets you call Apply() or check settings such as MatchCase in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
let parentSort = sortFields.GetParent();

worksheet.GetRange("C1").SetValue("Parent orientation:");
worksheet.GetRange("D1").SetValue(parentSort.GetOrientation());