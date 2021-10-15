export const header = (param: string, type: number) => {
  let headerValue = '';
  switch (type) {
    case 1:
      headerValue += `<h1 class="ejs-header ejs-h1">${param}</h1>`;
      break;
    case 2:
      headerValue += `<h2 class="ejs-header ejs-h2">${param}</h2>`;
      break;
    case 3:
      headerValue += `<h3 class="ejs-header ejs-h3">${param}</h3>`;
      break;
    case 4:
      headerValue += `<h4 class="ejs-header ejs-h4">${param}</h4>`;
      break;
    case 5:
      headerValue += `<h5 class="ejs-header ejs-h5">${param}</h5>`;
      break;
    case 6:
      headerValue += `<h6 class="ejs-header ejs-h6">${param}</h6>`;
      break;
    default:
      headerValue += '';
  }
  return headerValue;
};
