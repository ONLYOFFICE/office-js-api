// Access the document that owns the collection of equations in a PDF.

// The parent of the equations collection is the PDF document itself.

// Get the equations collection's parent document and confirm it is the same document instance.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, null, null);
shape.SetPosition(0, 0);
page.AddObject(shape);
let docContent = shape.GetContent();

let maths = doc.GetMaths();
let parent = maths.GetParent();

let report = docContent.GetElement(0);
report.AddText("Parent is document: " + (parent === doc));
