// Create a 3D format and apply it to a shape in a document.

// Build a 3D format with a perspective camera, rotation and depth, then attach it to a drawing.

// Create a shape, create the 3D format via Api.CreateThreeDFormat, and apply it with SetThreeDFormat.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(68, 114, 196));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 100 * 36000, 60 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
shape.SetWrappingStyle("inFront");
shape.SetHorPosition("page", 60 * 36000);
shape.SetVerPosition("page", 50 * 36000);
const threeDFormat = Api.CreateThreeDFormat({ presetCamera: "PerspectiveFront", rotationX: 30, rotationY: 20, fieldOfView: 45, depth: 20 });
shape.SetThreeDFormat(threeDFormat);