# SetControlsHighlight

Sets the highlight to the content controls from the current document.

## Syntax

expression.SetControlsHighlight(r, g, b, bNone);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |
| bNone | Optional | boolean | false | Defines that highlight will not be set. |

## Returns

This method doesn't return any data.

## Example

This example sets the highlight to the content controls from the document.

```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
oDocument.SetControlsHighlight(255, 111, 61);
```
