// Serialize a bullet to a JSON string in a spreadsheet.

// ToJSON returns the JSON form of an ApiBullet, useful for saving or copying list formatting.

// Create a numbering bullet, apply it to a paragraph in a shape, and write its JSON into a cell.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let bullet = Api.CreateNumbering("ArabicParenR", 1);
paragraph.SetBullet(bullet);
paragraph.AddText(" Bulleted paragraph.");
let json = bullet.ToJSON();
worksheet.GetRange("A1").SetValue("Bullet JSON: " + json);
