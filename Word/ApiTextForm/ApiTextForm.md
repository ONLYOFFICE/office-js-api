# ApiTextForm

Represents the ApiTextForm class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [IsAutoFit](./Methods/IsAutoFit.md) | boolean | Checks if the text field content is autofit, i.e. whether the font size adjusts to the size of the fixed size form. |
| [SetAutoFit](./Methods/SetAutoFit.md) | boolean | Specifies if the text field content should be autofit, i.e. whether the font size adjusts to the size of the fixed size form. |
| [IsMultiline](./Methods/IsMultiline.md) | boolean | Checks if the current text field is multiline. |
| [SetMultiline](./Methods/SetMultiline.md) | boolean | Specifies if the current text field should be miltiline. |
| [GetCharactersLimit](./Methods/GetCharactersLimit.md) | number | Returns a limit of the text field characters. |
| [SetCharactersLimit](./Methods/SetCharactersLimit.md) | boolean | Sets a limit to the text field characters. |
| [IsComb](./Methods/IsComb.md) | boolean | Checks if the text field is a comb of characters with the same cell width. |
| [SetComb](./Methods/SetComb.md) | boolean | Specifies if the text field should be a comb of characters with the same cell width. The maximum number of characters must be set to a positive value. |
| [SetCellWidth](./Methods/SetCellWidth.md) | boolean | Sets the cell width to the applied comb of characters. |
| [SetText](./Methods/SetText.md) | boolean | Sets the text to the current text field. |
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
