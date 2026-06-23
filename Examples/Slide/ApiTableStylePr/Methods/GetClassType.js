// This example gets the class type of the ApiTableStylePr object.

// How to get the class type of a table style part.

// Get the table style part from the presentation and display its class type.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
const stylepr = style.GetConditionalTableStyle("wholeTable");
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + stylepr.GetClassType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);