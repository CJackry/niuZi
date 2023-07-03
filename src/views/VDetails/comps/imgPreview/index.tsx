import React, { useState } from 'react';
import { Color } from '@/src/views/VDetails/interface';
import {
  MagnifierContainer, MagnifierPreview, MagnifierZoom,
} from 'react-image-magnifiers';
import classes from './imgPreview.module.scss';

type Props = {
    imgList: Array<Color>,
}

const ImgPreview:React.FC<Props> = ({ imgList }) => {
  const [imgSrc, setImgSrc] = useState({
    name: imgList[0].name,
    imgSrc: imgList[0].imgSrc,
  });
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    imgList.forEach((item) => {
      if (e.currentTarget.title === item.name) {
        setImgSrc({
          name: item.name,
          imgSrc: item.imgSrc,
        });
      }
    });
  };
  return (
    <div className={classes.root}>
      <MagnifierContainer className={classes.bigImg}>
        <div className={classes.bigImg}>
          <MagnifierPreview imageSrc={imgSrc.imgSrc} />
        </div>
        <MagnifierZoom
          className={classes.imgPreview}
          style={{ height: '200px', width: '200px' }}
          imageSrc={imgSrc.imgSrc}
        />
        {/* <SideBySideMagnifier */}
        {/*  imageSrc={imgSrc.imgSrc} */}
        {/* /> */}
      </MagnifierContainer>

      <div className={classes.imgList}>
        {imgList.map((img) => (
          <span
            onMouseEnter={(e) => handleClick(e)}
            role="button"
            tabIndex={0}
            title={img.name}
            key={img.id}
          >
            <img className={classes.smallImg} src={img.imgSrc} alt={img.name} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImgPreview;
