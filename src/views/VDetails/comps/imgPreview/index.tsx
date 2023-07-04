import React, { useState } from 'react';
import { Color } from '@/src/views/VDetails/interface';
import {
  MagnifierContainer, MagnifierPreview, MagnifierZoom,
} from 'react-image-magnifiers';
import { goodBigImgList } from '@/src/utils/fakeData';
import clsx from 'clsx';
import classes from './imgPreview.module.scss';

type Props = {
  imgList: Array<Color>,
  defaultColor: {
      name: string,
    imgSrc: string,
  },
}

const ImgPreview:React.FC<Props> = ({ imgList, defaultColor }) => {
  const [img, setImg] = useState(defaultColor);
  let defaultBig = defaultColor.imgSrc;
  goodBigImgList.forEach((bi) => {
    if (bi.name === defaultColor.name) defaultBig = bi.imgSrc;
  });
  const [bigImg, setBigImg] = useState(defaultBig);
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const { title } = e.currentTarget;
    imgList.forEach((item) => {
      if (title === item.name) {
        setImg({
          name: item.name,
          imgSrc: item.imgSrc,
        });
        goodBigImgList.forEach((bi) => {
          if (bi.name === title) setBigImg(bi.imgSrc);
        });
      }
    });
  };
  return (
    <div className={classes.root}>
      <MagnifierContainer className={classes.bigImg}>
        <MagnifierPreview
          imageSrc={img.imgSrc}
          largeImageSrc={bigImg}
        />
        <MagnifierZoom
          className={classes.imgPreview}
          style={{ height: '400px', width: '400px' }}
          imageSrc={bigImg}
        />
      </MagnifierContainer>
      <div className={classes.imgList}>
        {imgList.map((imgItem) => (
          <span
            onMouseEnter={(e) => handleClick(e)}
            role="button"
            tabIndex={0}
            title={imgItem.name}
            key={imgItem.id}
            className={clsx(classes.imgSpan, { [classes.selected]: img.name === imgItem.name })}
          >
            <img
              className={classes.smallImg}
              src={imgItem.imgSrc}
              alt={imgItem.name}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImgPreview;
