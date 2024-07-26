# SetStrikeout

Specifies that the contents of the current Range are displayed with a single horizontal line through the range center.

## Syntax

expression.SetStrikeout(isStrikeout);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | boolean |  | Specifies if the contents of the current Range are displayed struck through or not. |

## Returns

ApiRange, null

## Example

This example specifies that the contents of the current Range are displayed with a single horizontal line through the range center.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Server Builder");
var oRange = oDocument.GetRange(18, 23);
oRange.SetStrikeout(true);
```
