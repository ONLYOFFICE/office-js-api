# Push

Pushes a paragraph or a table or a block content control to actually add it to the current container.

## Syntax

expression.Push(oElement);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The type of the element which will be pushed to the current container. |

## Returns

boolean

## Example

This example pushes a paragraph to actually add it to the container.

```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a block text content control.");
oBlockLvlSdt.Push(oParagraph);
oDocument.AddElement(0, oBlockLvlSdt);
```
