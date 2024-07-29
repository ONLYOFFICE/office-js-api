# SetSmallCaps

Specifies that all the lowercase letter characters in the current text Range are formatted for display only as their capitalletter character equivalents which are two points smaller than the actual font size specified for this text.

## Syntax

expression.SetSmallCaps(isSmallCaps);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | Required | boolean |  | Specifies if the contents of the current Range are displayed capitalized two points smaller or not. |

## Returns

ApiRange, null

## Example

This example specifies that all the lowercase letter characters in the current text Range are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(10, 24);
oRange.SetSmallCaps(true);
```
