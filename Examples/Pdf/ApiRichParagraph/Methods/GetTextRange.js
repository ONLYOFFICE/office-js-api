// Strike out a part of a paragraph of a free text annotation in a PDF.

// Positions are counted from the beginning of the paragraph, the end position is excluded.

// Take the range of the first five characters of the paragraph and strike it out.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const annotation = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
page.AddObject(annotation);

const richContent = annotation.GetContent();
const paragraph = richContent.GetElement(0);
paragraph.AddText("Hello World");

const range = paragraph.GetTextRange(0, 5);
range.SetStrikeout(true);