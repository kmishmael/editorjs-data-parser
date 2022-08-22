export const header = (param: string, type: number) => {
  let headerValue = '';
  switch (type) {
    case 1:
      headerValue += `
      <div class="ce-block">
        <div class="ce-block__content">
          <h1 class="ce-header">${param}</h1>
        </div>
      </div>
      `;
      break;
    case 2:
      headerValue += `
      <div class="ce-block">
        <div class="ce-block__content">
          <h2 class="ce-header">${param}</h2>
        </div>
      </div>
      `;
      break;
    case 3:
      headerValue += `
      <div class="ce-block">
        <div class="ce-block__content">
          <h3 class="ce-header">${param}</h3>
        </div>
      </div>
      `;
      break;
    case 4:
      headerValue += `
      <div class="ce-block">
        <div class="ce-block__content">
          <h4 class="ce-header">${param}</h4>
        </div>
      </div>
      `;
      break;
    case 5:
      headerValue += `
      <div class="ce-block">
        <div class="ce-block__content">
          <h5 class="ce-header">${param}</h5>
        </div>
      </div>
      `;
      break;
    case 6:
      headerValue += `
      <div class="ce-block">
        <div class="ce-block__content">
          <h6 class="ce-header">${param}</h6>
        </div>
      </div>
      `;
      break;
    default:
      headerValue += '';
  }
  return headerValue;
};
