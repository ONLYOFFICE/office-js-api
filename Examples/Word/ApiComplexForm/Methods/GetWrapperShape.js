// Obtain the wrapper shape that controls the position and size of a fixed-size form in a document.

// How do I reposition or resize a fixed-size form frame in a document?

// Move a form to an exact location on the page by accessing and adjusting its wrapper shape in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.ToFixed(7 * 240, 2 * 240);
let shape = complexForm.GetWrapperShape();
shape.SetHorPosition("page", 50 * 36000);
shape.SetVerPosition("page", 50 * 36000);