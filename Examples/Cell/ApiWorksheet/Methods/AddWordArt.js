// Place a styled decorative text object onto a sheet in a spreadsheet.

// How do I add eye-catching artistic text with custom fonts and colors in a spreadsheet?

// Render a bold curved text banner with a solid fill and outline on the worksheet.

let worksheet = Api.GetActiveSheet();
let textProps = Api.CreateTextPr();
textProps.SetFontSize(72);
textProps.SetBold(true);
textProps.SetCaps(true);
textProps.SetColor(Api.HexColor('#333333'));
textProps.SetFontFamily("Comic Sans MS");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
worksheet.AddWordArt(textProps, "onlyoffice", "textArchUp", fill, stroke, 0, 100 * 36000, 20 * 36000, 0, 2, 2 * 36000, 3 * 36000);