// This example sets the description of a drawing.

// How to set the description (alternative text) of a drawing.

// Create a drawing and set its description.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetDescription("My Drawing Description");
let description = drawing.GetDescription();
worksheet.SetColumnWidth(0, 30);
worksheet.GetRange("A1").SetValue("Drawing description: " + description);
