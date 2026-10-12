// Retrieve the class type of a shading object in a spreadsheet.

// Confirm the type name of a shading object before applying it in a spreadsheet.

// Shade the text of a shape and write the class type of the shading into it.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.Color('#F2F2F2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape('rect', 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const shd = Api.CreateShd('clear', Api.Color('#DDEBF7'));
const paragraph = shape.GetContent().GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.SetFill(Api.CreateSolidFill(Api.Color('#000000')));
run.SetShd(shd);
run.AddText('Class type = ' + shd.GetClassType());
paragraph.AddElement(run);