(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"3PQu":function(e,n,t){var a=t("z01/");function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=i();if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(t,o,l):t[o]=e[o]}return t["default"]=e,n&&n.set(e,t),t}e.exports=r},iRnE:function(e,n,t){"use strict";t.r(n);var a=t("0Owb"),i=t("q1tI"),r=t.n(i),o=(t("B2uJ"),t("+su7"),t("qOys"),t("5Yjd")),l=t.n(o),c=r.a.memo((function(){var e=t("3PQu"),n=t("K+nK"),a=n(t("tJVT")),i=e(t("q1tI")),r=t("IQvw"),o=function(){var e=(0,i.useState)(!1),n=(0,a["default"])(e,2),t=n[0],o=n[1];return i["default"].createElement(i["default"].Fragment,null,i["default"].createElement(r.Button,{onClick:function(){o(!t)}},"Show Block"),i["default"].createElement(r.Transition,{in:t},i["default"].createElement("div",{style:{background:"#b8b8b8",width:"128px",height:"128px"}})))};return i["default"].createElement(o)})),u=r.a.memo((function(){var e=t("3PQu"),n=t("K+nK"),a=n(t("tJVT")),i=e(t("q1tI")),r=t("IQvw"),o=function(){var e=(0,i.useState)(!1),n=(0,a["default"])(e,2),t=n[0],o=n[1];return i["default"].createElement(i["default"].Fragment,null,i["default"].createElement(r.Button,{onClick:function(){o(!t)}},"zoom-in-top"),i["default"].createElement(r.Transition,{in:t},i["default"].createElement("div",{style:{background:"#b8b8b8",width:"128px",height:"128px"}})))};return i["default"].createElement(o)})),s=r.a.memo((function(){var e=t("3PQu"),n=t("K+nK"),a=n(t("tJVT")),i=e(t("q1tI")),r=t("IQvw"),o=function(){var e=(0,i.useState)(!1),n=(0,a["default"])(e,2),t=n[0],o=n[1];return i["default"].createElement(i["default"].Fragment,null,i["default"].createElement(r.Button,{onClick:function(){o(!t)}},"fade-in"),i["default"].createElement(r.Transition,{in:t,animationClassName:"fade-in"},i["default"].createElement("div",{style:{background:"#b8b8b8",width:"128px",height:"128px"}})))};return i["default"].createElement(o)}));n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"transition"},r.a.createElement("a",{"aria-hidden":"true",href:"#transition"},r.a.createElement("span",{className:"icon icon-link"})),"Transition"),r.a.createElement("p",null,"\u5bf9 ",r.a.createElement("a",{href:"http://reactcommunity.org/react-transition-group/",target:"_blank"},"ReactTransitionGroup",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))," \u4e2d\u7684 CSSTransition \u8fdb\u884c\u4e86\u7b80\u5355\u5305\u88c5\uff0c\u4ec5\u4e3a\u4e86\u5b9e\u73b0\u7ec4\u4ef6\u7684\u7b80\u5355\u6548\u679c\u3002\u63a8\u8350\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u76f4\u63a5\u4f7f\u7528 ReactTransitionGroup \u6216\u8005\u5176\u4ed6\u7684\u5404\u79cd\u52a8\u753b\u5e93\u3002"),r.a.createElement("p",null,"Just a simple wrapper of ",r.a.createElement("code",null,"CSSTransition")," in ",r.a.createElement("a",{href:"http://reactcommunity.org/react-transition-group/",target:"_blank"},"ReactTransitionGroup",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),", just inherited the simplest css transition effect for the components. Recommended to use ReactTransitionGroup or other various animation libraries directly in finally development."),r.a.createElement("h3",{id:"-in"},r.a.createElement("a",{"aria-hidden":"true",href:"#-in"},r.a.createElement("span",{className:"icon icon-link"})),"\u2699 in"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"[boolean]")))),r.a.createElement(l.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport { Button, Transition } from '@xinleibird/bird-ui';\n\nexport default () => {\n  const [showBlock, setShow] = useState(false);\n  return (\n    <>\n      <Button\n        onClick={() => {\n          setShow(!showBlock);\n        }}\n      >\n        Show Block\n      </Button>\n      <Transition in={showBlock}>\n        <div style={{ background: '#b8b8b8', width: '128px', height: '128px' }}></div>\n      </Transition>\n    </>\n  );\n};",jsx:"import React, { useState } from 'react';\nimport { Button, Transition } from '@xinleibird/bird-ui';\n\nexport default () => {\n  const [showBlock, setShow] = useState(false);\n  return (\n    <>\n      <Button\n        onClick={() => {\n          setShow(!showBlock);\n        }}\n      >\n        Show Block\n      </Button>\n      <Transition in={showBlock}>\n        <div\n          style={{\n            background: '#b8b8b8',\n            width: '128px',\n            height: '128px',\n          }}\n        ></div>\n      </Transition>\n    </>\n  );\n};\n"}},{dependencies:{"@xinleibird/bird-ui":"0.3.9"},files:{}}),r.a.createElement(c,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("p",null,r.a.createElement("code",null,"in")," \u7ee7\u627f\u81ea CSSTransiton \u7684\u5c5e\u6027\uff0c\u63a7\u5236\u52a8\u753b\u8fdb\u573a\u7684\u5f00\u5173\u3002"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",{id:"-animationclassname"},r.a.createElement("a",{"aria-hidden":"true",href:"#-animationclassname"},r.a.createElement("span",{className:"icon icon-link"})),"\u2699 animationClassName"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,'"zoom-in-top" | "fade-in"')))),r.a.createElement(l.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport { Button, Transition } from '@xinleibird/bird-ui';\n\nexport default () => {\n  const [showBlock, setShow] = useState(false);\n  return (\n    <>\n      <Button\n        onClick={() => {\n          setShow(!showBlock);\n        }}\n      >\n        zoom-in-top\n      </Button>\n      <Transition in={showBlock}>\n        <div style={{ background: '#b8b8b8', width: '128px', height: '128px' }}></div>\n      </Transition>\n    </>\n  );\n};",jsx:"import React, { useState } from 'react';\nimport { Button, Transition } from '@xinleibird/bird-ui';\n\nexport default () => {\n  const [showBlock, setShow] = useState(false);\n  return (\n    <>\n      <Button\n        onClick={() => {\n          setShow(!showBlock);\n        }}\n      >\n        zoom-in-top\n      </Button>\n      <Transition in={showBlock}>\n        <div\n          style={{\n            background: '#b8b8b8',\n            width: '128px',\n            height: '128px',\n          }}\n        ></div>\n      </Transition>\n    </>\n  );\n};\n"}},{dependencies:{"@xinleibird/bird-ui":"0.3.9"},files:{}}),r.a.createElement(u,null)),r.a.createElement("div",{className:"markdown"}),r.a.createElement(l.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport { Button, Transition } from '@xinleibird/bird-ui';\n\nexport default () => {\n  const [showBlock, setShow] = useState(false);\n  return (\n    <>\n      <Button\n        onClick={() => {\n          setShow(!showBlock);\n        }}\n      >\n        fade-in\n      </Button>\n      <Transition in={showBlock} animationClassName=\"fade-in\">\n        <div style={{ background: '#b8b8b8', width: '128px', height: '128px' }}></div>\n      </Transition>\n    </>\n  );\n};",jsx:"import React, { useState } from 'react';\nimport { Button, Transition } from '@xinleibird/bird-ui';\n\nexport default () => {\n  const [showBlock, setShow] = useState(false);\n  return (\n    <>\n      <Button\n        onClick={() => {\n          setShow(!showBlock);\n        }}\n      >\n        fade-in\n      </Button>\n      <Transition in={showBlock} animationClassName=\"fade-in\">\n        <div\n          style={{\n            background: '#b8b8b8',\n            width: '128px',\n            height: '128px',\n          }}\n        ></div>\n      </Transition>\n    </>\n  );\n};\n"}},{dependencies:{"@xinleibird/bird-ui":"0.3.9"},files:{}}),r.a.createElement(s,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("p",null,r.a.createElement("code",null,"animationClassName")," \u63d0\u4f9b\u4e24\u79cd\u9ed8\u8ba4\u7684\u8fdb\u573a\u52a8\u753b")))}},"z01/":function(e,n){function t(n){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t}}]);