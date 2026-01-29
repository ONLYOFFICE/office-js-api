// Gets the width of a stroke in EMU.
// Creates shapes with different border widths and displays their widths.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));

// Shape with 1pt border
let stroke1 = Api.CreateStroke(1 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape1 = worksheet.AddShape("rect", 40 * 36000, 25 * 36000, fill, stroke1, 3, 0, 0, 0);
let width1 = shape1.GetLine().GetWidth();
worksheet.GetRange("A1").SetValue("Border 1: " + width1 + " EMU (" + (width1 / 12700).toFixed(2) + " pt)");

// Shape with 2.5pt border
let stroke2 = Api.CreateStroke(2.5 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0)));
let shape2 = worksheet.AddShape("rect", 40 * 36000, 25 * 36000, fill, stroke2, 3, 0, 1, 1);
let width2 = shape2.GetLine().GetWidth();
worksheet.GetRange("A2").SetValue("Border 2: " + width2 + " EMU (" + (width2 / 12700).toFixed(2) + " pt)");

// Shape with 5pt border
let stroke3 = Api.CreateStroke(5 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 255, 0)));
let shape3 = worksheet.AddShape("rect", 40 * 36000, 25 * 36000, fill, stroke3, 3, 0, 2, 2);
let width3 = shape3.GetLine().GetWidth();
worksheet.GetRange("A3").SetValue("Border 3: " + width3 + " EMU (" + (width3 / 12700).toFixed(2) + " pt)");
