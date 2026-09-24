// Retrieve the type of a shading object on a slide.

// Check whether a shading fills the background before applying it on a slide.

// Shade the text of a shape and write the shading type into it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.Color('#F2F2F2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const shd = Api.CreateShd('clear', Api.Color('#E2EFDA'));
const paragraph = shape.GetContent().GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.SetFill(Api.CreateSolidFill(Api.Color('#000000')));
run.SetShd(shd);
run.AddText('Shading type = ' + shd.GetType());
paragraph.AddElement(run);
slide.AddObject(shape);