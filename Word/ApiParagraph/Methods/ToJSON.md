# ToJSON

Converts the ApiParaPr object into the JSON object.

## Syntax

expression.ToJSON(bWriteStyles);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiParaPr object into the JSON object.

```javascript
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetLeftBorder("single", 24, 0, 0, 255, 0);
var json = oParaPr.ToJSON(true);
var oParaPrFromJSON = Api.FromJSON(json);
var sType = oParaPrFromJSON.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class type = " + sType);
```
