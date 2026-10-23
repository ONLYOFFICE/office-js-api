// Count the tags of a shape.

// Adding a tag with an existing key does not increase the number of tags.

// Show the number of shape tags.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let tags = shape.GetTags();
tags.Add("CHART_ID", "17");
tags.Add("REVIEWED", "no");
tags.Add("reviewed", "yes");
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Tags: " + tags.GetCount());
slide.AddObject(shape);