const content = document.querySelector(".content");
let contentSpan = document.querySelector('span');
let contentWidth = content.clientWidth;
contentSpan.innerText = contentWidth + 'px';

function writeWidth(node, nodeText) {
  nodeText.innerText = `${node.clientWidth}px`; 
}

window.addEventListener('resize', () => {writeWidth(content, contentSpan)}, true);