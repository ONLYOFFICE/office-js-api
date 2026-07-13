// Get the class type of a shadow object on a page in a PDF form.

// Confirm that an object created by Api.CreateShadow reports itself as a shadow.

// Create a shadow, apply it to a shape, and print the shadow class type inside the shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(30 * 36000, 30 * 36000);
page.AddObject(shape);
const shadow = Api.CreateShadow({ color: Api.RGB(0, 0, 0), offsetX: 3, offsetY: 3 });
shape.SetShadow(shadow);
const classType = shadow.GetClassType();
shape.GetContent().GetElement(0).AddText("Shadow class type: " + classType);