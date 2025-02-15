# watermark_on_draw

An object containing the watermark properties.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| transparent | float | The watermark transparency degree. |
| type | string | The &#123;@link /docbuilder/global#ShapeType shape type&#125; which specifies the preset shape geometry for the current watermark. |
| width | number | The watermark width measured in millimeters. |
| height | number | The watermark height measured in millimeters. |
| rotate | number | The watermark rotation angle measured in degrees. |
| margins | number[] | The text margins measured in millimeters in the watermark shape. |
| fill | number[] \| string | The watermark fill color in the RGB format, or the URL to image (base64 support: data:image/png;...). The empty array [] means that the watermark has no fill. |
| stroke-width | number | The watermark stroke width measured in millimeters. |
| stroke | number[] | The watermark stroke color in the RGB format. The empty array [] means that the watermark stroke has no fill. |
| align | number | The vertical text align in the watermark shape: **0** - bottom, **1** - center, **4** - top. |
| paragraphs | object[] | The array with paragraphs from the current watermark with their properties. |
| paragraphs.align | number | The horizontal text align in the current paragraph: **0** - right, **1** - left, **2** - center, **3** - justify. |
| paragraphs.fill | number[] | The paragraph highlight in the RGB format. The empty array [] means that the paragraph is not highlighted. |
| paragraphs.linespacing | number | The text linespacing in the current paragraph. |
| paragraphs.runs | object[] | The array with runs from the current paragraph with their properties. |
| paragraphs.runs.text | string | The run text. |
| paragraphs.runs.fill | number[] | The text highlight in the RGB format. The empty array [] means that the text is not highlighted. |
| paragraphs.runs.font-family | string | The text font family. |
| paragraphs.runs.font-size | string | The text font size measured in points (pt). |
| paragraphs.runs.bold | boolean | Defines if the current text is displayed bold or not. |
| paragraphs.runs.italic | boolean | Defines if the current text is displayed italic or not. |
| paragraphs.runs.strikeout | boolean | Defines if the current text is displayed struck through or not. |
| paragraphs.runs.underline | boolean | Defines if the current text is displayed underlined or not. |
## Type

Object

