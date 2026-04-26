// Duplicate a group of drawings and add the copy to the same paragraph in a document.

// How do I make a copy of a grouped set of objects in a document?

// Clone a group of shapes so that the duplicate appears alongside the original in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 60 * 36000, 60 * 36000, fill, stroke);
let shape2 = Api.CreateShape("ellipse", 60 * 36000, 60 * 36000, fill, stroke);
paragraph.AddDrawing(shape1);
paragraph.AddDrawing(shape2);
let group = Api.CreateGroup([shape1, shape2]);
paragraph.AddDrawing(group);

let copyGroup = group.Copy();
paragraph.AddDrawing(copyGroup);
