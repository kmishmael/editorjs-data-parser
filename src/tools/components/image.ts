interface ImgTypes {
  stretched: boolean;
  withBorder: boolean;
  withBackground: boolean;
  file: {
    url: string;
  };
  caption: string;
}

export const image = (param: ImgTypes) => {
  const imgParams = `${param.stretched ? 'image-tool--stretched' : ''} ${
    param.withBorder ? 'image-tool--withBorder' : ''
  } ${param.withBackground ? 'image-tool--withBackground' : ''}`;

  return `
  <div class="image-block">

    <div class="image">
      <img src="${param.file.url}" alt="${param.caption}">
    </div>

    <div class="caption">
      <p>${param.caption}</p>
    </div>           
    
  </div>
 `;
};
