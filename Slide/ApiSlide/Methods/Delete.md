# Delete

Deletes the current slide from the presentation.

## Syntax

expression.Delete();

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean (returns false if slide doesn't exist)

## Example

This example deletes the current slide from the presentation.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
oPresentation.AddSlide(oSlide);
oSlide = oPresentation.GetSlideByIndex(0);
oSlide.Delete();
builder.SaveFile("pptx", "Delete.pptx");
builder.CloseFile();
```