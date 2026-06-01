// Duplicate a shape and add the copy to the same paragraph in a document.

// How do I make a copy of a shape in a document?

// Clone a shape so that two identical shapes appear in a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("flowChartMagneticTape", 130 * 36000, 65 * 36000, fill, stroke);
paragraph.AddDrawing(shape);

let copyShape = shape.Copy();
paragraph.AddDrawing(copyShape);
