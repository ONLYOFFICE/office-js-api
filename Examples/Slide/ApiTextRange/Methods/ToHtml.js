// Export a part of a paragraph as an HTML string in a presentation.

// How do I get the HTML markup of only a fragment of the text in a presentation?

// Convert the end of a sentence with its bold words to HTML and show the markup in a second paragraph of the shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Convert only ");
const boldRun = paragraph.AddText("this part");
boldRun.SetBold(true);
slide.AddObject(shape);

const range = paragraph.GetTextRange(8, 22);
const html = range.ToHtml({"RenderHTMLTags": true});
const htmlParagraph = Api.CreateParagraph();
htmlParagraph.AddText("HTML output: " + html.trim());
docContent.Push(htmlParagraph);