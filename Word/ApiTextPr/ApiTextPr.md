# ApiTextPr

Represents the ApiTextPr class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "textPr" | Returns a type of the ApiTextPr class. |
| [SetStyle](./Methods/SetStyle.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | The text style base method. 💡 This method is not used by itself, as it only forms the basis for the &#123;@link ApiRun#SetStyle&#125; method which sets the selected or created style to the text. |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Gets the style of the current text properties. |
| [SetBold](./Methods/SetBold.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the bold property to the text character. |
| [GetBold](./Methods/GetBold.md) | boolean | Gets the bold property from the current text properties. |
| [SetItalic](./Methods/SetItalic.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the italic property to the text character. |
| [GetItalic](./Methods/GetItalic.md) | boolean | Gets the italic property from the current text properties. |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that the contents of the run are displayed with a single horizontal line through the center of the line. |
| [GetStrikeout](./Methods/GetStrikeout.md) | boolean | Gets the strikeout property from the current text properties. |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that the contents of the run are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line). |
| [GetUnderline](./Methods/GetUnderline.md) | boolean | Gets the underline property from the current text properties. |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets all 4 font slots with the specified font family. |
| [GetFontFamily](./Methods/GetFontFamily.md) | string | Gets the font family from the current text properties. |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the font size to the characters of the current text run. |
| [GetFontSize](./Methods/GetFontSize.md) | [hps](../Enumeration/hps.md) | Gets the font size from the current text properties. |
| [SetColor](./Methods/SetColor.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text color to the current text run in the RGB format. |
| [GetColor](./Methods/GetColor.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | Gets the RGB color from the current text properties. |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies the alignment which will be applied to the contents of the run in relation to the default appearance of the run text: **"baseline"** - the characters in the current text run will be aligned by the default text baseline. **"subscript"** - the characters in the current text run will be aligned below the default text baseline. **"superscript"** - the characters in the current text run will be aligned above the default text baseline. |
| [GetVertAlign](./Methods/GetVertAlign.md) | string | Gets the vertical alignment type from the current text properties. |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies a highlighting color which is added to the text properties and applied as a background to the contents of the current run/range/paragraph. |
| [GetHighlight](./Methods/GetHighlight.md) | string | Gets the highlight property from the current text properties. |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text spacing measured in twentieths of a point. |
| [GetSpacing](./Methods/GetSpacing.md) | [twips](../Enumeration/twips.md) | Gets the text spacing from the current text properties measured in twentieths of a point. |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that the contents of the run are displayed with two horizontal lines through each character displayed on the line. |
| [GetDoubleStrikeout](./Methods/GetDoubleStrikeout.md) | boolean | Gets the double strikeout property from the current text properties. |
| [SetCaps](./Methods/SetCaps.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents. |
| [GetCaps](./Methods/GetCaps.md) | boolean | Specifies whether the text with the current text properties are capitalized. |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies that all the small letter characters in the text run are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text. |
| [GetSmallCaps](./Methods/GetSmallCaps.md) | boolean | Specifies whether the text with the current text properties are displayed capitalized two points smaller than the actual font size. |
| [SetPosition](./Methods/SetPosition.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies an amount by which text is raised or lowered for this run in relation to the default baseline of the surrounding non-positioned text. |
| [GetPosition](./Methods/GetPosition.md) | [hps](../Enumeration/hps.md) | Gets the text position from the current text properties measured in half-points (1/144 of an inch). |
| [SetLanguage](./Methods/SetLanguage.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of the text run. |
| [GetLanguage](./Methods/GetLanguage.md) | string | Gets the language from the current text properties. |
| [SetShd](./Methods/SetShd.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Specifies the shading applied to the contents of the current text run. |
| [GetShd](./Methods/GetShd.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | Gets the text shading from the current text properties. |
| [SetTextFill](./Methods/SetTextFill.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text fill to the current text run. |
| [GetTextFill](./Methods/GetTextFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Gets the text fill from the current text properties. |
| [SetOutLine](./Methods/SetOutLine.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Sets the text outline to the current text run. |
| [GetOutLine](./Methods/GetOutLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | Gets the text outline from the current text properties. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiTextPr object into the JSON object. |
