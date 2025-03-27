# ApiPictureForm

Represents the ApiPictureForm class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Clear](./Methods/Clear.md) | None | Clears the current form. |
| [Copy](./Methods/Copy.md) | [ApiForm](../Enumeration/ApiForm.md) | Copies the current form (copies with the shape if it exists). |
| [GetClassType](./Methods/GetClassType.md) | "form" | Returns a type of the ApiFormBase class. |
| [GetFormKey](./Methods/GetFormKey.md) | string | Returns the current form key. |
| [GetFormType](./Methods/GetFormType.md) | [FormType](../Enumeration/FormType.md) | Returns a type of the current form. |
| [GetImage](./Methods/GetImage.md) | [Base64Img](../Enumeration/Base64Img.md) | Returns an image in the base64 format from the current picture form. |
| [GetPicturePosition](./Methods/GetPicturePosition.md) | [percentage](../Enumeration/percentage.md)[] | Returns the picture position inside the current form. |
| [GetScaleFlag](./Methods/GetScaleFlag.md) | [ScaleFlag](../Enumeration/ScaleFlag.md) | Returns the current scaling condition of the picture form. |
| [GetText](./Methods/GetText.md) | string | Returns the text from the current form.\ Returns the value as a string if possible for the given form type* |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns the text properties from the current form.\ Used if possible for this type of form* |
| [GetTipText](./Methods/GetTipText.md) | string | Returns the tip text of the current form. |
| [GetWrapperShape](./Methods/GetWrapperShape.md) | [ApiShape](../ApiShape/ApiShape.md) | Returns a shape in which the form is placed to control the position and size of the fixed size form frame.\ The null value will be returned for the inline forms. |
| [IsFixed](./Methods/IsFixed.md) | boolean | Checks if the current form is fixed size. |
| [IsLockAspectRatio](./Methods/IsLockAspectRatio.md) | boolean | Checks if the aspect ratio of the current picture form is locked or not. |
| [IsRequired](./Methods/IsRequired.md) | boolean | Checks if the current form is required. |
| [IsRespectBorders](./Methods/IsRespectBorders.md) | boolean | Checks if the form border width is respected or not. |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | None | Places a cursor before/after the current form. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color to the current form. |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | Sets the border color to the current form. |
| [SetFormKey](./Methods/SetFormKey.md) | boolean | Sets a key to the current form. |
| [SetImage](./Methods/SetImage.md) | boolean | Sets an image to the current picture form. |
| [SetLockAspectRatio](./Methods/SetLockAspectRatio.md) | boolean | Locks the aspect ratio of the current picture form. |
| [SetPicturePosition](./Methods/SetPicturePosition.md) | boolean | Sets the picture position inside the current form:\ -**0** - the picture is placed on the left/top;\ -**50** - the picture is placed in the center;\ -**100** - the picture is placed on the right/bottom. |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | Sets the placeholder text to the current form.\ Can't be set to checkbox or radio button.* |
| [SetRequired](./Methods/SetRequired.md) | boolean | Specifies if the current form should be required. |
| [SetRespectBorders](./Methods/SetRespectBorders.md) | boolean | Respects the form border width when scaling the image. |
| [SetScaleFlag](./Methods/SetScaleFlag.md) | boolean | Sets the scaling condition to the current picture form. |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the text properties to the current form.\ Used if possible for this type of form* |
| [SetTipText](./Methods/SetTipText.md) | boolean | Sets the tip text to the current form. |
| [ToFixed](./Methods/ToFixed.md) | boolean | Converts the current form to a fixed size form. |
| [ToInline](./Methods/ToInline.md) | boolean | Converts the current form to an inline form.\ Picture form can't be converted to an inline form, it's always a fixed size object.* |
