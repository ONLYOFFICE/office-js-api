# SetSection

Sets the specified section to the current paragraph.

## Syntax

expression.SetSection(oSection);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oSection | Required | [ApiSection](../../ApiSection/ApiSection.md) |  | The section which will be set to the paragraph. |

## Returns

boolean

## Example

This example sets the specified section to the current paragraph.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("Scroll down to see the new section.");
let section = doc.CreateSection(paragraph);
section.SetEqualColumns(1, 720);
section.SetPageSize(12240, 15840);
section.SetPageMargins(1440, 1440, 1440, 1440);
section.SetHeaderDistance(720);
section.SetFooterDistance(576);
section.SetPageSize(7200, 4320);
paragraph = Api.CreateParagraph();
paragraph.SetSpacingBefore(100, true);
paragraph.SetSpacingAfter(360);
paragraph.AddText("This is a paragraph in a new section. The properties from the first section was applied to this one.");
doc.Push(paragraph);
paragraph.SetSection(section);
```
