# ApiDocument

Represents the ApiDocument class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [ClearAllFields](./Methods/ClearAllFields.md) | None | Clears all forms in the document. |
| [GetAllForms](./Methods/GetAllForms.md) | [ApiForm](../Enumeration/ApiForm.md)[] | Returns all existing forms in the document. |
| [GetFormsByTag](./Methods/GetFormsByTag.md) | [ApiForm](../Enumeration/ApiForm.md)[] | Returns a list of all forms in the document with the specified tag name. |
| [GetFormsData](./Methods/GetFormsData.md) | [FormData](../Enumeration/FormData.md)[] | Returns the data from all forms present in the current document.\ If a form was created and not assigned to any part of the document, it won't appear in this list. |
| [GetTagsOfAllForms](./Methods/GetTagsOfAllForms.md) | String[] | Returns a list of all tags that are used for all forms in the document. |
| [InsertTextForm](./Methods/InsertTextForm.md) | [ApiTextForm](../ApiTextForm/ApiTextForm.md) | Inserts a text box with the specified text box properties over the selected text. |
| [SetFormsData](./Methods/SetFormsData.md) | None | Sets the data to the specified forms. |
| [SetFormsHighlight](./Methods/SetFormsHighlight.md) | None | Sets the highlight to the forms in the document. |
