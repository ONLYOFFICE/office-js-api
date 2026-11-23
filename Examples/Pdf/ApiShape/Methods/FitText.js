// Fit the text of shapes on a PDF page by changing its font size.

// Reduce a long text that overflows a small shape and enlarge a short text in the same shape.

// The long text fits the first shape and the short text fills the second shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(61, 74, 107));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const longShape = Api.CreateShape("rect", Api.MillimetersToEmus(60), Api.MillimetersToEmus(30), fill, stroke);
longShape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(30));
const longRun = longShape.GetContent().GetElement(0).AddText("The quarterly report shows steady growth in every region, with new customers in the north and a strong return rate in the south.");
longRun.SetFontSize(48);
page.AddObject(longShape);

const shortShape = Api.CreateShape("rect", Api.MillimetersToEmus(60), Api.MillimetersToEmus(30), fill, stroke);
shortShape.SetPosition(Api.MillimetersToEmus(100), Api.MillimetersToEmus(30));
const shortRun = shortShape.GetContent().GetElement(0).AddText("Quarterly report");
shortRun.SetFontSize(20);
page.AddObject(shortShape);

longShape.FitText();
shortShape.FitText(16, 96);