# SetSetVisible

Sets the visibility to the current presentation slide.

## Syntax

expression.SetSetVisible(value);

`expression` - A variable that represents a [className](../classLink.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| value | Required | Boolean | Value of visibility of slide |

## Returns

Boolean

## Example

This example sets the visibility to the current presentation slide.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
oSlide.SetSetVisible(false);
oPresentation.AddSlide(oSlide);
builder.SaveFile("pptx", "SetSetVisible.pptx");
builder.CloseFile();
```