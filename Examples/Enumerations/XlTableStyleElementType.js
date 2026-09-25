// Get the header row element of a table style by its element type.

// How to address a formatted part of a table style.

// Pass an element type name to get the element and make its font bold.

let headerRow = tableStyle.GetTableStyleElements().GetItem("xlHeaderRow");
headerRow.GetFont().SetBold(true);