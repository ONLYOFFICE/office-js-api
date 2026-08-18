// Add Unicode code points with exact character widths to a shape's content in a spreadsheet.

// How do I append characters preserving their exact widths to a shape's document content in a spreadsheet?

// Append the "Widths" word to the last paragraph of a shape so that every character keeps the width specified in millimeters.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
content.GetElement(0).AddText("First sentence: ");
content.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);
worksheet.GetRange("A1").SetValue("Shape text: " + content.GetText({TableCellSeparator: ""}));
