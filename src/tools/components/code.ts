export const code = (param: { data: { code: any } }) => {
  return `<pre class="code">${param.data.code}</pre>`;
};
