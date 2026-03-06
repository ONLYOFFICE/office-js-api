// This example shows how to set the name of a drawing.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(80, 120, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('ellipse', Api.MillimetersToEmus(60), Api.MillimetersToEmus(50), fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetName('BlueEllipse');

const content = drawing.GetContent();
const shapeParagraph = content.GetElement(0);
shapeParagraph.AddText('The name of this drawing:');
shapeParagraph.AddLineBreak();
const nameRun = Api.CreateRun();
nameRun.AddText(drawing.GetName());
nameRun.SetBold(true);
shapeParagraph.AddElement(nameRun);
