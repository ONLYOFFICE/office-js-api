# Copy

Creates a copy of the current slide object.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiSlide](../ApiSlide.md) &#124; null (returns new ApiSlide object that represents the duplicate slide or null if slide doesn't exist)

## Example

This example creates a copy of the current slide object.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
var oCopySlide = oSlide.Copy();
oPresentation.AddSlide(oCopySlide);
builder.SaveFile("pptx", "Copy.pptx");
builder.CloseFile();
```