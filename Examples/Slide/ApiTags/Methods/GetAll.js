// Get all tags of the presentation.

// The tags are returned in the order in which they are stored.

// List the presentation tags on the first slide.

let presentation = Api.GetPresentation();
let tags = presentation.GetTags();
tags.Add("PROJECT", "Apollo");
tags.Add("STATUS", "Approved");
let tagList = tags.GetAll();
let lines = [];
for (let i = 0; i < tagList.length; i++) {
	lines.push(tagList[i].GetKey() + " = " + tagList[i].GetValue());
}
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText(lines.join("; "));
slide.AddObject(shape);