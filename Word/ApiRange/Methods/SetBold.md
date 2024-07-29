# SetBold

Sets the bold property to the text character.

## Syntax

expression.SetBold(isBold);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | Required | boolean |  | Specifies if the Range contents are displayed bold or not. |

## Returns

ApiRange, null

## Example

This example sets the bold property to the text character.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetBold(true);
```
