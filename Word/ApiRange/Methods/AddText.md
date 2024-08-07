# AddText

Adds a text to the specified position.

## Syntax

expression.AddText(sText, sPosition);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | String |  | The text that will be added. |
| sPosition | Optional | string | "after" | The position where the text will be added ("before" or "after" the range specified). |

## Returns

boolean

## Example

This example adds a text to the specified position.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Document");
var oRange = oDocument.GetRange(0, 7);
oRange.AddText("ONLYOFFICE ", "before");
oRange.AddText(" Builder", "after");
```
