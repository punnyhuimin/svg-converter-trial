function muiSolidTemplate(variables, { tpl }) {
  
  // Change the svg container to MUI's SvgIcon
  variables.jsx.openingElement.name.name = "SvgIcon";
  variables.jsx.closingElement.name.name = "SvgIcon";

  // Add preserveAspectRatio="xMidYMid meet" to the svg container
  // variables.jsx.openingElement.attributes.push({
  //   type: "JSXAttribute",
  //   name: { type: "JSXIdentifier", name: "preserveAspectRatio" },
  //   value: { type: "StringLiteral", value: "xMidYMid meet" },
  // });

  // Append sx={{ ...sx, padding: '2px' }} to the JSXOpeningElement's attributes
  // variables.jsx.openingElement.attributes.push({
  //   type: "JSXAttribute",
  //   name: { type: "JSXIdentifier", name: "sx" },
  //   value: {
  //     type: "JSXExpressionContainer",
  //     expression: {
  //       type: "ObjectExpression",
  //       properties: [
  //         {
  //           type: "SpreadElement",
  //           argument: {
  //             type: "Identifier",
  //             name: "sx",
  //           },
  //         },
  //         {
  //           type: "ObjectProperty",
  //           key: { type: "Identifier", name: "padding" },
  //           value: { type: "StringLiteral", value: "2px" },
  //         },
  //       ],
  //     },
  //   },
  // });

  function keepViewboxAttr(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      // console.log(JSON.stringify(arr[i]['name']));
      // console.log(val);
      if (JSON.stringify(arr[i]['name']) !== val) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  }

  // Remove opening element's attributes except viewbox
  variables.jsx.openingElement.attributes = keepViewboxAttr(variables.jsx.openingElement.attributes, '{"type":\"JSXIdentifier\","name":\"viewBox\"}');

  // Append a {...props} to the opening element's attributes
  variables.jsx.openingElement.attributes.push({
    type: "JSXSpreadAttribute",
    argument: {
      type: "Identifier",
      name: "props",
    },
  });

  // console.log(variables.jsx.openingElement.attributes);
  return tpl`
// template: templates/template.ts
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const ${variables.componentName} = (props: SvgIconProps) => {
  return (
    ${variables.jsx}
  );
};
 
${variables.exports};
`;
}

module.exports = muiSolidTemplate;

// const propTypesTemplate = (
//   { imports, interfaces, componentName, props, jsx, exports },
//   { tpl },
// ) => {
//   console.log(typeof jsx.openingElement.attributes[0]);
//   return tpl`${imports}
// import PropTypes from 'prop-types';
// ${interfaces}

// function ${componentName}(${props}) {
//   return ${jsx};
// }

// ${componentName}.propTypes = {
//   title: PropTypes.string,
// };

// ${exports}
//   `
// }

// module.exports = propTypesTemplate