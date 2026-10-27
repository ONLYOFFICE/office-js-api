// Remove the rows that repeat the values of the chosen columns from a range in a spreadsheet.

// How do I delete duplicate rows from a list and keep the first of each in a spreadsheet?

// Clean up an order list by removing the repeated customer and product pairs in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:C6").SetValue([
    ["Customer", "Product", "Qty"],
    ["Anna", "Tea", 2],
    ["Boris", "Coffee", 1],
    ["Anna", "Tea", 5],
    ["Clara", "Tea", 3],
    ["Boris", "Coffee", 4]
]);
let removed = worksheet.GetRange("A1:C6").RemoveDuplicates([1, 2], "xlYes");
worksheet.GetRange("E1").SetValue("Removed rows: " + removed);