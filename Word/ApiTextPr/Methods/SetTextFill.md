# SetTextFill

Sets the text fill to the current text run.

## Syntax

expression.SetTextFill(oApiFill);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the text color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

In this example, the WordArt text has a text fill.

```javascript
var oDocument = Api.GetDocument();
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oTextPr.SetCaps(true);
oTextPr.SetOutLine(Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51))));
oTextPr.SetTextFill(Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oTextPr.SetFontFamily("Comic Sans MS");
var oTextArt = Api.CreateWordArt(oTextPr, "onlyoffice", "textArchUp", null, null, 0, 150 * 36000, 50 * 36000);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddDrawing(oTextArt);
```
