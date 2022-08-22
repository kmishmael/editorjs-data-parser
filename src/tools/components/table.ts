export const table = (params: { data: { content: string[][], withHeadings: boolean } }) => {
  let tableHeader = '';
  let tableBody = '';
  let template = '';

 
  tableHeader = getHeader(params)

  for (let i = 1; i < params.data.content.length; i++) {
    tableBody += `<div class="tc-row">`;

    params.data.content[i].forEach((body) => {
      tableBody += `<div class="tc-cell">${body}</div>`;
    });
    tableBody += `</div>`;
  }

  template = `
  <div class="ce-block">
    <div class="ce-block__content">
      <div class="cdx-block">
        <div class="tc-wrap">
          <div class="tc-table">
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

function getHeader(params: { data: { content: string[][], withHeadings: boolean } }){
  let headerBody = ``
  let header = ``

  if(params.data.withHeadings){
    params.data.content[0].forEach((header: string) => {
      header += `<div class="tc-cell">${header}</div>`;
    });

    headerBody = `  
      <div class="tc-row">
        ${header}
      </div>
      `
  }

  return headerBody;

}
