# PictureFormPrBase

Specific picture form properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| lockAspectRatio | boolean | Specifies if the aspect ratio of the picture form is locked or not. |
| respectBorders | boolean | Specifies if the form border width is respected or not when scaling the image. |
| scaleFlag | [ScaleFlag](../Enumeration/ScaleFlag.md) | The condition to scale an image in the picture form: "always", "never", "tooBig" or "tooSmall". |
| shiftX | [percentage](../Enumeration/percentage.md) | Horizontal picture position inside the picture form measured in percent:\n-**0** - the picture is placed on the left;\n-**50** - the picture is placed in the center;\n-**100** - the picture is placed on the right. |
| shiftY | [percentage](../Enumeration/percentage.md) | Vertical picture position inside the picture form measured in percent:\n-**0** - the picture is placed on top;\n-**50** - the picture is placed in the center;\n-**100** - the picture is placed on the bottom. |


## Example

This example creates a combo box form with the specific combo box form properties.

```javascript editor-pdf
let comboBoxFormPr = {"editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]};
let comboBoxForm = Api.CreateComboBoxForm(comboBoxFormPr);
```
