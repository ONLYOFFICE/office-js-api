// Fit the text of shapes in a document by changing its font size.

// Reduce a long text that overflows a small shape and enlarge a short text in the same shape.

// The long text fits the first shape, the short text fills the second shape, and the results are added to the document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(61, 74, 107));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const longShape = Api.CreateShape("rect", Api.MillimetersToEmus(60), Api.MillimetersToEmus(30), fill, stroke);
const longRun = longShape.GetDocContent().GetElement(0).AddText("The quarterly report shows steady growth in every region, with new customers in the north and a strong return rate in the south.");
longRun.SetFontSize(48);
paragraph.AddDrawing(longShape);

const shortShape = Api.CreateShape("rect", Api.MillimetersToEmus(60), Api.MillimetersToEmus(30), fill, stroke);
const shortRun = shortShape.GetDocContent().GetElement(0).AddText("Quarterly report");
shortRun.SetFontSize(20);
paragraph.AddDrawing(shortShape);

const isLongTextFit = longShape.FitText();
const isShortTextFit = shortShape.FitText(true);

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("The long text fits the shape: " + isLongTextFit + ". The short text fits the shape: " + isShortTextFit + ".");
doc.Push(resultParagraph);