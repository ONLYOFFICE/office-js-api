// This example gets a double strikeout property of a text.

// How to find out whether a text is stroke out with double lines or not.

// Get a text double cross out property.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
let textProps = run.GetTextPr();
textProps.SetDoubleStrikeout(true);
paragraph = Api.CreateParagraph();
let isDoubleStrikeout = textProps.GetDoubleStrikeout();
paragraph.AddText("Double strikeout property: " + isDoubleStrikeout);
content.Push(paragraph);