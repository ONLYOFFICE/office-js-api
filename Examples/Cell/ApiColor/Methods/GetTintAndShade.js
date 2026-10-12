// Read the luminance shift stored in a theme color in a spreadsheet.

// The same theme color can be stored lightened or darkened, and cells keep that shift.

// Fill a cell with a lightened accent and write the shift read back from it.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetFillColor(Api.ThemeColor("accent1", 0.4));

let fill = worksheet.GetRange("A1").GetFillColor();
worksheet.GetRange("A3").SetValue("Theme: " + fill.GetThemeName());
worksheet.GetRange("A4").SetValue("Tint: " + fill.GetTintAndShade());
worksheet.GetRange("A5").SetValue("Color: " + fill.GetHex());