// Return the equation the cursor is currently located in, in a PDF document.

// If the cursor is not inside an equation, null is returned instead.

// Insert an equation, then get the equation the cursor is left inside of and report its text.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, null, null);
shape.SetPosition(0, 0);
page.AddObject(shape);
let docContent = shape.GetContent();

doc.GetMaths().Add("x+1", "unicode");
let activeMath = doc.GetMaths().GetActiveMath();

let report = docContent.GetElement(0);
report.AddText("Active equation text: " + activeMath.GetText());
