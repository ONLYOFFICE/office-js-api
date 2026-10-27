// Group multiple shapes into a single drawing object in a document.

// How do I combine several shapes into one group in a document?

// Treat two independently placed rectangles as a single unit so they move and resize together.

let doc = Api.GetDocument();
let fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill1, stroke);
let shape2 = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill2, stroke);
let paragraph = Api.CreateParagraph();
paragraph.AddDrawing(shape1);
paragraph.AddDrawing(shape2);
doc.Push(paragraph);
shape1.SetWrappingStyle("inFront");
shape1.SetHorPosition("page", 30 * 36000);
shape1.SetVerPosition("page", 40 * 36000);
shape2.SetWrappingStyle("inFront");
shape2.SetHorPosition("page", 100 * 36000);
shape2.SetVerPosition("page", 90 * 36000);
doc.GroupDrawings([shape1, shape2]);