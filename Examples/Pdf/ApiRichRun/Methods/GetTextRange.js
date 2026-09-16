// Change the font size of a part of a text run of a free text annotation in a PDF.

// Positions are counted from the beginning of the run, so the rest of the paragraph keeps its size.

// Take the range of the first word of the run and enlarge it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const annotation = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
page.AddObject(annotation);

const richContent = annotation.GetContent();
const paragraph = richContent.GetElement(0);
const run = paragraph.GetElement(0);
run.AddText("Hello World");

const range = run.GetTextRange(0, 5);
range.SetFontSize(40);