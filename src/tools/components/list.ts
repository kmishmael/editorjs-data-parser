export const list = (param: any[], style: string) => {

  let listContainer = resolveList(param, style);

  let template = `
  <div class="list">
    ${listContainer}
  </div>
  `

  return template;
};

function resolveList(param: any[], style: string){
  let styleClass = (style == 'ordered') ? 'ordered' : 'unordered';
  let listItems =  ``

  param.forEach((items: any) => {
    listItems += `<li class="list-item">${items}</li>`;
  });

  if(style == 'ordered'){
    return `
    <ol class="${styleClass}">
    ${listItems}
    </ol>
    `
  }
  
  return `
  <ul class="${styleClass}">
  ${listItems}
  </ul>
  `
}