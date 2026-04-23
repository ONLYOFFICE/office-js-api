// Retrieve the fill properties from a shape in a PDF.

// What fill settings does a shape have in a PDF?

// Get the color or gradient applied to a shape in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let retrievedFill = shape.GetFill();
if (retrievedFill) {
    paragraph.AddText("Fill type: " + retrievedFill.GetType());
}