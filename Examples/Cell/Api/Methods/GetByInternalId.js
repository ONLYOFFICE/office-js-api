// Look up a shape by its internal ID and add text to it in a spreadsheet.

// Pass the ID returned by GetInternalId to get the same drawing object back in a spreadsheet.

// Find a shape by an internal ID that stays valid only while the spreadsheet is open.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const internalId = shape.GetInternalId();
const found = Api.GetByInternalId(internalId);

found.GetContent().GetElement(0).AddText('This shape was found by its internal ID.');
worksheet.GetRange('A1').SetValue('Found object class type: ' + found.GetClassType());