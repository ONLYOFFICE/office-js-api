// Get the fill formatting properties from a drawing object through the base ApiDrawing interface in a document.

// GetFill returns the ApiFill applied to any graphic object, or null when the object has no fill.

// Read back the fill type of a filled rectangle and write it into the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let currentFill = drawing.GetFill();
if (currentFill) {
	let resultParagraph = Api.CreateParagraph();
	resultParagraph.AddText("Drawing fill type: " + currentFill.GetType());
	doc.Push(resultParagraph);
}
