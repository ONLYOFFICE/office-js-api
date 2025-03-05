# ApiStyle

Represents the ApiStyle class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "style" | Returns a type of the ApiStyle class. |
| [GetName](./Methods/GetName.md) | string | Returns a name of the current style. |
| [SetName](./Methods/SetName.md) | None | Sets a name of the current style. |
| [GetType](./Methods/GetType.md) | [StyleType](../Enumeration/StyleType.md) | Returns a type of the current style. |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns the text properties of the current style. |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | Returns the paragraph properties of the current style. |
| [GetTablePr](./Methods/GetTablePr.md) | [ApiTablePr](../ApiTablePr/ApiTablePr.md) | Returns the table properties of the current style. |
| [GetTableRowPr](./Methods/GetTableRowPr.md) | [ApiTableRowPr](../ApiTableRowPr/ApiTableRowPr.md) | Returns the table row properties of the current style. |
| [GetTableCellPr](./Methods/GetTableCellPr.md) | [ApiTableCellPr](../ApiTableCellPr/ApiTableCellPr.md) | Returns the table cell properties of the current style. |
| [SetBasedOn](./Methods/SetBasedOn.md) | None | Specifies the reference to the parent style which this style inherits from in the style hierarchy. |
| [GetConditionalTableStyle](./Methods/GetConditionalTableStyle.md) | [ApiTableStylePr](../ApiTableStylePr/ApiTableStylePr.md) | Returns a set of formatting properties which will be conditionally applied to the parts of a table that match the  requirement specified in the sType parameter. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiStyle object into the JSON object. |
