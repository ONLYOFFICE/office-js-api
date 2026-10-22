// Create a 3D format and apply it to a shape in a presentation.

// Build a 3D format with a perspective camera, rotation and depth, then attach it to a drawing.

// Create a shape, create the 3D format via Api.CreateThreeDFormat, and apply it with SetThreeDFormat.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(68, 114, 196));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 100 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(60 * 36000, 50 * 36000);
slide.AddObject(shape);
const threeDFormat = Api.CreateThreeDFormat({ presetCamera: "PerspectiveFront", rotationX: 30, rotationY: 20, fieldOfView: 45, depth: 20 });
shape.SetThreeDFormat(threeDFormat);