// Lock the first column in place so it stays visible while scrolling in a spreadsheet.

// How do I freeze a column so it remains visible when navigating across many columns in a spreadsheet?

// Pin the leading column and record its address for reference in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());