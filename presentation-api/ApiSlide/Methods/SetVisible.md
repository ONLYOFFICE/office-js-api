# SetVisible

Sets the visibility to the current presentation slide.

## Syntax

```javascript
expression.SetVisible(value);
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | boolean |  | Slide visibility. |

## Returns

boolean

## Example

This example sets the visibility to the current presentation slide.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
oSlide.SetVisible(false);
oPresentation.AddSlide(oSlide);
```
