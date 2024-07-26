# SetSpacing

Sets the text spacing measured in twentieths of a point.

## Syntax

expression.SetSpacing(nSpacing);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSpacing | Required | twips |  | The value of the text spacing measured in twentieths of a point (1/1440 of an inch). |

## Returns

ApiRange, null

## Example

This example sets the text spacing measured in twentieths of a point.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetSpacing(2);
```
