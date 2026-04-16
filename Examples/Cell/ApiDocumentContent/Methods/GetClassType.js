// Check the class type returned by a document content.

// How do I check what type a document content object is?

// Retrieve and output the class type string for a document content.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let classType = content.GetClassType();
let paragraph = content.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);