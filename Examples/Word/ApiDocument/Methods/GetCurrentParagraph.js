// This example shows how to get a current paragraph for further manipulation.

const doc = Api.GetDocument();
const paragraph = doc.GetCurrentParagraph();
paragraph.AddText('This is current paragraph');
paragraph.SetBold(true);
