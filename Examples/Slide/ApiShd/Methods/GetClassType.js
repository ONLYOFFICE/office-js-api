// Retrieve the class type of a shading object on a slide.

// Confirm the type name of a shading object before applying it on a slide.

// Shade the text of a shape and write the class type of the shading into it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.Color('#F2F2F2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const shd = Api.CreateShd('clear', Api.Color('#DDEBF7'));
const paragraph = shape.GetContent().GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.SetFill(Api.CreateSolidFill(Api.Color('#000000')));
run.SetShd(shd);
run.AddText('Class type = ' + shd.GetClassType());
paragraph.AddElement(run);
slide.AddObject(shape);