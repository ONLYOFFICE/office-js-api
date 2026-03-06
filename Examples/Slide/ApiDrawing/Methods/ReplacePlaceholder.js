// This example replaces the placeholder by a drawing on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateNoFill();
const stroke = Api.CreateStroke(0, Api.CreateNoFill);
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(174), Api.MillimetersToEmus(38), fill, stroke);

const placeholder = Api.CreatePlaceholder('body');
placeholder.SetType('picture');
shape.SetPlaceholder(placeholder);
slide.AddObject(shape);

const shapeCopy = shape.Copy();
shapeCopy.SetPosition(0, Api.MillimetersToEmus(48));
slide.AddObject(shapeCopy);

const image = Api.CreateImage('https://api.onlyoffice.com/img/logo.svg', Api.MillimetersToEmus(200), Api.MillimetersToEmus(100));
shapeCopy.ReplacePlaceholder(image);
