// Read the 3D format of a drawing and reuse it in a spreadsheet.

// Retrieve the 3D format applied to one shape and apply the same 3D format to another.

// Set a 3D format on the first shape, read it with GetThreeDFormat, and apply it to a second shape.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(68, 114, 196));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 2, 0, 3, 0);
shape.SetThreeDFormat(Api.CreateThreeDFormat({ presetCamera: "IsometricOffAxis1Right", depth: 15 }));
const threeDFormat = shape.GetThreeDFormat();
const shape2 = worksheet.AddShape("ellipse", 60 * 36000, 40 * 36000, fill, stroke, 8, 0, 3, 0);
shape2.SetThreeDFormat(threeDFormat);