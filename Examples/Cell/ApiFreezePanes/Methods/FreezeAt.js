// Lock a specific area of the sheet so it stays visible while scrolling in a spreadsheet.

// How do I pin a chosen block of rows and columns in place during scrolling in a spreadsheet?

// Keep a defined region always on screen by anchoring it to the corner of the view in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = Api.GetRange('H2:K4');
freezePanes.FreezeAt(range);