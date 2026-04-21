// Freeze the first column in a spreadsheet.

// How to freeze columns using their indices in a spreadsheet.

// Get freeze panes and freeze a column using its index in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeColumns(1);