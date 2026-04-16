// Create a square annotation and get its replies in a PDF document.

// How to get the replies for an annotation in a PDF document?

// Get the replies and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);

let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot reply");
squareAnnot.AddReply(textAnnot);

let replies = squareAnnot.GetReplies();
replies.forEach((reply, idx) => {
	console.log(`Reply with idx ${idx}: "${reply.GetContents()}"`);
});