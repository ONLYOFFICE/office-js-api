// Freeze the the top row in a spreadsheet.

// How to freeze rows using their indices in a spreadsheet.

// Get freeze panes and freeze a row using its index in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeRows(1);