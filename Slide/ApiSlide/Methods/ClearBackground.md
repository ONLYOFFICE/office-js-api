# ClearBackground

Clears the slide background.

## Syntax

expression.ClearBackground();

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean (return false if slide doesn't exist)

## Example

This example clears the slide background.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
var oDuplicateSlide = oSlide.Duplicate(1);
oDuplicateSlide.ClearBackground();
builder.SaveFile("pptx", "ClearBackground.pptx");
builder.CloseFile();
```