# SetItalic

Sets the italic property to the text character.

## Syntax

expression.SetItalic(isItalic);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | boolean |  | Specifies if the contents of the current Range are displayed italicized or not. |

## Returns

ApiRange, null

## Example

This example sets the italic property to the text character.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetItalic(true);
```
