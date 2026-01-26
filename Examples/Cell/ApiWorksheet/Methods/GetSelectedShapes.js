// This example shows how to get selected shapes from the sheet.

// How to get seletectd shapes.

// Get selected shapes as an array.

let worksheet = Api.GetActiveSheet();
let gradientStop1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gradientStop2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gradientStop1, gradientStop2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
gradientStop1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 0, 0), 0);
gradientStop2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 0, 255), 100000);
fill = Api.CreateLinearGradientFill([gradientStop1, gradientStop2], 5400000);
stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
shape.Select();
let shapes = worksheet.GetSelectedShapes();
let content = shapes[0].GetContent();
content.RemoveAllElements();
shapes[0].SetVerticalTextAlign("bottom");
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it ");
paragraph.AddText("aligning it vertically by the bottom.");
content.Push(paragraph);
