// Retrieve all shape objects embedded in a paragraph in a document.

// How do I get every shape from a paragraph in a document?

// Apply consistent styling to multiple shapes at once by collecting them from a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing1);
let drawing2 = Api.CreateShape("wave", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing2);
let drawings = paragraph.GetAllShapes();
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
drawings[1].Fill(fill);