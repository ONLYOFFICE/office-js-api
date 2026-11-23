// Fit the text of shapes on a slide by changing its font size.

// Reduce a long text that overflows a small shape and enlarge a short text in the same shape.

// The long text fits the first shape and the short text fills the second shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(61, 74, 107));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const longShape = Api.CreateShape("rect", Api.MillimetersToEmus(100), Api.MillimetersToEmus(50), fill, stroke);
longShape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(40));
slide.AddObject(longShape);
const longRun = longShape.GetDocContent().GetElement(0).AddText("The quarterly report shows steady growth in every region, with new customers in the north and a strong return rate in the south.");
longRun.SetFontSize(72);

const shortShape = Api.CreateShape("rect", Api.MillimetersToEmus(100), Api.MillimetersToEmus(50), fill, stroke);
shortShape.SetPosition(Api.MillimetersToEmus(140), Api.MillimetersToEmus(40));
slide.AddObject(shortShape);
const shortRun = shortShape.GetDocContent().GetElement(0).AddText("Quarterly report");
shortRun.SetFontSize(24);

longShape.FitText();
shortShape.FitText(true);