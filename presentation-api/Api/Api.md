# Api

Represents the Api class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [CreateBlipFill](./Methods/CreateBlipFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a blip fill to apply to the object using the selected image as the object background. |
| [CreateBullet](./Methods/CreateBullet.md) | [ApiBullet](../ApiBullet/ApiBullet.md) | Creates a bullet for a paragraph with the character or symbol specified with the sSymbol parameter. |
| [CreateChart](./Methods/CreateChart.md) | [ApiChart](../ApiChart/ApiChart.md) | Creates a chart with the parameters specified. |
| [CreateGradientStop](./Methods/CreateGradientStop.md) | [ApiGradientStop](../ApiGradientStop/ApiGradientStop.md) | Creates a gradient stop used for different types of gradients. |
| [CreateGroup](./Methods/CreateGroup.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | Creates a group of drawings. |
| [CreateImage](./Methods/CreateImage.md) | [ApiImage](../ApiImage/ApiImage.md) | Creates an image with the parameters specified. |
| [CreateLayout](./Methods/CreateLayout.md) | [ApiLayout](../ApiLayout/ApiLayout.md) | Creates a new slide layout and adds it to the slide master if it is specified. |
| [CreateLinearGradientFill](./Methods/CreateLinearGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a linear gradient fill to apply to the object using the selected linear gradient as the object background. |
| [CreateMaster](./Methods/CreateMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) | Creates a new slide master. |
| [CreateNoFill](./Methods/CreateNoFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates no fill and removes the fill from the element. |
| [CreateNumbering](./Methods/CreateNumbering.md) | [ApiBullet](../ApiBullet/ApiBullet.md) | Creates a bullet for a paragraph with the numbering character or symbol specified with the numType parameter. |
| [CreateOleObject](./Methods/CreateOleObject.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md) | Creates an OLE object with the parameters specified. |
| [CreateParagraph](./Methods/CreateParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Creates a new paragraph. |
| [CreatePatternFill](./Methods/CreatePatternFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a pattern fill to apply to the object using the selected pattern as the object background. |
| [CreatePlaceholder](./Methods/CreatePlaceholder.md) | [ApiPlaceholder](../ApiPlaceholder/ApiPlaceholder.md) | Creates a new placeholder. |
| [CreatePresetColor](./Methods/CreatePresetColor.md) | [ApiPresetColor](../ApiPresetColor/ApiPresetColor.md) | Creates a color selecting it from one of the available color presets. |
| [CreateRGBColor](./Methods/CreateRGBColor.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | Creates an RGB color setting the appropriate values for the red, green and blue color components. |
| [CreateRadialGradientFill](./Methods/CreateRadialGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a radial gradient fill to apply to the object using the selected radial gradient as the object background. |
| [CreateRun](./Methods/CreateRun.md) | [ApiRun](../ApiRun/ApiRun.md) | Creates a new smaller text block to be inserted to the current paragraph or table. |
| [CreateSchemeColor](./Methods/CreateSchemeColor.md) | [ApiSchemeColor](../ApiSchemeColor/ApiSchemeColor.md) | Creates a complex color scheme selecting from one of the available schemes. |
| [CreateShape](./Methods/CreateShape.md) | [ApiShape](../ApiShape/ApiShape.md) | Creates a shape with the parameters specified. |
| [CreateSlide](./Methods/CreateSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) | Creates a new slide. |
| [CreateSolidFill](./Methods/CreateSolidFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a solid fill to apply to the object using a selected solid color as the object background. |
| [CreateStroke](./Methods/CreateStroke.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | Creates a stroke adding shadows to the element. |
| [CreateTable](./Methods/CreateTable.md) | [ApiTable](../ApiTable/ApiTable.md) | Creates a table. |
| [CreateTextPr](./Methods/CreateTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Creates the empty text properties. |
| [CreateTheme](./Methods/CreateTheme.md) | [ApiTheme](../ApiTheme/ApiTheme.md) \| null | Creates a new presentation theme. |
| [CreateThemeColorScheme](./Methods/CreateThemeColorScheme.md) | [ApiThemeColorScheme](../ApiThemeColorScheme/ApiThemeColorScheme.md) | Creates a new theme color scheme. |
| [CreateThemeFontScheme](./Methods/CreateThemeFontScheme.md) | [ApiThemeFontScheme](../ApiThemeFontScheme/ApiThemeFontScheme.md) | Creates a new theme font scheme. |
| [CreateThemeFormatScheme](./Methods/CreateThemeFormatScheme.md) | [ApiThemeFormatScheme](../ApiThemeFormatScheme/ApiThemeFormatScheme.md) | Creates a new theme format scheme. |
| [CreateWordArt](./Methods/CreateWordArt.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Creates a Text Art object with the parameters specified. |
| [FromJSON](./Methods/FromJSON.md) | None | Converts the specified JSON object into the Document Builder object of the corresponding type. |
| [GetFullName](./Methods/GetFullName.md) | string | Returns the full name of the currently opened file. |
| [GetPresentation](./Methods/GetPresentation.md) | [ApiPresentation](../ApiPresentation/ApiPresentation.md) | Returns the main presentation. |
| [GetSelection](./Methods/GetSelection.md) | [ApiSelection](../ApiSelection/ApiSelection.md) | Returns the selection from the current presentation. |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | boolean | Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings. |
| [Save](./Methods/Save.md) | None | Saves changes to the specified document. |
| [attachEvent](./Methods/attachEvent.md) | None | Subscribes to the specified event and calls the callback function when the event fires. |
| [detachEvent](./Methods/detachEvent.md) | None | Unsubscribes from the specified event. |
