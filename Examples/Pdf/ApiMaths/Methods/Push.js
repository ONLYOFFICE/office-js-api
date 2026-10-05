// Insert an equation created separately at the current position in a PDF document.

// The equation built with Api.CreateMath appears in the document only after it is pushed to the equations collection.

// Create an equation and insert it into the document, then report the text of the inserted equation.

let doc = Api.GetDocument();
let math = Api.CreateMath("a^2 + b^2 = c^2", "unicode");
let insertedMath = doc.GetMaths().Push(math);
let text = insertedMath.GetText();

let page = doc.GetPage(0);
let reportShape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, null, null);
reportShape.SetPosition(0, 0);
page.AddObject(reportShape);
reportShape.GetContent().GetElement(0).AddText("Inserted equation: " + text);
