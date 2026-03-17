// This example sets the title of a drawing.

// How to set the title (alternative text) of a drawing.

// Create a drawing and set its title.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetTitle("My Drawing Title");
let title = drawing.GetTitle();
worksheet.SetColumnWidth(0, 25);
worksheet.GetRange("A1").SetValue("Drawing title: " + title);
