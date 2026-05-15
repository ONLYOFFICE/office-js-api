// Lock one or more leftmost columns so they remain visible while scrolling right in a spreadsheet.

// How do I stop columns from moving out of view when scrolling horizontally in a spreadsheet?

// Pin the leading columns in place to keep key labels visible at all times in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeColumns(1);