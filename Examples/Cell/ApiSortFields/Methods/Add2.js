// Add a sort field with subfield support to a sort fields collection in a spreadsheet.

// How to add a sort field with an optional subfield for linked data types in a spreadsheet.

// Add a sort field with an optional subfield — the sort is applied immediately in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("A4").SetValue("Bananas");
let table = worksheet.AddListObject("xlSrcRange", "A1:A4");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
sortFields.Add2(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending", null, "xlSortNormal", null);

worksheet.GetRange("C1").SetValue("Fields count:");
worksheet.GetRange("D1").SetValue(sortFields.GetCount());
worksheet.GetRange("C2").SetValue("First product after sort:");
worksheet.GetRange("D2").SetValue(worksheet.GetRange("A2").GetValue());