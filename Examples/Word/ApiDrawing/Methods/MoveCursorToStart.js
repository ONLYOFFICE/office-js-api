// Move the cursor before a drawing in a document.

// To move the cursor into the shape text, call the MoveCursorToStart method of the content returned by GetDocContent.

// Enter text right before the inline shape.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 540000, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.MoveCursorToStart();
doc.EnterText("Text before the shape. ");
