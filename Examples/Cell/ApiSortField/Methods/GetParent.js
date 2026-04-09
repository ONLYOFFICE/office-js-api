// This example gets the parent sort fields collection from a sort field.

// How to navigate from a sort field back to its parent ApiSortFields collection.

// Navigating back to the collection lets you check the total field count or iterate over all fields.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
let field = sortFields.Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
let parent = field.GetParent();

worksheet.GetRange("C1").SetValue("Parent fields count:");
worksheet.GetRange("D1").SetValue(parent.GetCount());
