# FollowMasterBackground

Sets the master background as the background of the layout.

## Syntax

expression.FollowMasterBackground();

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean (returns false if master is null or master hasn't background)

## Example

This example sets the master background as the background of the layout.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oMaster.SetBackground(oFill);
var oLayout = oMaster.GetLayout(0);
oLayout.FollowMasterBackground();
oSlide.FollowLayoutBackground();
builder.SaveFile("pptx", "FollowMasterBackground.pptx");
builder.CloseFile();
```