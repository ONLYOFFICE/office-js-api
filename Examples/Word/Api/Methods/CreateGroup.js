// Group multiple shapes together so they move and resize as one unit in a document.

// How do I combine several shapes into a single group in a document?

// Keep two shapes aligned by bundling them into one grouped object in a document.

let doc = Api.GetDocument();
let fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill1, stroke);
shape1.SetWrappingStyle("inFront");
shape1.SetHorPosition("page", 30 * 36000);
shape1.SetVerPosition("page", 40 * 36000);
let shape2 = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill2, stroke);
shape2.SetWrappingStyle("inFront");
shape2.SetHorPosition("page", 100 * 36000);
shape2.SetVerPosition("page", 90 * 36000);
let group = Api.CreateGroup([shape1, shape2]);
let para = Api.CreateParagraph();
para.AddDrawing(group);
doc.Push(para);