// Read the settings of a 3D format applied to a drawing in a presentation.

// Retrieve the 3D format and inspect its camera, rotation and depth.

// Set a 3D format, read its settings with GetSettings, and print the values inside the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(68, 114, 196));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 140 * 36000, 70 * 36000, fill, stroke);
shape.SetPosition(35 * 36000, 50 * 36000);
slide.AddObject(shape);
shape.SetThreeDFormat(Api.CreateThreeDFormat({ presetCamera: "PerspectiveFront", rotationX: 20, rotationY: 30, depth: 15, projectText: false }));
const settings = shape.GetThreeDFormat().GetSettings();
shape.GetContent().GetElement(0).AddText("Camera " + settings.presetCamera + ", rotation " + settings.rotationX + " x " + settings.rotationY + ", depth " + settings.depth + " pt");