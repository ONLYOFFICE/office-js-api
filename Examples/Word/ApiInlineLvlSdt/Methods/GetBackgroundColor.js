// This example shows how to get the border color for the container.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
inlineLvlSdt.SetBackgroundColor(0, 0, 255, 40);
let color = inlineLvlSdt.GetBackgroundColor();

function colorToText(color){
    if (!color)
        return "none";

    return "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + color.a + ")";
}

run.AddText("BackgroundColor: " + colorToText(color));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);

inlineLvlSdt = Api.CreateInlineLvlSdt();
run = Api.CreateRun();
color = inlineLvlSdt.GetBackgroundColor();
run.AddText("BackgroundColor: " + colorToText(color));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
