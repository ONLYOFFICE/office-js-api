# SetPictureSize

Sets the size of the picture in a content control.

## Syntax

```javascript
expression.SetPictureSize(width, height);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [EMU](../../Enumeration/EMU.md) |  | The desired width of the image. |
| height | Required | [EMU](../../Enumeration/EMU.md) |  | The desired height of the image. |

## Returns

boolean

## Example

This example shows how to set the size of an image in a content control.

```javascript editor-docx
let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
inlineControl.SetPictureSize(50 * 36000, 70 * 36000);
```