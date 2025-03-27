// This example shows how to get the border color for the container.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
inlineLvlSdt.SetBorderColor(0, 0, 255, 255);
let color = inlineLvlSdt.GetBorderColor();

function colorToText(color){
    if (!color)
        return "none";

    return "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + color.a + ")";
}

run.AddText("BorderColor: " + colorToText(color));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);

inlineLvlSdt = Api.CreateInlineLvlSdt();
run = Api.CreateRun();
color = inlineLvlSdt.GetBorderColor();
run.AddText("BorderColor: " + colorToText(color));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
