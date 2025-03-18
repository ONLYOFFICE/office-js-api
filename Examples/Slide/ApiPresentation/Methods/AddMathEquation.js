// This example adds a math equation to the document.

const equation = "e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots = \\sum_{n\\geq 0} \\frac{x^n}{n!}";
const presentation = Api.GetPresentation();
presentation.AddMathEquation(equation, "latex");