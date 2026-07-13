// Create a shadow and apply it to a shape in a document.

// Build an outer shadow with a color, transparency and offset, then attach it to a drawing.

// Create a shape, create the shadow via Api.CreateShadow, and apply it with SetShadow.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
shape.SetWrappingStyle("inFront");
shape.SetHorPosition("page", 30 * 36000);
shape.SetVerPosition("page", 30 * 36000);
const shadow = Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.4, offsetX: 3, offsetY: 3 });
shape.SetShadow(shadow);