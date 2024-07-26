# ToJSON

Converts the ApiRange object into the JSON object.

## Syntax

expression.ToJSON(bWriteNumberings, bWriteStyles);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | boolean |  | Specifies if the used numberings will be written to the JSON object or not. |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiRange object into the JSON object.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = Api.CreateRange(oParagraph, 0, 9);
oRange.SetBold(true);
var json = oRange.ToJSON(false, true);
var oRangeFromJSON = Api.FromJSON(json);
oDocument.Push(oRangeFromJSON[0]);
```
