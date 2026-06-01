// Add math equations in LaTeX, Unicode, and MathML formats in a document.

// How do I insert a mathematical formula into a document?

// Represent the same or different expressions using three standard equation formats in a document.

let doc = Api.GetDocument();
doc.AddMathEquation("e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots = \\sum_{n\\geq 0} \\frac{x^n}{n!}", "latex");

let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
doc.AddMathEquation("e^(iπ) + 1 = 0", "unicode");

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
let xml = `<math>
		<mrow>
			<msup>
				<mi>a</mi>
				<mn>2</mn>
			</msup>
			<mo>+</mo>
			<msup>
				<mi>b</mi>
				<mn>2</mn>
			</msup>
			<mo>=</mo>
			<msup>
				<mi>c</mi>
				<mn>2</mn>
			</msup>
		</mrow>
</math>`;
doc.AddMathEquation(xml, "mathml");