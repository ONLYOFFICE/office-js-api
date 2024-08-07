# SearchAndReplace

Finds and replaces the text.

## Syntax

expression.SearchAndReplace(oProperties, oProperties.searchString, oProperties.replaceString, oProperties.matchCase);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oProperties | Required | Object |  | The properties to find and replace. |
| oProperties.searchString | Required | string |  | Search string. |
| oProperties.replaceString | Required | string |  | Replacement string. |
| oProperties.matchCase | Optional | string | true | Case sensitive or not. |

## Returns

This method doesn't return any data.

## Example

This example shows how to make search and replace.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is the first sample text. The serial number of this sample text was replaced here.");
oDocument.SearchAndReplace({"searchString": "first", "replaceString": "second"});
```
