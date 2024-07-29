# SetCaps

Specifies that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents.

## Syntax

expression.SetCaps(isCaps);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | Required | boolean |  | Specifies if the Range contents are displayed capitalized or not. |

## Returns

ApiRange, null

## Example

This example specifies that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(10, 17);
oRange.SetCaps(true);
```
