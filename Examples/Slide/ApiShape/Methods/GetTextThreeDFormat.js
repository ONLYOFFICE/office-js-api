// Read the 3D format of the shape text and reuse it in a presentation.

// Retrieve the 3D format applied to the text of one shape and apply it to the text of another shape.

// Set a 3D format on the text of the first shape, read it with GetTextThreeDFormat, and apply it to the text of the second shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateNoFill();
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const textFill = Api.CreateSolidFill(Api.RGB(68, 114, 196));
const shape = Api.CreateShape("rect", 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(30 * 36000, 30 * 36000);
slide.AddObject(shape);
const run = shape.GetContent().GetElement(0).AddText("First shape");
run.SetFontSize(96);
run.SetFill(textFill);
shape.SetTextThreeDFormat(Api.CreateThreeDFormat({ rotationX: 25, rotationY: 10, depth: 8 }));
const threeDFormat = shape.GetTextThreeDFormat();
const shape2 = Api.CreateShape("rect", 200 * 36000, 50 * 36000, fill, stroke);
shape2.SetPosition(30 * 36000, 100 * 36000);
slide.AddObject(shape2);
const run2 = shape2.GetContent().GetElement(0).AddText("Second shape");
run2.SetFontSize(96);
run2.SetFill(textFill);
shape2.SetTextThreeDFormat(threeDFormat);