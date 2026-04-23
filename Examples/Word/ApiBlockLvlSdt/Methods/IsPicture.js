// Check whether a content control holds a picture or plain text in a document.

// How do I tell if a content control is a picture control in a document?

// Compare a text content control and a picture content control to see which type each one is in a document.

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