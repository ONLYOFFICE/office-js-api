# ClearBackground

Clears the slide layout background.

## Syntax

expression.ClearBackground();

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean (return false if slide layout doesn't exist)

## Example

This example clears backgound for a slide.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oLayout.SetBackground(oFill);
oSlide.FollowLayoutBackground();
oSlide = Api.CreateSlide();
oPresentation.AddSlide(oSlide);
oLayout.ClearBackground();
oSlide.FollowLayoutBackground();
builder.SaveFile("pptx", "ClearBackground.pptx");
builder.CloseFile();
```