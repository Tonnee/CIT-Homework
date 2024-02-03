import React from 'react'

const Image = ({url, altText, style}) => {
  return (
      <>
          <img src={url} className={style} alt={altText} />
      </>
  );
}

export default Image
