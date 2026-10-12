// Get the class type of a shadow object in a document.

// Confirm that an object created by Api.CreateShadow reports itself as a shadow.

// Create a shadow, apply it to a shape, and print the shadow class type inside the shape.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
shape.SetWrappingStyle("inFront");
shape.SetHorPosition("page", 30 * 36000);
shape.SetVerPosition("page", 30 * 36000);
const shadow = Api.CreateShadow({ color: Api.RGB(0, 0, 0), offsetX: 3, offsetY: 3 });
shape.SetShadow(shadow);
const classType = shadow.GetClassType();
shape.GetContent().GetElement(0).AddText("Shadow class type: " + classType);