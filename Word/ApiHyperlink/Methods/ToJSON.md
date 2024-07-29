# ToJSON

Converts the ApiHyperlink object into the JSON object.

## Syntax

expression.ToJSON(bWriteStyles);

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiHyperlink object into the JSON object.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oHyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
var json = oHyperlink.ToJSON(true);
var oHyperlinkFromJSON = Api.FromJSON(json);
oHyperlinkFromJSON.SetDefaultStyle();
oParagraph.AddElement(oHyperlinkFromJSON);
```
