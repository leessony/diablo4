"use strict";var e=require("compute-scroll-into-view");const o=e=>!1===e?{block:"end",inline:"nearest"}:(e=>e===Object(e)&&0!==Object.keys(e).length)(e)?e:{block:"start",inline:"nearest"};module.exports=function(t,n){if(!t.isConnected||!(e=>{let o=e;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(t))return;if((e=>"object"==typeof e&&"function"==typeof e.behavior)(n))return n.behavior(e.compute(t,n));const r="boolean"==typeof n||null==n?void 0:n.behavior;for(const{el:i,top:c,left:l}of e.compute(t,o(n)))i.scroll({top:c,left:l,behavior:r})};