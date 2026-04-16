// Check whether a block-level content control is a picture control in a document.

// How do I is picture in a document?

// Is picture using a block-level content control object in a document.

const doc = Api.GetDocument();

const textSdt = Api.CreateBlockLvlSdt();
textSdt.GetContent().GetElement(0).AddText('This is a regular text content control.');
doc.AddElement(0, textSdt);

const pictureSdt = doc.AddPictureContentControl(Api.MillimetersToEmus(70), Api.MillimetersToEmus(10));

const paragraph = Api.CreateParagraph();
paragraph.AddText('Text control IsPicture: ' + textSdt.IsPicture());
paragraph.AddLineBreak();
paragraph.AddText('Picture control IsPicture: ' + pictureSdt.IsPicture());
doc.Push(paragraph);