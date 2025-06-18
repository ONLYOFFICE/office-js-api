// This example freezes the specified range in top-and-left-most pane of the worksheet.

// How to freeze a specified range of panes.

// Get freeze panes and freeze the specified part.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = Api.GetRange('H2:K4');
freezePanes.FreezeAt(range);