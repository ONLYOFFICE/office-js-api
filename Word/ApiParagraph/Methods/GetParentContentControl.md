# GetParentContentControl

Returns a content control that contains the current paragraph.

## Syntax

```javascript
expression.GetParentContentControl();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null

## Example

This example shows how to get a content control that contains the paragraph.

```javascript editor-docx
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt, 0);
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph added to the block text content control.");
blockLvlSdt.AddElement(paragraph, 0);
let parentBlockLvlSdt = paragraph.GetParentContentControl();
parentBlockLvlSdt.GetRange(0, 3).SetBold(true);
```
