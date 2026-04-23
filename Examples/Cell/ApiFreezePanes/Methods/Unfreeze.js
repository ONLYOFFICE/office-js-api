// Release all locked rows and columns so the sheet scrolls freely in a spreadsheet.

// How do I remove frozen panes and allow the entire sheet to scroll without restrictions in a spreadsheet?

// Unpin any fixed areas to restore normal scrolling behavior across the whole sheet in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.Unfreeze();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range + "");