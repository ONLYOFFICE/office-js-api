# ApiDateForm

Represents the ApiDateForm class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetFormat](./Methods/GetFormat.md) | [string](../../Word/string/string.md) | Gets the date format of the current form. |
| [SetFormat](./Methods/SetFormat.md) | [boolean](../../Word/boolean/boolean.md) | Sets the date format to the current form. |
| [GetLanguage](./Methods/GetLanguage.md) | [string](../../Word/string/string.md) | Gets the used date language of the current form. |
| [SetLanguage](./Methods/SetLanguage.md) | [boolean](../../Word/boolean/boolean.md) | Sets the date language to the current form. |
| [GetTime](./Methods/GetTime.md) | [number](../../Word/number/number.md) | Returns the timestamp of the current form. |
| [SetTime](./Methods/SetTime.md) | [boolean](../../Word/boolean/boolean.md) | Sets the timestamp to the current form. |
| [GetClassType](./Methods/GetClassType.md) | ["form"](../../Word/"form"/"form".md) | Returns a type of the ApiFormBase class. |
| [GetFormType](./Methods/GetFormType.md) | [FormType](../Enumeration/FormType.md) | Returns a type of the current form. |
| [GetFormKey](./Methods/GetFormKey.md) | [string](../../Word/string/string.md) | Returns the current form key. |
| [SetFormKey](./Methods/SetFormKey.md) | [boolean](../../Word/boolean/boolean.md) | Sets a key to the current form. |
| [GetTipText](./Methods/GetTipText.md) | [string](../../Word/string/string.md) | Returns the tip text of the current form. |
| [SetTipText](./Methods/SetTipText.md) | [boolean](../../Word/boolean/boolean.md) | Sets the tip text to the current form. |
| [IsRequired](./Methods/IsRequired.md) | [boolean](../../Word/boolean/boolean.md) | Checks if the current form is required. |
| [SetRequired](./Methods/SetRequired.md) | [boolean](../../Word/boolean/boolean.md) | Specifies if the current form should be required. |
| [IsFixed](./Methods/IsFixed.md) | [boolean](../../Word/boolean/boolean.md) | Checks if the current form is fixed size. |
| [ToFixed](./Methods/ToFixed.md) | [boolean](../../Word/boolean/boolean.md) | Converts the current form to a fixed size form. |
| [ToInline](./Methods/ToInline.md) | [boolean](../../Word/boolean/boolean.md) | Converts the current form to an inline form. Picture form can't be converted to an inline form, it's always a fixed size object.* |
| [SetBorderColor](./Methods/SetBorderColor.md) | [boolean](../../Word/boolean/boolean.md) | Sets the border color to the current form. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | [boolean](../../Word/boolean/boolean.md) | Sets the background color to the current form. |
| [GetText](./Methods/GetText.md) | [string](../../Word/string/string.md) | Returns the text from the current form. Returns the value as a string if possible for the given form type* |
| [Clear](./Methods/Clear.md) | [boolean](../../Word/boolean/boolean.md) | Clears the current form. |
| [GetWrapperShape](./Methods/GetWrapperShape.md) | [ApiShape](../../Word/ApiShape/ApiShape.md) | Returns a shape in which the form is placed to control the position and size of the fixed size form frame. The null value will be returned for the inline forms. |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | [boolean](../../Word/boolean/boolean.md) | Sets the placeholder text to the current form. Can't be set to checkbox or radio button.* |
| [SetTextPr](./Methods/SetTextPr.md) | [boolean](../../Word/boolean/boolean.md) | Sets the text properties to the current form. Used if possible for this type of form* |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../../Word/ApiTextPr/ApiTextPr.md) | Returns the text properties from the current form. Used if possible for this type of form* |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | [boolean](../../Word/boolean/boolean.md) | Places a cursor before/after the current form. |
| [Copy](./Methods/Copy.md) | [ApiForm](../Enumeration/ApiForm.md) | Copies the current form (copies with the shape if it exists). |
