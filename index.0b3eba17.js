function r(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}document.addEventListener("DOMContentLoaded",function(){var e=function(e,n){for(var o,a=Array.from(e.querySelectorAll("tbody > tr")),l=a.every(function(r){return!isNaN(parseFloat(r.children[n].innerText.replace("$","").replace(",","")))}),i=a.sort(function(r,e){var t=r.children[n].innerText,o=e.children[n].innerText;return l?parseFloat(t.replace("$","").replace(",",""))-parseFloat(o.replace("$","").replace(",","")):t.localeCompare(o)});t.querySelector("tbody").firstChild;)t.querySelector("tbody").removeChild(t.querySelector("tbody").firstChild);(o=t.querySelector("tbody")).append.apply(o,function(e){if(Array.isArray(e))return r(e)}(i)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(i)||function(e,t){if(e){if("string"==typeof e)return r(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,void 0)}}(i)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())},t=document.querySelector("table");t.querySelectorAll("th").forEach(function(r,n){r.addEventListener("click",function(){e(t,n)})})});
//# sourceMappingURL=index.0b3eba17.js.map
