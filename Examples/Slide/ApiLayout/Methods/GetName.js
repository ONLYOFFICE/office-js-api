// This example show how to get a name of the current layout.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
layout.SetName('SERENITY');

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);

const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('Name of the first layout: ' + layout.GetName());
layout.AddObject(shape);
