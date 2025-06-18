// This example freezes the the top row.

// How to freeze rows using their indices.

// Get freeze panes and freeze a row using its index.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeRows(1);