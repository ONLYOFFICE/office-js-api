# ApiCheckBoxForm

Represents the ApiCheckBoxForm class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [SetChecked](./Methods/SetChecked.md) | boolean | Checks the current checkbox. |
| [IsChecked](./Methods/IsChecked.md) | boolean | Returns the state of the current checkbox (checked or not). |
| [IsRadioButton](./Methods/IsRadioButton.md) | boolean | Checks if the current checkbox is a radio button. |
| [GetRadioGroup](./Methods/GetRadioGroup.md) | string | Returns the radio group key if the current checkbox is a radio button. |
| [SetRadioGroup](./Methods/SetRadioGroup.md) | None | Sets the radio group key to the current radio button. |
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
| [GetWrapperShape](./Methods/GetWrapperShape.md) | [ApiShape](../ApiShape/ApiShape.md) | Returns a shape in which the form is placed to control the position and size of the fixed size form frame. The null value will be returned for the inline forms. |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | Sets the placeholder text to the current form. Can't be set to checkbox or radio button.* |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the text properties to the current form. Used if possible for this type of form* |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns the text properties from the current form. Used if possible for this type of form* |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | None | Places a cursor before/after the current form. |
| [Copy](./Methods/Copy.md) | [ApiForm](../Enumeration/ApiForm.md) | Copies the current form (copies with the shape if it exists). |
