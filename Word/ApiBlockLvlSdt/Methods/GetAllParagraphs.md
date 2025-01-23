# GetAllParagraphs

Returns a collection of paragraph objects in the current content control.

## Syntax

expression.GetAllParagraphs();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph[]](../../ApiParagraph/ApiParagraph.md)

## Example

This example shows how to get a collection of paragraph objects in the content control.

```javascript
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is the first paragraph in the content control.");
blockLvlSdt.AddElement(paragraph, 0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph in the content control.");
blockLvlSdt.AddElement(paragraph, 1);
doc.AddElement(0, blockLvlSdt);
let paragraphs = blockLvlSdt.GetAllParagraphs();
paragraphs[0].SetBold(true);
```
