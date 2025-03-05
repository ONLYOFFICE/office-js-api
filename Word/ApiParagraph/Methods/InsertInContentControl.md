# InsertInContentControl

Wraps the paragraph object with a rich text content control.

## Syntax

```javascript
expression.InsertInContentControl(nType);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nType | Required | number |  | Defines if this method returns the ApiBlockLvlSdt (nType === 1) or ApiParagraph (any value except 1) object. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| [ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## Example

This example wraps the paragraph object with a rich text content control.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph inserted into the content control.");
let blockLvlSdt = paragraph.InsertInContentControl(1);
doc.AddElement(0, blockLvlSdt);
```
