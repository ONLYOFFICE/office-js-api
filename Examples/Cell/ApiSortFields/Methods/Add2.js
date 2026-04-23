// Register a sort column that can also target a sub-property of a linked data type in a spreadsheet.

// How do I add a sort column with an optional sub-property for linked data in a spreadsheet?

// Supply a subfield alongside the column to refine what value the sort reads from each cell in a spreadsheet.

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