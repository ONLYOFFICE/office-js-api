# FollowLayoutBackground

Sets the layout background as the background of the slide.

## Syntax

expression.FollowLayoutBackground();

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean (returns false if layout is null or layout hasn't background or slide doesn't exist)

## Example

This example sets the layout background as the background of the slide.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oLayout.SetBackground(oFill);
oSlide.FollowLayoutBackground();
builder.SaveFile("pptx", "FollowLayoutBackground.pptx");
builder.CloseFile();
```