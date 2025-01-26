// This example adds a Text Art object to the sheet with the parameters specified.
let worksheet = Api.GetActiveSheet();
let textProps = Api.CreateTextPr();
textProps.SetFontSize(72);
textProps.SetBold(true);
textProps.SetCaps(true);
textProps.SetColor(51, 51, 51, false);
textProps.SetFontFamily("Comic Sans MS");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
worksheet.AddWordArt(textProps, "onlyoffice", "textArchUp", fill, stroke, 0, 100 * 36000, 20 * 36000, 0, 2, 2 * 36000, 3 * 36000);