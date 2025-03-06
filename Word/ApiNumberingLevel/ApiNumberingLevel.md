# ApiNumberingLevel

Represents the ApiNumberingLevel class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "numberingLevel" | Returns a type of the ApiNumberingLevel class. |
| [GetLevelIndex](./Methods/GetLevelIndex.md) | number | Returns the level index. |
| [GetNumbering](./Methods/GetNumbering.md) | [ApiNumbering](../ApiNumbering/ApiNumbering.md) | Returns the numbering definition. |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | Returns the paragraph properties which are applied to any numbered paragraph that references the given numbering definition and numbering level. |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies the text properties which will be applied to the text in the current numbering level itself, not to the text in the subsequent paragraph.\n💡 To change the text style of the paragraph, a style must be applied to it using the [ApiRun#SetStyle](../ApiRun/Methods/SetStyle.md) method. |
| [LinkWithStyle](./Methods/LinkWithStyle.md) | None | Links the specified paragraph style with the current numbering level. |
| [SetCustomType](./Methods/SetCustomType.md) | None | Sets your own customized numbering type. |
| [SetRestart](./Methods/SetRestart.md) | None | Specifies a one-based index which determines when a numbering level should restart to its starting value. A numbering level restarts when an instance of the specified numbering level which is higher (earlier than this level) is used in the given document contents. By default this value is true. |
| [SetStart](./Methods/SetStart.md) | None | Specifies the starting value for the numbering used by the parent numbering level within a given numbering level definition. By default this value is 1. |
| [SetSuff](./Methods/SetSuff.md) | None | Specifies the content which will be added between the given numbering level text and the text of every numbered paragraph which references that numbering level. By default this value is "tab". |
| [SetTemplateType](./Methods/SetTemplateType.md) | None | Sets one of the existing predefined numbering templates. |
