# Api

Represents the Api class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [CreateParagraph](./Methods/CreateParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Creates a new paragraph. |
| [CreateRun](./Methods/CreateRun.md) | [ApiRun](../ApiRun/ApiRun.md) | Creates a new smaller text block to be inserted to the current paragraph or table. |
| [CreateRGBColor](./Methods/CreateRGBColor.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | Creates an RGB color setting the appropriate values for the red, green and blue color components. |
| [CreateSchemeColor](./Methods/CreateSchemeColor.md) | [ApiSchemeColor](../ApiSchemeColor/ApiSchemeColor.md) | Creates a complex color scheme selecting from one of the available schemes. |
| [CreatePresetColor](./Methods/CreatePresetColor.md) | [ApiPresetColor](../ApiPresetColor/ApiPresetColor.md) | Creates a color selecting it from one of the available color presets. |
| [CreateSolidFill](./Methods/CreateSolidFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a solid fill to apply to the object using a selected solid color as the object background. |
| [CreateLinearGradientFill](./Methods/CreateLinearGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a linear gradient fill to apply to the object using the selected linear gradient as the object background. |
| [CreateRadialGradientFill](./Methods/CreateRadialGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a radial gradient fill to apply to the object using the selected radial gradient as the object background. |
| [CreatePatternFill](./Methods/CreatePatternFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a pattern fill to apply to the object using the selected pattern as the object background. |
| [CreateBlipFill](./Methods/CreateBlipFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a blip fill to apply to the object using the selected image as the object background. |
| [CreateNoFill](./Methods/CreateNoFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates no fill and removes the fill from the element. |
| [CreateStroke](./Methods/CreateStroke.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | Creates a stroke adding shadows to the element. |
| [CreateGradientStop](./Methods/CreateGradientStop.md) | [ApiGradientStop](../ApiGradientStop/ApiGradientStop.md) | Creates a gradient stop used for different types of gradients. |
| [CreateBullet](./Methods/CreateBullet.md) | [ApiBullet](../ApiBullet/ApiBullet.md) | Creates a bullet for a paragraph with the character or symbol specified with the sSymbol parameter. |
| [CreateNumbering](./Methods/CreateNumbering.md) | [ApiBullet](../ApiBullet/ApiBullet.md) | Creates a bullet for a paragraph with the numbering character or symbol specified with the numType parameter. |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | None | Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings. |
| [CreateTextPr](./Methods/CreateTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Creates the empty text properties. |
| [GetFullName](./Methods/GetFullName.md) | string | Returns the full name of the currently opened file. |
| [Format](./Methods/Format.md) | string | Returns a class formatted according to the instructions contained in the format expression. |
| [AddCustomFunction](./Methods/AddCustomFunction.md) | None | Creates a new custom function. The description of the function parameters and result is specified using JSDoc. The &lt;em&gt;@customfunction&lt;/em&gt; tag is required in JSDoc. Parameters and results can be specified as the &lt;em&gt;number / string / boolean / any / number[][] / string[][] / bobooleanol[][] / any[][]&lt;/em&gt; types. Parameters can be required or optional. A user can also set a default value. |
| [AddCustomFunctionLibrary](./Methods/AddCustomFunctionLibrary.md) | None | Registers a new custom functions library (see the **SetCustomFunctions** plugin method). The description of the function parameters and result is specified using JSDoc. The &lt;em&gt;@customfunction&lt;/em&gt; tag is required in JSDoc. Parameters and results can be specified as the &lt;em&gt;number / string / boolean / any / number[][] / string[][] / boolean[][] / any[][]&lt;/em&gt; types. Parameters can be required or optional. A user can also set a default value. |
| [RemoveCustomFunction](./Methods/RemoveCustomFunction.md) | boolean | Removes a custom function. |
| [ClearCustomFunctions](./Methods/ClearCustomFunctions.md) | boolean | Clears all custom functions. |
| [AddSheet](./Methods/AddSheet.md) | None | Creates a new worksheet. The new worksheet becomes the active sheet. |
| [GetSheets](./Methods/GetSheets.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md)[] | Returns a sheet collection that represents all the sheets in the active workbook. |
| [SetLocale](./Methods/SetLocale.md) | None | Sets a locale to the document. |
| [GetLocale](./Methods/GetLocale.md) | number | Returns the current locale ID. |
| [GetActiveSheet](./Methods/GetActiveSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns an object that represents the active sheet. |
| [GetSheet](./Methods/GetSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) \| null | Returns an object that represents a sheet. |
| [GetThemesColors](./Methods/GetThemesColors.md) | string[] | Returns a list of all the available theme colors for the spreadsheet. |
| [SetThemeColors](./Methods/SetThemeColors.md) | boolean | Sets the theme colors to the current spreadsheet. |
| [CreateNewHistoryPoint](./Methods/CreateNewHistoryPoint.md) | None | Creates a new history point. |
| [CreateColorFromRGB](./Methods/CreateColorFromRGB.md) | [ApiColor](../ApiColor/ApiColor.md) | Creates an RGB color setting the appropriate values for the red, green and blue color components. |
| [CreateColorByName](./Methods/CreateColorByName.md) | [ApiColor](../ApiColor/ApiColor.md) | Creates a color selecting it from one of the available color presets. |
| [Intersect](./Methods/Intersect.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the ApiRange object that represents the rectangular intersection of two or more ranges. If one or more ranges from a different worksheet are specified, an error will be returned. |
| [GetSelection](./Methods/GetSelection.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents the selected range. |
| [AddDefName](./Methods/AddDefName.md) | boolean | Adds a new name to a range of cells. |
| [GetDefName](./Methods/GetDefName.md) | [ApiName](../ApiName/ApiName.md) | Returns the ApiName object by the range name. |
| [Save](./Methods/Save.md) | None | Saves changes to the specified document. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the ApiRange object by the range reference. |
| [GetWorksheetFunction](./Methods/GetWorksheetFunction.md) | [ApiWorksheetFunction](../ApiWorksheetFunction/ApiWorksheetFunction.md) | Returns the ApiWorksheetFunction object. |
| [GetMailMergeData](./Methods/GetMailMergeData.md) | string[][] | Returns the mail merge data. |
| [RecalculateAllFormulas](./Methods/RecalculateAllFormulas.md) | boolean | Recalculates all formulas in the active workbook. |
| [InsertPivotExistingWorksheet](./Methods/InsertPivotExistingWorksheet.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | Inserts the specified pivot table into an existing worksheet. |
| [InsertPivotNewWorksheet](./Methods/InsertPivotNewWorksheet.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | Inserts the specified pivot table into a new worksheet. |
| [GetPivotByName](./Methods/GetPivotByName.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) \| null | Returns a pivot table by its name, or null if it does not exist. |
| [RefreshAllPivots](./Methods/RefreshAllPivots.md) | None | Refreshes all pivot tables. |
| [GetAllPivotTables](./Methods/GetAllPivotTables.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md)[] | Returns all pivot tables. |
| [attachEvent](./Methods/attachEvent.md) | None | Subscribes to the specified event and calls the callback function when the event fires. |
| [detachEvent](./Methods/detachEvent.md) | None | Unsubscribes from the specified event. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) \| null | Returns an array of ApiComment objects. |
| [GetCommentById](./Methods/GetCommentById.md) | [ApiComment](../ApiComment/ApiComment.md) | Returns a comment from the current document by its ID. |
| [GetComments](./Methods/GetComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments related to the whole workbook. |
| [GetAllComments](./Methods/GetAllComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments from the current workbook including comments from all worksheets. |
| [SetFreezePanesType](./Methods/SetFreezePanesType.md) | None | Sets a type to the freeze panes. |
| [GetFreezePanesType](./Methods/GetFreezePanesType.md) | [FreezePaneType](../Enumeration/FreezePaneType.md) | Returns the freeze panes type. |
| [GetReferenceStyle](./Methods/GetReferenceStyle.md) | [ReferenceStyle](../Enumeration/ReferenceStyle.md) | Returns the cell reference style. |
| [SetReferenceStyle](./Methods/SetReferenceStyle.md) | None | Sets the cell reference style. |
| [GetDocumentInfo](./Methods/GetDocumentInfo.md) | object | Returns the document information: **Application** - the application the document has been created with. **CreatedRaw** - the date and time when the file was created. **Created** - the parsed date and time when the file was created. **LastModifiedRaw** - the date and time when the file was last modified. **LastModified** - the parsed date and time when the file was last modified. **LastModifiedBy** - the name of the user who has made the latest change to the document. **Autrors** - the persons who has created the file. **Title** - this property allows you to simplify your documents classification. **Tags** - this property allows you to simplify your documents classification. **Subject** - this property allows you to simplify your documents classification. **Comment** - this property allows you to simplify your documents classification. |
