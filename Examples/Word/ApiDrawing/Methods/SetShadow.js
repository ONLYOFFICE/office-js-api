// Apply an outer shadow to a drawing in a document.

// Give a shape a soft offset shadow so it appears lifted off the page.

// Create a shape, build a shadow, and set it on the drawing with SetShadow.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
shape.SetWrappingStyle("inFront");
shape.SetHorPosition("page", 30 * 36000);
shape.SetVerPosition("page", 30 * 36000);
shape.SetShadow(Api.CreateShadow({ color: Api.RGB(64, 64, 64), transparency: 0.3, offsetX: 4, offsetY: 4 }));