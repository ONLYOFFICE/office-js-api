// Delete a tag from a slide.

// Delete returns true if a tag with the key existed and false otherwise.

// Show the result of the deletion and the number of tags left.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let tags = slide.GetTags();
tags.Add("DRAFT", "true");
tags.Add("OWNER", "Marketing");
let isDeleted = tags.Delete("DRAFT");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Deleted: " + isDeleted + ", tags left: " + tags.GetCount());
slide.AddObject(shape);