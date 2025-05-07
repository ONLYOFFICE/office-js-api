// This example freezes the the first column.

// How to freeze columns using their indices.

// Get freeze panes and freeze a column using its index.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeColumns(1);