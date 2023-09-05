# SetBackground

Sets the background to the current presentation slide.

## Syntax

expression.SetBackground(oApiFill);

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) | The color or pattern used to fill the presentation slide background. |

## Returns

Boolean

## Example

This example

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
oPresentation.AddSlide(oSlide);
builder.SaveFile("pptx", "SetBackground.pptx");
builder.CloseFile();
```