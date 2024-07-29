# ToJSON

Converts the ApiSection object into the JSON object.

## Syntax

expression.ToJSON(bWriteNumberings, bWriteStyles);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | boolean |  | Specifies if the used numberings will be written to the JSON object or not. |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiSection object into the JSON object.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with a page size set in the current document section.");
var oSection = oDocument.GetFinalSection();
oSection.SetPageMargins(720, 720, 720, 720);
oSection.SetPageSize(7200, 4320);
var json = oSection.ToJSON(false, true);
var oSectionFromJSON = Api.FromJSON(json);
var sType = oSectionFromJSON.GetClassType();
oParagraph.AddLineBreak();
oParagraph.AddText("Class type = " + sType);
```
