# PictureFormPrBase

Specific picture form properties.

## Type

Object

## Properties

| **Name**  | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| scaleFlag | [ScaleFlag](./ScaleFlag.md) | The condition to scale an image in the picture form: "always", "never", "tooBig" or "tooSmall". |
| lockAspectRatio | Boolean | Specifies if the aspect ratio of the picture form is locked or not. |
| respectBorders | Boolean | Specifies if the form border width is respected or not when scaling the image. |
| [shiftX](../Word/ApiPictureForm/Properties/shiftX.md) | [percentage](./percentage.md) | Horizontal picture position inside the picture form measured in percent. |
| [shiftY](../Word/ApiPictureForm/Properties/shiftY.md) | [percentage](./percentage.md) | Vertical picture position inside the picture form measured in percent. |

## Example

This example creates a combo box form with the specific combo box form properties.

```javascript
var oComboBoxFormPrBase = {"editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]};
var oComboBoxForm = Api.CreateComboBoxForm(oComboBoxFormPrBase);
```