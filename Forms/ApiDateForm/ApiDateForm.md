# ApiDateForm

Represents the ApiDateForm class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetFormat](./Methods/GetFormat.md) | string | Gets the date format of the current form. |
| [SetFormat](./Methods/SetFormat.md) | boolean | Sets the date format to the current form. |
| [GetLanguage](./Methods/GetLanguage.md) | string | Gets the used date language of the current form. |
| [SetLanguage](./Methods/SetLanguage.md) | boolean | Sets the date language to the current form. |
| [GetTime](./Methods/GetTime.md) | number | Returns the timestamp of the current form. |
| [SetTime](./Methods/SetTime.md) | boolean | Sets the timestamp to the current form. |
| [GetClassType](./Methods/GetClassType.md) | "form" | Returns a type of the ApiFormBase class. |
| [GetFormType](./Methods/GetFormType.md) | [FormType](../Enumeration/FormType.md) | Returns a type of the current form. |
| [GetFormKey](./Methods/GetFormKey.md) | string | Returns the current form key. |
| [SetFormKey](./Methods/SetFormKey.md) | boolean | Sets a key to the current form. |
| [GetTipText](./Methods/GetTipText.md) | string | Returns the tip text of the current form. |
| [SetTipText](./Methods/SetTipText.md) | boolean | Sets the tip text to the current form. |
| [IsRequired](./Methods/IsRequired.md) | boolean | Checks if the current form is required. |
| [SetRequired](./Methods/SetRequired.md) | boolean | Specifies if the current form should be required. |
| [IsFixed](./Methods/IsFixed.md) | boolean | Checks if the current form is fixed size. |
| [ToFixed](./Methods/ToFixed.md) | boolean | Converts the current form to a fixed size form. |
| [ToInline](./Methods/ToInline.md) | boolean | Converts the current form to an inline form. Picture form can't be converted to an inline form, it's always a fixed size object.* |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | Sets the border color to the current form. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color to the current form. |
| [GetText](./Methods/GetText.md) | string | Returns the text from the current form. Returns the value as a string if possible for the given form type* |
| [Clear](./Methods/Clear.md) | None | Clears the current form. |
| [GetWrapperShape](./Methods/GetWrapperShape.md) | [ApiShape](../../Word/ApiShape/ApiShape.md) | Returns a shape in which the form is placed to control the position and size of the fixed size form frame. The null value will be returned for the inline forms. |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | Sets the placeholder text to the current form. Can't be set to checkbox or radio button.* |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the text properties to the current form. Used if possible for this type of form* |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../../Word/ApiTextPr/ApiTextPr.md) | Returns the text properties from the current form. Used if possible for this type of form* |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | None | Places a cursor before/after the current form. |
| [Copy](./Methods/Copy.md) | [ApiForm](../Enumeration/ApiForm.md) | Copies the current form (copies with the shape if it exists). |
