// This example freezes the specified range in top-and-left-most pane of the worksheet.
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = Api.GetRange('H2:K4');
freezePanes.FreezeAt(range);