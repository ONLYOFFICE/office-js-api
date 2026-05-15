// Read the horizontal radius of an arc path command and write it to a cell in a spreadsheet.

// How do I find the width radius of an arc segment on a shape in a spreadsheet?

// Confirm the horizontal extent of a curved arc drawn inside a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(100 * 36000);
path.SetHeight(100 * 36000);
path.MoveTo(0, 50 * 36000);
path.CubicBezTo(0, 0, 50 * 36000, 0, 50 * 36000, 50 * 36000);
path.QuadBezTo(100 * 36000, 50 * 36000, 100 * 36000, 100 * 36000);
path.ArcTo(50 * 36000, 50 * 36000, 0, 10800000);
path.Close();
let cmd = path.GetCommand(3); // arc command
worksheet.GetRange("A13").SetValue("WR: " + cmd.GetWR() + ", HR: " + cmd.GetHR());
worksheet.GetRange("A14").SetValue("Start: " + cmd.GetStartAngle() + ", Sweep: " + cmd.GetSweepAngle());
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = worksheet.AddShape("rect", 60 * 36000, 60 * 36000, fill, stroke, 6, 0, 2, 0);
shape.SetGeometry(customGeometry);