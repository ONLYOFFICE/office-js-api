// Return all the equations from a PDF document.

// The equations are returned as an array in document order.

// Add two equations, each into its own paragraph, then get all the equations from the document and report their texts.

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

let allMath = doc.GetMaths().GetAllMath();
let texts = allMath.map(function(math){
	return math.GetText();
});

let reportShape = Api.CreateShape("rect", 200 * 36000, 50 * 36000, null, null);
reportShape.SetPosition(0, 4000000);
page.AddObject(reportShape);
let report = reportShape.GetContent().GetElement(0);
report.AddText("All equations: " + texts.join(", "));
