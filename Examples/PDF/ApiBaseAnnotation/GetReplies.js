// This example creates a square annotation and gets its replies.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddAnnot(squareAnnot);

let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot reply");
squareAnnot.AddReply(textAnnot);

let replies = squareAnnot.GetReplies();
replies.forEach((reply, idx) => {
	console.log(`Reply with idx ${idx}: "${reply.GetContents()}"`);
});
