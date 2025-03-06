# ApiComboBoxForm

Represents the ApiComboBoxForm class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Clear](./Methods/Clear.md) | None | Clears the current form. |
| [Copy](./Methods/Copy.md) | [ApiForm](../Enumeration/ApiForm.md) | Copies the current form (copies with the shape if it exists). |
| [GetClassType](./Methods/GetClassType.md) | "form" | Returns a type of the ApiFormBase class. |
| [GetFormKey](./Methods/GetFormKey.md) | string | Returns the current form key. |
| [GetFormType](./Methods/GetFormType.md) | [FormType](../Enumeration/FormType.md) | Returns a type of the current form. |
| [GetListValues](./Methods/GetListValues.md) | string[] | Returns the list values from the current combo box. |
| [GetText](./Methods/GetText.md) | string | Returns the text from the current form.\nReturns the value as a string if possible for the given form type* |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns the text properties from the current form.\nUsed if possible for this type of form* |
| [GetTipText](./Methods/GetTipText.md) | string | Returns the tip text of the current form. |
| [GetWrapperShape](./Methods/GetWrapperShape.md) | [ApiShape](../ApiShape/ApiShape.md) | Returns a shape in which the form is placed to control the position and size of the fixed size form frame.\nThe null value will be returned for the inline forms. |
| [IsEditable](./Methods/IsEditable.md) | boolean | Checks if the combo box text can be edited. If it is not editable, then this form is a dropdown list. |
| [IsFixed](./Methods/IsFixed.md) | boolean | Checks if the current form is fixed size. |
| [IsRequired](./Methods/IsRequired.md) | boolean | Checks if the current form is required. |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | None | Places a cursor before/after the current form. |
| [SelectListValue](./Methods/SelectListValue.md) | boolean | Selects the specified value from the combo box list values. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color to the current form. |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | Sets the border color to the current form. |
| [SetFormKey](./Methods/SetFormKey.md) | boolean | Sets a key to the current form. |
| [SetListValues](./Methods/SetListValues.md) | boolean | Sets the list values to the current combo box. |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | Sets the placeholder text to the current form.\nCan't be set to checkbox or radio button.* |
| [SetRequired](./Methods/SetRequired.md) | boolean | Specifies if the current form should be required. |
| [SetText](./Methods/SetText.md) | boolean | Sets the text to the current combo box.\nAvailable only for editable combo box forms.* |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the text properties to the current form.\nUsed if possible for this type of form* |
| [SetTipText](./Methods/SetTipText.md) | boolean | Sets the tip text to the current form. |
| [ToFixed](./Methods/ToFixed.md) | boolean | Converts the current form to a fixed size form. |
| [ToInline](./Methods/ToInline.md) | boolean | Converts the current form to an inline form.\nPicture form can't be converted to an inline form, it's always a fixed size object.* |
