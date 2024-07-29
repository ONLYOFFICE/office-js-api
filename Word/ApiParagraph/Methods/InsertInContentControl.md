# InsertInContentControl

Wraps the paragraph object with a rich text content control.

## Syntax

expression.InsertInContentControl(nType);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nType | Required | number |  | Defines if this method returns the ApiBlockLvlSdt (nType === 1) or ApiParagraph (any value except 1) object. |

## Returns

ApiParagraph, ApiBlockLvlSdt

## Example

This example wraps the paragraph object with a rich text content control.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph inserted into the content control.");
var oBlockLvlSdt = oParagraph.InsertInContentControl(1);
oDocument.AddElement(0, oBlockLvlSdt);
```
