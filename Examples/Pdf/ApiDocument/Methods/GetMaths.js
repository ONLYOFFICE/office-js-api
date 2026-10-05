// Return the collection of equations of the current PDF document.

// The collection can be used to add, look up, and count the equations in the document.

// Get the equations collection, add an equation through it, then report the total number of equations.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, null, null);
shape.SetPosition(0, 0);
page.AddObject(shape);
let docContent = shape.GetContent();

let maths = doc.GetMaths();
maths.Add("a^2 + b^2 = c^2", "unicode");

let count = maths.GetCount();

let report = docContent.GetElement(0);
report.AddText("Number of equations: " + count);
