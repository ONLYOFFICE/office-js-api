// Change the priority of a sort field in a spreadsheet.

// How to reorder sort fields by changing a field's priority in a spreadsheet.

// Change the priority of a sort field and apply the sort in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
worksheet.GetRange("A4").SetValue("Bananas");
worksheet.GetRange("B4").SetValue(80);
let table = worksheet.AddListObject("xlSrcRange", "A1:B4");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
sortFields.Add(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending");
let fieldPrice = sortFields.Add(worksheet.GetRange("B1"), "xlSortOnValues", "xlAscending");

fieldPrice.SetPriority(1);
sort.Apply();

worksheet.GetRange("D1").SetValue("First product after sort by price:");
worksheet.GetRange("E1").SetValue(worksheet.GetRange("A2").GetValue());