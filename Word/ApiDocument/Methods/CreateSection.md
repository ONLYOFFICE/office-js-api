# CreateSection

Creates a new document section which ends at the specified paragraph. Allows to set local parameters to the current
section - page size, footer, header, columns, etc.

## Syntax

```javascript
expression.CreateSection(oParagraph);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oParagraph | Required | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | The paragraph after which a new document section will be inserted. Paragraph must be in a document. |

## Returns

[ApiSection](../../ApiSection/ApiSection.md) \| null

## Example

This example creates a new document section which ends at the specified paragraph.

```javascript editor-docx
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
paragraph = Api.CreateParagraph();
paragraph.SetSpacingBefore(100, true);
paragraph.SetSpacingAfter(360);
paragraph.AddText("This is a paragraph in a new section");
doc.Push(paragraph);
```
