// Add tags to a slide and update one of them.

// Adding a tag with an existing key replaces its value, and new keys are stored in uppercase letters.

// Show the keys and values of all slide tags.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let tags = slide.GetTags();
tags.Add("region", "East");
tags.Add("PLANET", "Jupiter");
tags.Add("Region", "West");
let tagList = tags.GetAll();
let lines = [];
for (let i = 0; i < tagList.length; i++) {
	lines.push(tagList[i].GetKey() + " = " + tagList[i].GetValue());
}
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText(lines.join("; "));
slide.AddObject(shape);