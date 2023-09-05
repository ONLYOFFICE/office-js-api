# ReplaceCurrentImage

Replaces the current image with a new one.

## Syntax

expression.ReplaceCurrentImage(sImageUrl, nWidth, nHeight);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sImageUrl | Required | String | The image source where the image to be inserted should be taken from (currently only internet URL or Base64 encoded images are supported). |
| nWidth | Required | [EMU](../../../Enumerations/Emu.md) | The image width in English measure units. |
| nHeight | Required | [EMU](../../../Enumerations/Emu.md) | The image height in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example replaces the image with a new one.

```javascript
// todo_example
```