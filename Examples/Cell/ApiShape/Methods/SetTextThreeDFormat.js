// Rotate the text of a shape in 3D in a spreadsheet.

// Apply a 3D format with rotation, depth and extrusion color to the shape text while the shape itself stays flat.

// Create a shape with large text and give the text 3D rotation and depth with SetTextThreeDFormat.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(242, 242, 242));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("rect", 200 * 36000, 70 * 36000, fill, stroke, 1, 0, 2, 0);
const paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("center");
const run = paragraph.AddText("ONLYOFFICE");
run.SetFontSize(120);
run.SetBold(true);
run.SetFill(Api.CreateSolidFill(Api.RGB(255, 111, 61)));
const threeDFormat = Api.CreateThreeDFormat({ presetCamera: "PerspectiveFront", rotationX: 30, rotationY: 10, depth: 12, extrusionColor: Api.RGB(153, 51, 0) });
shape.SetTextThreeDFormat(threeDFormat);