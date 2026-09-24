// Retrieve the color of a shading object in a PDF.

// Read back the color stored in a shading object in a PDF.

// Shade the text of a shape and write the shading color into it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.Color('#F2F2F2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const shd = Api.CreateShd('clear', Api.Color('#FCE4D6'));
const paragraph = shape.GetContent().GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.SetFill(Api.CreateSolidFill(Api.Color('#000000')));
run.SetShd(shd);
run.AddText('Shading color = ' + shd.GetColor().GetHex());
paragraph.AddElement(run);
page.AddObject(shape);