// Store document-level metadata in the presentation tags.

// Tags keep custom key-value pairs that add-ins and macros can read later.

// Show the stored value on the first slide.

let presentation = Api.GetPresentation();
let tags = presentation.GetTags();
tags.Add("SECURITY", "Internal-Audience-Only");
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("SECURITY: " + tags.GetItem("SECURITY").GetValue());
slide.AddObject(shape);