!function(){"use strict";const e=function(e){return[].slice.call(e)};var t=document.querySelector('[role="tree"]');if(t){var r=e(document.querySelectorAll('[role="treeitem"]')),n=e(document.querySelectorAll(".toc-section-title, .toc-section-title--active")),i=function(e,t,r){for(var n=e;n;){if(n.hasAttribute(t)&&n.getAttribute(t)===r)return n;n=n.parentElement}},a=function(e){return i(e,"role","treeitem")},c=function(e){return i(e.parentElement,"role","treeitem")},u=function(t){e(t.querySelectorAll("a[href]")).map(function(e){e.removeAttribute("tabindex")})},o=function(t){e(t.querySelectorAll("a[href]")).map(function(e){e.setAttribute("tabindex","-1")})},l=function(e){e.setAttribute("aria-expanded","true"),u(e)},s=function(e){e.setAttribute("aria-expanded","false"),o(e)},f=function(e){return"true"===e.getAttribute("aria-expanded")},d=function(e){return"false"===e.getAttribute("aria-expanded")},m=function(e){return!e.hasAttribute("aria-expanded")},v=function(e){e.setAttribute("aria-selected","false")},b=function(e){return e.hasAttribute("tabindex")?e:e.querySelector("a[href]")},p=function(e){var t=b(e);t.focus(),t.setAttribute("aria-selected","true")},A=function(e){var t=e.querySelector('[role="group"]').firstElementChild;v(e),p(t)},h=function(e){var t=c(e);v(e),p(t)},E=function(e){var t=e.nextElementSibling;t||(t=e.parentElement.firstElementChild),v(e),p(t)},y=function(e){var t=e.previousElementSibling;t||(t=e.parentElement.lastElementChild),v(e),p(t)},S=function(e){window.location.href=e.querySelector("a").getAttribute("href")},g=function(e){e.classList.remove("toc-section-title--active"),e.classList.add("toc-section-title")},q=function(e){e.classList.remove("toc-section-title"),e.classList.add("toc-section-title--active")},x=function(e){var t=c(e.target),r=t.firstElementChild,n="true"===t.getAttribute("aria-expanded");n&&(s(t),g(r)),n||(l(t),q(r))},k=function(e){var t=e.which||e.keyCode,r=a(e.target);switch(t){case 32:e.preventDefault(),S(r);break;case 37:d(r)||m(r)?h(r):s(r);break;case 38:e.preventDefault(),y(r);break;case 39:f(r)?A(r):l(r);break;case 40:e.preventDefault(),E(r)}},L=function(e){var t=e.target,r=t.querySelector('[role="treeitem"]'),n=t.querySelector('[role="treeitem"][aria-selected="true"]');p(n||r)};t.addEventListener("focus",L,!1),r.map(function(e){e.addEventListener("keydown",k,!1)}),n.map(function(e){e.addEventListener("click",x,!1)})}}();