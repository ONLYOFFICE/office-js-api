// Return the equation at the specified index in the collection of equations in a PDF.

// The index is zero-based; an index past the end of the collection returns null.

// Add two equations, each into its own paragraph, then get each one back by its index and report their text, including one index past the end.

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

let firstMath = doc.GetMaths().GetItem(0);
let secondMath = doc.GetMaths().GetItem(1);
let outOfRange = doc.GetMaths().GetItem(10);

let reportShape = Api.CreateShape("rect", 200 * 36000, 50 * 36000, null, null);
reportShape.SetPosition(0, 4000000);
page.AddObject(reportShape);
let report = reportShape.GetContent().GetElement(0);
report.AddText("Items: " + firstMath.GetText() + ", " + secondMath.GetText() + ", out of range: " + outOfRange);
