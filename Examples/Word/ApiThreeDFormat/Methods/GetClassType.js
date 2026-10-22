// Get the class type of a 3D format object in a document.

// Confirm that an object created by Api.CreateThreeDFormat reports itself as a 3D format.

// Create a 3D format, apply it to a shape, and print the 3D format class type inside the shape.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(68, 114, 196));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
shape.SetWrappingStyle("inFront");
shape.SetHorPosition("page", 45 * 36000);
shape.SetVerPosition("page", 50 * 36000);
const threeDFormat = Api.CreateThreeDFormat({ rotationX: 20, rotationY: 15, depth: 10 });
shape.SetThreeDFormat(threeDFormat);
const classType = threeDFormat.GetClassType();
shape.GetContent().GetElement(0).AddText("3D format class type: " + classType);