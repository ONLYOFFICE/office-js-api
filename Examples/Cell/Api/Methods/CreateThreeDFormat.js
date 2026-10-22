// Create a 3D format and apply it to a shape in a spreadsheet.

// Build a 3D format with a perspective camera, rotation and depth, then attach it to a drawing.

// Create a shape, create the 3D format via Api.CreateThreeDFormat, and apply it with SetThreeDFormat.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(68, 114, 196));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("rect", 100 * 36000, 60 * 36000, fill, stroke, 2, 0, 3, 0);
const threeDFormat = Api.CreateThreeDFormat({ presetCamera: "PerspectiveFront", rotationX: 30, rotationY: 20, fieldOfView: 45, depth: 20 });
shape.SetThreeDFormat(threeDFormat);