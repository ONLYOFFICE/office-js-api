// Return the number of equations in a PDF document.

// The count grows as more equations are added to the document.

// Add two equations, each into its own paragraph, then report the total number of equations.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let shape1 = Api.CreateShape("rect", 100 * 36000, 50 * 36000, null, null);
shape1.SetPosition(0, 0);
page.AddObject(shape1);
shape1.GetContent().GetElement(0).Select();
doc.GetMaths().Add("a+b", "unicode");

let shape2 = Api.CreateShape("rect", 100 * 36000, 50 * 36000, null, null);
shape2.SetPosition(0, 2000000);
page.AddObject(shape2);
shape2.GetContent().GetElement(0).Select();
doc.GetMaths().Add("c+d", "unicode");

let count = doc.GetMaths().GetCount();

let reportShape = Api.CreateShape("rect", 200 * 36000, 50 * 36000, null, null);
reportShape.SetPosition(0, 4000000);
page.AddObject(reportShape);
let report = reportShape.GetContent().GetElement(0);
report.AddText("Number of equations: " + count);
