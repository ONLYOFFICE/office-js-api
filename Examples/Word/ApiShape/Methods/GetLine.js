// Read the border line properties of a shape in a document.

// How do I inspect the thickness, color, and style of a shape's outline in a document?

// Extract stroke details from a shape to display its border settings in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(2.5 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(200, 100, 0)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();
let retrievedStroke = shape.GetLine();
if (retrievedStroke) {
    paragraph.AddText("Stroke type: " + retrievedStroke.GetClassType());
    paragraph.AddLineBreak();
    let width = retrievedStroke.GetWidth();
    paragraph.AddText("Width: " + width + " EMU (" + (width / 12700).toFixed(2) + " pt)");
    paragraph.AddLineBreak();
    let strokeFill = retrievedStroke.GetFill();
    if (strokeFill) {
        paragraph.AddText("Fill type: " + strokeFill.GetType());
    }
    paragraph.AddLineBreak();
    let dashType = retrievedStroke.GetDashType();
    paragraph.AddText("Dash type: " + (dashType ? '"' + dashType + '"' : "not set"));
}