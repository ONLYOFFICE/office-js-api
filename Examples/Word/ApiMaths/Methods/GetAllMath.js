// Return all the equations from the document.

// The equations are returned as an array in document order.

// Add two equations, then get all the equations from the document and report their texts.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
doc.GetMaths().Add("a+b");

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
doc.GetMaths().Add("c+d");

let allMath = doc.GetMaths().GetAllMath();
let texts = allMath.map(function(math){
	return math.GetText();
});

paragraph = Api.CreateParagraph();
paragraph.AddText("All equations: " + texts.join(", "));
doc.Push(paragraph);
