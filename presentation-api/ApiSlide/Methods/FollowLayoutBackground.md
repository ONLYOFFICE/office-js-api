# FollowLayoutBackground

Sets the layout background as the background of the slide.

## Syntax

```javascript
expression.FollowLayoutBackground();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example sets the layout background as the background of the slide.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oLayout.SetBackground(oFill);
oSlide.FollowLayoutBackground();
```
