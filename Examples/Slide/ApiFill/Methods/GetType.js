// Gets the fill type and displays it.
// Creates shapes with different fill types and shows their types.
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);

// Solid fill
let solidFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, solidFill, stroke);
shape1.SetPosition(2000000, 1000000);
slide.AddObject(shape1);
let content1 = shape1.GetDocContent();
let para1 = content1.GetElement(0);
let fill1 = shape1.GetFill();
para1.AddText("Solid: " + fill1.GetType());

// Gradient fill
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let gradientFill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let shape2 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, gradientFill, stroke);
shape2.SetPosition(2000000, 2000000);
slide.AddObject(shape2);
let content2 = shape2.GetDocContent();
let para2 = content2.GetElement(0);
let fill2 = shape2.GetFill();
para2.AddText("Gradient: " + fill2.GetType());

// No fill
let noFill = Api.CreateNoFill();
let shape3 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, noFill, stroke);
shape3.SetPosition(2000000, 3000000);
slide.AddObject(shape3);
let content3 = shape3.GetDocContent();
let para3 = content3.GetElement(0);
let fill3 = shape3.GetFill();
para3.AddText("No fill: " + fill3.GetType());
