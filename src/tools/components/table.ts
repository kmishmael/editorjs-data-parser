export const table = (params: { data: { content: string[][], withHeadings: boolean } }) => {
  let tableHeader = '';
  let tableBody = '';
  let template = '';
  let headerClass = (params.data.withHeadings) ? 'tc-table--heading' : '';

 
  tableHeader = (params.data.withHeadings) ? getHeader(params) : ''

  tableBody = getBody(params)

  template = `
  <div class="ce-block">
    <div class="ce-block__content">
      <div class="cdx-block">
        <div class="tc-wrap">
          <div class="tc-table ${headerClass}">
            ${tableHeader}
            ${tableBody}
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  return template;
};

function getBody(params: { data: { content: string[][], withHeadings: boolean } }){
  let tableBody = ``
  let index = (params.data.withHeadings) ? 1 : 0

  for (let i = index; i < params.data.content.length; i++) {
    tableBody += `<div class="tc-row">`;

    params.data.content[i].forEach((body) => {
      tableBody += `<div class="tc-cell">${body}</div>`;
    });
    tableBody += `</div>`;
  }

  return tableBody
}

function getHeader(params: { data: { content: string[][], withHeadings: boolean } }){
  let headerBody = ``
  let header = ``

  if(params.data.withHeadings){
    params.data.content[0].forEach((head) => {
      header += `<div class="tc-cell" heading="Heading">${head}</div>`;
    });

    headerBody = `  
      <div class="tc-row">
        ${header}
      </div>
      `
  }

  return headerBody;

}
