// Gets the outline properties from a shape and displays detailed information.
// Creates a shape with a stroke, retrieves it and shows stroke details.
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(2.5 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(200, 100, 0)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
let content = shape.GetDocContent();
let paragraph = content.GetElement(0);
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
