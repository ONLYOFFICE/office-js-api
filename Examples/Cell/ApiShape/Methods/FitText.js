// Fit the text of shapes on a worksheet by changing its font size.

// Reduce a long text that overflows a small shape and enlarge a short text in the same shape.

// The long text fits the first shape, the short text fills the second shape, and the results are written to the cells.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(61, 74, 107));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const longShape = worksheet.AddShape("rect", Api.MillimetersToEmus(60), Api.MillimetersToEmus(30), fill, stroke, 0, 0, 2, 0);
const longRun = longShape.GetDocContent().GetElement(0).AddText("The quarterly report shows steady growth in every region, with new customers in the north and a strong return rate in the south.");
longRun.SetFontSize(48);

const shortShape = worksheet.AddShape("rect", Api.MillimetersToEmus(60), Api.MillimetersToEmus(30), fill, stroke, 5, 0, 2, 0);
const shortRun = shortShape.GetDocContent().GetElement(0).AddText("Quarterly report");
shortRun.SetFontSize(20);

worksheet.GetRange("A1").SetValue("The long text fits the shape: " + longShape.FitText());
worksheet.GetRange("F1").SetValue("The short text fits the shape: " + shortShape.FitText(true));