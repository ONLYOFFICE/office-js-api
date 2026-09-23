// Export a paragraph's content as an HTML string for use outside the editor in a presentation.

// How do I get the HTML representation of a paragraph's text and formatting in a presentation?

// Capture the markup of a paragraph inside a shape and show it in a second paragraph of the same shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This paragraph will be converted to ");
const boldRun = paragraph.AddText("HTML");
boldRun.SetBold(true);
const html = paragraph.ToHtml({"RenderHTMLTags": true});
const htmlParagraph = Api.CreateParagraph();
htmlParagraph.AddText("HTML output: " + html.trim());
docContent.Push(htmlParagraph);
slide.AddObject(shape);