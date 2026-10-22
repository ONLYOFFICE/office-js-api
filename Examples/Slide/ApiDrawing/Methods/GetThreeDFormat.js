// Read the 3D format of a drawing and reuse it in a presentation.

// Retrieve the 3D format applied to one shape and apply the same 3D format to another.

// Set a 3D format on the first shape, read it with GetThreeDFormat, and apply it to a second shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(68, 114, 196));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill, stroke);
shape.SetPosition(30 * 36000, 50 * 36000);
slide.AddObject(shape);
shape.SetThreeDFormat(Api.CreateThreeDFormat({ presetCamera: "IsometricOffAxis1Right", depth: 15 }));
const threeDFormat = shape.GetThreeDFormat();
const shape2 = Api.CreateShape("ellipse", 60 * 36000, 40 * 36000, fill, stroke);
shape2.SetPosition(120 * 36000, 50 * 36000);
slide.AddObject(shape2);
shape2.SetThreeDFormat(threeDFormat);