// This example shows how to get a collection of drawing objects in the content control.
let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(shape);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
shape = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(shape);
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
let drawingObjects = blockLvlSdt.GetAllDrawingObjects();
drawingObjects[0].Delete();