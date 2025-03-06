# Api

Represents the Api class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the specifed document element or array of Runs. |
| [ConvertDocument](./Methods/ConvertDocument.md) | string | Converts a document to Markdown or HTML text. |
| [CreateBlipFill](./Methods/CreateBlipFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a blip fill to apply to the object using the selected image as the object background. |
| [CreateBlockLvlSdt](./Methods/CreateBlockLvlSdt.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | Creates a new block level container. |
| [CreateChart](./Methods/CreateChart.md) | [ApiChart](../ApiChart/ApiChart.md) | Creates a chart with the parameters specified. |
| [CreateGradientStop](./Methods/CreateGradientStop.md) | [ApiGradientStop](../ApiGradientStop/ApiGradientStop.md) | Creates a gradient stop used for different types of gradients. |
| [CreateGroup](./Methods/CreateGroup.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | Groups an array of drawings. |
| [CreateHyperlink](./Methods/CreateHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) | Creates a new hyperlink text block to be inserted to the current paragraph or table. |
| [CreateImage](./Methods/CreateImage.md) | [ApiImage](../ApiImage/ApiImage.md) | Creates an image with the parameters specified. |
| [CreateInlineLvlSdt](./Methods/CreateInlineLvlSdt.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Creates a new inline container. |
| [CreateLinearGradientFill](./Methods/CreateLinearGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a linear gradient fill to apply to the object using the selected linear gradient as the object background. |
| [CreateNoFill](./Methods/CreateNoFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates no fill and removes the fill from the element. |
| [CreateOleObject](./Methods/CreateOleObject.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md) | Creates an OLE object with the parameters specified. |
| [CreateParagraph](./Methods/CreateParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Creates a new paragraph. |
| [CreatePatternFill](./Methods/CreatePatternFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a pattern fill to apply to the object using the selected pattern as the object background. |
| [CreatePresetColor](./Methods/CreatePresetColor.md) | [ApiPresetColor](../ApiPresetColor/ApiPresetColor.md) | Creates a color selecting it from one of the available color presets. |
| [CreateRGBColor](./Methods/CreateRGBColor.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | Creates an RGB color setting the appropriate values for the red, green and blue color components. |
| [CreateRadialGradientFill](./Methods/CreateRadialGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a radial gradient fill to apply to the object using the selected radial gradient as the object background. |
| [CreateRange](./Methods/CreateRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Creates an element range.\nIf you do not specify the start and end positions, the range will be taken from the entire element. |
| [CreateRun](./Methods/CreateRun.md) | [ApiRun](../ApiRun/ApiRun.md) | Creates a new smaller text block to be inserted to the current paragraph or table. |
| [CreateSchemeColor](./Methods/CreateSchemeColor.md) | [ApiSchemeColor](../ApiSchemeColor/ApiSchemeColor.md) | Creates a complex color scheme selecting from one of the available schemes. |
| [CreateShape](./Methods/CreateShape.md) | [ApiShape](../ApiShape/ApiShape.md) | Creates a shape with the parameters specified. |
| [CreateSolidFill](./Methods/CreateSolidFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a solid fill to apply to the object using a selected solid color as the object background. |
| [CreateStroke](./Methods/CreateStroke.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | Creates a stroke adding shadows to the element. |
| [CreateTable](./Methods/CreateTable.md) | [ApiTable](../ApiTable/ApiTable.md) | Creates a new table with a specified number of rows and columns. |
| [CreateTextPr](./Methods/CreateTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Creates the empty text properties. |
| [CreateWordArt](./Methods/CreateWordArt.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Creates a Text Art object with the parameters specified. |
| [FromJSON](./Methods/FromJSON.md) | None | Converts the specified JSON object into the Document Builder object of the corresponding type. |
| [GetDocument](./Methods/GetDocument.md) | [ApiDocument](../ApiDocument/ApiDocument.md) | Returns the main document. |
| [GetFullName](./Methods/GetFullName.md) | string | Returns the full name of the currently opened file. |
| [GetMailMergeReceptionsCount](./Methods/GetMailMergeReceptionsCount.md) | number | Returns the mail merge receptions count. |
| [GetMailMergeTemplateDocContent](./Methods/GetMailMergeTemplateDocContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the mail merge template document. |
| [LoadMailMergeData](./Methods/LoadMailMergeData.md) | boolean | Loads data for the mail merge. |
| [MailMerge](./Methods/MailMerge.md) | boolean | Starts the mail merge process. |
| [ReplaceDocumentContent](./Methods/ReplaceDocumentContent.md) | None | Replaces the main document content with another document content. |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | None | Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings. |
| [Save](./Methods/Save.md) | None | Saves changes to the specified document. |
| [attachEvent](./Methods/attachEvent.md) | None | Subscribes to the specified event and calls the callback function when the event fires. |
| [detachEvent](./Methods/detachEvent.md) | None | Unsubscribes from the specified event. |
