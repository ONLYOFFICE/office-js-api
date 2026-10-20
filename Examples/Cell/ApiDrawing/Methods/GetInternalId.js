// Get the internal identifier of a drawing in a spreadsheet.

// Useful for keeping a reference to a drawing and finding it later with Api.GetByInternalId.

// Add a shape and write its internal ID to a cell of the spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.HexColor('#5B9BD5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape('rect', Api.MillimetersToEmus(60), Api.MillimetersToEmus(30), fill, stroke, 1, 0, 2, 0);
worksheet.GetRange('A1').SetValue('Shape internal ID: ' + shape.GetInternalId());