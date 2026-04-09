// This example sets the sort orientation of a table sort object.

// How to configure whether sorting applies top-to-bottom or left-to-right.

// Set the sort direction.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
sort.SetOrientation("xlTopToBottom");

worksheet.GetRange("C1").SetValue("Sort orientation:");
worksheet.GetRange("D1").SetValue(sort.GetOrientation());
