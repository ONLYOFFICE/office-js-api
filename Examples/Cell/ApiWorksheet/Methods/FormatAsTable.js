// Convert a cell range into a formatted table in a spreadsheet.

// How do I turn a plain data range into a structured table in a spreadsheet?

// Apply table styling to a range so data is easier to read and filter.

let worksheet = Api.GetActiveSheet();
worksheet.FormatAsTable("A1:E10");