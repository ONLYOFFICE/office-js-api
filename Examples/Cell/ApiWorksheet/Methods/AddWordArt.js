// This example adds a Text Art object to the sheet with the parameters specified.

// How to add a word art to the worksheet specifying its properties, color, size, etc.

// Insert a word art to the worksheet.

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