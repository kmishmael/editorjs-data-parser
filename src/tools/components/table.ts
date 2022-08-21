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
    <div class='tc-wrap'>
        <div class="tc-table">
            ${tableHeader}
            ${tableBody}
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

/*
  let tableHeader = '';
  let tableBody = '';
  let template = '';

 
  tableHeader = getHeader(params)

  for (let i = 1; i < params.data.content.length; i++) {
    tableBody += `<tr>`;

    params.data.content[i].forEach((body) => {
      tableBody += `<td>${body}</td>`;
    });
    tableBody += `</tr>`;
  }

  template = `
    <table class='ejs-table'>
    ${tableHeader}
        <tbody class="ejs-table__body">
            ${tableBody}
        </tbody>
    </table>
  `;

  return template;
  */