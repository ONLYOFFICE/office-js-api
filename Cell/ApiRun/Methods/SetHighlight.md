# SetHighlight

Specifies a highlighting color which is applied as a background to the contents of the current run.

## Syntax

expression.SetHighlight(sColor);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | Required | highlightColor |  | Available highlight color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies a highlighting color which is applied as a background to the contents of the run.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetHighlight("lightGray");
oRun.AddText("This is a text run with the text highlighted with light gray color.");
oParagraph.AddElement(oRun);
```
