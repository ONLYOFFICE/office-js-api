// Lock one or more top rows so they stay visible while scrolling down in a spreadsheet.

// How do I keep header rows from disappearing when scrolling through data in a spreadsheet?

// Pin the uppermost rows in place so column labels are always on screen in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeRows(1);