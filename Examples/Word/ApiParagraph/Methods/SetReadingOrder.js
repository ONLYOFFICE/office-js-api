// This example shows how to set the reading order of the text in the specified paragraph.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Hello! مرحبا! 你好!');
doc.Push(paragraph);
paragraph.SetReadingOrder('rtl');
