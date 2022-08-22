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
  <div class="ce-block">
    <div class="ce-block__content">
      <div class="cdx-block image-tool image-tool--filled ${imgParams}">
        <div class="image-tool__image">
          <div class="image-tool__image-preloader">
            <img class="image-tool__image-picture" src="${param.file.url}" alt="${param.caption}">
          </div>
        </div>
      </div>
    </div>
  </div>
 `;
};
