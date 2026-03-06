// Gets the width of a stroke in EMU.
// Creates shapes with different border widths and displays their widths.
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));

// Shape with 1pt border
let stroke1 = Api.CreateStroke(1 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape1 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke1);
shape1.SetPosition(2000000, 1000000);
slide.AddObject(shape1);
let content1 = shape1.GetDocContent();
let para1 = content1.GetElement(0);
let width1 = shape1.GetLine().GetWidth();
para1.AddText("1pt: " + width1 + " EMU");

// Shape with 2.5pt border
let stroke2 = Api.CreateStroke(2.5 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0)));
let shape2 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke2);
shape2.SetPosition(2000000, 2000000);
slide.AddObject(shape2);
let content2 = shape2.GetDocContent();
let para2 = content2.GetElement(0);
let width2 = shape2.GetLine().GetWidth();
para2.AddText("2.5pt: " + width2 + " EMU");

// Shape with 5pt border
let stroke3 = Api.CreateStroke(5 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 255, 0)));
let shape3 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke3);
shape3.SetPosition(2000000, 3000000);
slide.AddObject(shape3);
let content3 = shape3.GetDocContent();
let para3 = content3.GetElement(0);
let width3 = shape3.GetLine().GetWidth();
para3.AddText("5pt: " + width3 + " EMU");
