// This example adds a math equation to the document.
var oDocument = Api.GetDocument();
oDocument.AddMathEquation("e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots = \\sum_{n\\geq 0} \\frac{x^n}{n!}", "latex");
