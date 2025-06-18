// This example shows how to get an object that represents an active cell.

// How to get selected active cell.

// Get an active cell and insert data to it.

let worksheet = Api.GetActiveSheet();
let activeCell = worksheet.GetActiveCell();
activeCell.SetValue("This sample text was placed in an active cell.");