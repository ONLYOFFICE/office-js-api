# MoveTo

Moves the current slide to a specific location within the same collection.

## Syntax

expression.MoveTo(nPos);

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | Position where the current slide will be moved to. |

## Returns

Boolean (returns false if slide doesn't exist or position is invalid or slide is not in the presentation)

## Example

This example moves the current slide to a specific location within the same collection.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
oPresentation.AddSlide(oSlide);
oSlide.MoveTo(0);
builder.SaveFile("pptx", "MoveTo.pptx");
builder.CloseFile();
```