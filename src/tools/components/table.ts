export const table = (params: { data: { content: string[][], withHeadings: boolean } }) => {
  let tableHeader = '';
  let tableBody = '';
  let template = '';
  let headerClass = (params.data.withHeadings) ? 'with-heading' : '';

 
  tableHeader = (params.data.withHeadings) ? getHeader(params) : ''

  tableBody = getBody(params)

  template = `
  <div class="table">

          <table class="${headerClass}">
            ${tableHeader}
            ${tableBody}
          </table>

  </div>
  `;

  return template;
};

function getBody(params: { data: { content: string[][], withHeadings: boolean } }){
  let tableBody = ``
  let index = (params.data.withHeadings) ? 1 : 0

  for (let i = index; i < params.data.content.length; i++) {
    tableBody += `<tr>
    
    `;

    params.data.content[i].forEach((body) => {
      tableBody += `<td>${body}</td>`;
    });
    tableBody += `
    
    </tr>`;
  }

  return tableBody
}

function getHeader(params: { data: { content: string[][], withHeadings: boolean } }){
  let headerBody = ``
  let header = ``

  if(params.data.withHeadings){
    params.data.content[0].forEach((head) => {
      header += `<th>${head}</th>`;
    });

    headerBody = `  
      <tr>

        ${header}

      </tr>
      `
  }

  return headerBody;

}
