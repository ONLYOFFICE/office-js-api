// Read the 3D format of a drawing and reuse it in a document.

// Retrieve the 3D format applied to one shape and apply the same 3D format to another.

// Set a 3D format on the first shape, read it with GetThreeDFormat, and apply it to a second shape.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(68, 114, 196));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
shape.SetWrappingStyle("inFront");
shape.SetHorPosition("page", 30 * 36000);
shape.SetVerPosition("page", 50 * 36000);
shape.SetThreeDFormat(Api.CreateThreeDFormat({ presetCamera: "IsometricOffAxis1Right", depth: 15 }));
const threeDFormat = shape.GetThreeDFormat();
const shape2 = Api.CreateShape("ellipse", 60 * 36000, 40 * 36000, fill, stroke);
paragraph.AddDrawing(shape2);
shape2.SetWrappingStyle("inFront");
shape2.SetHorPosition("page", 110 * 36000);
shape2.SetVerPosition("page", 50 * 36000);
shape2.SetThreeDFormat(threeDFormat);