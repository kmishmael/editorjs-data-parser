export const list = (param: any[], style: string) => {

  let listContainer = resolveList(param, style);

  let template = `
  <div class="ce-block">
    <div class="ce-block__block">
      ${listContainer}
    </div>
  </div>
  `

  return template;
};

function resolveList(param: any[], style: string){
  let styleClass = (style == 'ordered') ? 'cdx-list--ordered' : 'cdx-list--unordered';
  let listItems =  ``

  param.forEach((items: any) => {
    listItems += `<li class="cdx-list__item">${items}</li>`;
  });

  if(style == 'ordered'){
    return `
    <ol class="cdx-block cdx-list ${styleClass}">
    ${listItems}
    </ol>
    `
  }
  
  return `
  <ul class="cdx-block cdx-list ${styleClass}">
  ${listItems}
  </ul>
  `
}