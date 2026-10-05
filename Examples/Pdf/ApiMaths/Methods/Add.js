// Add an equation at the current position in a PDF document.

// The equation source text can be provided in unicode or LaTeX format.

// Insert two equations, one written in unicode format and another in LaTeX format, each into its own shape.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let shape1 = Api.CreateShape("rect", 100 * 36000, 50 * 36000, null, null);
shape1.SetPosition(0, 0);
page.AddObject(shape1);
shape1.GetContent().GetElement(0).Select();
let mathUnicode = doc.GetMaths().Add("x^2 + y^2 = z^2", "unicode");

let shape2 = Api.CreateShape("rect", 100 * 36000, 50 * 36000, null, null);
shape2.SetPosition(0, 2000000);
page.AddObject(shape2);
shape2.GetContent().GetElement(0).Select();
let mathLatex = doc.GetMaths().Add("e^{i\\pi} + 1 = 0", "latex");
