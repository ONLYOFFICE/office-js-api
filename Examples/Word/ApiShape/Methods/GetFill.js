// Get the fill properties from a shape and display detailed information. Creates a shape with gradient fill, retrieve it and show fill details.

// How do I get the fill in a document?

// Get the fill using a shape object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();
let retrievedFill = shape.GetFill();
if (retrievedFill) {
    paragraph.AddText("Fill type: " + retrievedFill.GetType());
}