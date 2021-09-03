module.exports = (context) => {
  return {
    CallExpression: (node) => {
      let message = null;
      switch (node.callee.type) {
        case "Literal":
        case "ArrayExpression":
        case "ObjectExpression":
        case "TemplateLiteral":
          message = "This is not a function.";
          break;
        case "ClassExpression":
          message = "Class constructors cannot be invoked without 'new'.";
          break;
        default:
          break;
      }
      if (message) {
        context.report({ node, message });
      }
    },
  };
};
module.exports.schema = [];
