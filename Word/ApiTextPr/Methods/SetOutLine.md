# SetOutLine

Sets the text outline to the current text run.

## Syntax

expression.SetOutLine(oStroke);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the text outline. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

In this example, the WordArt text has a text outline.

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
