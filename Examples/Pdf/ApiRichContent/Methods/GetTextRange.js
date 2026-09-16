// Make the whole text of a free text annotation in a PDF bold through a text range.

// The rich content of an annotation is addressed by character positions, just like the text of a shape.

// Get the range of the annotation content and apply bold to the first word.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const annotation = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
page.AddObject(annotation);

const richContent = annotation.GetContent();
const paragraph = richContent.GetElement(0);
paragraph.AddText("Hello World");

const range = richContent.GetTextRange(0, 5);
range.SetBold(true);