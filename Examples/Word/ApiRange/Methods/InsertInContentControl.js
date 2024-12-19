// This example shows how to wrap range object with a specified type of content control.
let oDocument = Api.GetDocument();
let oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is an example of the paragraph with example text");
oDocument.Push(oParagraph);

let aRanges = oDocument.Search('example');
for (let i = 0; i < aRanges.length; i++) {
	aRanges[i].InsertInContentControl('inline');
}
