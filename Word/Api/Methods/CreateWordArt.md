# CreateWordArt

Creates a Text Art object with the parameters specified.

## Syntax

```javascript
expression.CreateWordArt(textPr, text, transform, fill, stroke, rotAngle, width, height);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | Optional | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | Api.CreateTextPr() | The text properties. |
| text | Optional | string | "Your text here" | The text for the Text Art object. |
| transform | Optional | [TextTransform](../../Enumeration/TextTransform.md) | "textNoShape" | Text transform type. |
| fill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | The color or pattern used to fill the Text Art object. |
| stroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | The stroke used to create the Text Art object shadow. |
| rotAngle | Optional | number | false | Rotation angle. |
| width | Optional | [EMU](../../Enumeration/EMU.md) | 1828800 | The Text Art width measured in English measure units. |
| height | Optional | [EMU](../../Enumeration/EMU.md) | 1828800 | The Text Art heigth measured in English measure units. |

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## Example

This example creates a Text Art object with the "textArchUp" text transform type.

```javascript
let doc = Api.GetDocument();
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetColor(51, 51, 51, false);
textPr.SetFontFamily("Comic Sans MS");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
let textArt = Api.CreateWordArt(textPr, "onlyoffice", "textArchUp", fill, stroke, 0, 150 * 36000, 50 * 36000);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(textArt);
```
