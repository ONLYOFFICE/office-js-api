// Identify the object type of the collection of equations in a PDF document.

// Find out what kind of object the equations collection is in a PDF document.

// Get the class type of the document's equations collection and report it.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, null, null);
shape.SetPosition(0, 0);
page.AddObject(shape);
let docContent = shape.GetContent();

let classType = doc.GetMaths().GetClassType();

let report = docContent.GetElement(0);
report.AddText("Class Type = " + classType);
