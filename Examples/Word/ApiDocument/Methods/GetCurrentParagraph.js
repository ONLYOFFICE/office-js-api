// This example shows how to get a current paragraph for further manipulation.
let oDoc = Api.GetDocument();
let oParagraph = oDoc.GetCurrentParagraph();
oParagraph.AddText('This is current paragraph');
oParagraph.SetBold(true);