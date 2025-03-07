# GetAllContentControls

Returns a collection of content control objects in the current content control.

## Syntax

```javascript
expression.GetAllContentControls();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[]

## Example

This example shows how to get a collection of content control objects in the current content control.

```javascript editor-docx
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let innerSdt1 = Api.CreateBlockLvlSdt();
innerSdt1.GetContent().GetElement(0).AddText("This is the first block text content control.");
let innerSdt2 = Api.CreateBlockLvlSdt();
innerSdt2.GetContent().GetElement(0).AddText("This is the second block text content control.");
blockLvlSdt.AddElement(innerSdt1, 0);
blockLvlSdt.AddElement(innerSdt2, 1);
doc.AddElement(0, blockLvlSdt);
let contentControls = blockLvlSdt.GetAllContentControls();
contentControls[0].GetContent().GetElement(0).SetBold(true);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + contentControls[0].GetClassType());
doc.Push(paragraph);
```
