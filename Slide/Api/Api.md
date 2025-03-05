# Api

Represents the Api class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
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
| [GetPresentation](./Methods/GetPresentation.md) | [ApiPresentation](../ApiPresentation/ApiPresentation.md) | Returns the main presentation. |
| [CreateMaster](./Methods/CreateMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) | Creates a new slide master. |
| [CreateLayout](./Methods/CreateLayout.md) | [ApiLayout](../ApiLayout/ApiLayout.md) | Creates a new slide layout and adds it to the slide master if it is specified. |
| [CreatePlaceholder](./Methods/CreatePlaceholder.md) | [ApiPlaceholder](../ApiPlaceholder/ApiPlaceholder.md) | Creates a new placeholder. |
| [CreateTheme](./Methods/CreateTheme.md) | [ApiTheme](../ApiTheme/ApiTheme.md) \| null | Creates a new presentation theme. |
| [CreateThemeColorScheme](./Methods/CreateThemeColorScheme.md) | [ApiThemeColorScheme](../ApiThemeColorScheme/ApiThemeColorScheme.md) | Creates a new theme color scheme. |
| [CreateThemeFormatScheme](./Methods/CreateThemeFormatScheme.md) | [ApiThemeFormatScheme](../ApiThemeFormatScheme/ApiThemeFormatScheme.md) | Creates a new theme format scheme. |
| [CreateThemeFontScheme](./Methods/CreateThemeFontScheme.md) | [ApiThemeFontScheme](../ApiThemeFontScheme/ApiThemeFontScheme.md) | Creates a new theme font scheme. |
| [CreateSlide](./Methods/CreateSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) | Creates a new slide. |
| [CreateImage](./Methods/CreateImage.md) | [ApiImage](../ApiImage/ApiImage.md) | Creates an image with the parameters specified. |
| [CreateOleObject](./Methods/CreateOleObject.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md) | Creates an OLE object with the parameters specified. |
| [CreateShape](./Methods/CreateShape.md) | [ApiShape](../ApiShape/ApiShape.md) | Creates a shape with the parameters specified. |
| [CreateChart](./Methods/CreateChart.md) | [ApiChart](../ApiChart/ApiChart.md) | Creates a chart with the parameters specified. |
| [CreateGroup](./Methods/CreateGroup.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | Creates a group of drawings. |
| [CreateTable](./Methods/CreateTable.md) | [ApiTable](../ApiTable/ApiTable.md) | Creates a table. |
| [CreateParagraph](./Methods/CreateParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Creates a new paragraph. |
| [Save](./Methods/Save.md) | None | Saves changes to the specified document. |
| [CreateWordArt](./Methods/CreateWordArt.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Creates a Text Art object with the parameters specified. |
| [FromJSON](./Methods/FromJSON.md) | None | Converts the specified JSON object into the Document Builder object of the corresponding type. |
| [GetSelection](./Methods/GetSelection.md) | [ApiSelection](../ApiSelection/ApiSelection.md) | Returns the selection from the current presentation. |
| [attachEvent](./Methods/attachEvent.md) | None | Subscribes to the specified event and calls the callback function when the event fires. |
| [detachEvent](./Methods/detachEvent.md) | None | Unsubscribes from the specified event. |
