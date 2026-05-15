// Pick a theme color by name and apply it to a shape in a spreadsheet.

// How do I use one of the document's theme colors to fill a shape in a spreadsheet?

// Reuse a named theme color so the shape automatically matches the document palette in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let schemeColor = Api.CreateSchemeColor("dk1");
let fill = Api.CreateSolidFill(schemeColor);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("curvedUpArrow", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);