// Add Unicode code points with exact character widths to a shape's content in a presentation.

// How do I append characters preserving their exact widths to a shape's document content in a presentation?

// Append the "Widths" word to the last paragraph of a shape so that every character keeps the width specified in millimeters.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#E8D5B7'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const docContent = shape.GetContent();
docContent.GetElement(0).AddText('First sentence: ');
docContent.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);
slide.AddObject(shape);
