// Read the 3D format of the shape text and reuse it in a spreadsheet.

// Retrieve the 3D format applied to the text of one shape and apply it to the text of another shape.

// Set a 3D format on the text of the first shape, read it with GetTextThreeDFormat, and apply it to the text of the second shape.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateNoFill();
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const textFill = Api.CreateSolidFill(Api.RGB(68, 114, 196));
const shape = worksheet.AddShape("rect", 200 * 36000, 50 * 36000, fill, stroke, 1, 0, 1, 0);
const run = shape.GetContent().GetElement(0).AddText("First shape");
run.SetFontSize(96);
run.SetFill(textFill);
shape.SetTextThreeDFormat(Api.CreateThreeDFormat({ rotationX: 25, rotationY: 10, depth: 8 }));
const threeDFormat = shape.GetTextThreeDFormat();
const shape2 = worksheet.AddShape("rect", 200 * 36000, 50 * 36000, fill, stroke, 1, 0, 14, 0);
const run2 = shape2.GetContent().GetElement(0).AddText("Second shape");
run2.SetFontSize(96);
run2.SetFill(textFill);
shape2.SetTextThreeDFormat(threeDFormat);