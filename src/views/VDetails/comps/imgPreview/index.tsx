import React, { useState } from 'react';
import { Color } from '@/src/views/VDetails/interface';
import {
  MagnifierContainer, MagnifierPreview, MagnifierZoom,
} from 'react-image-magnifiers';
import { goodBigImgList } from '@/src/utils/fakeData';
import classes from './imgPreview.module.scss';

type Props = {
    imgList: Array<Color>,
}

const ImgPreview:React.FC<Props> = ({ imgList }) => {
  const [img, setImg] = useState({
    name: imgList[0].name,
    imgSrc: imgList[0].imgSrc,
  });
  const [bigImg, setBigImg] = useState(goodBigImgList[0].imgSrc);
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
          >
            <img className={classes.smallImg} src={imgItem.imgSrc} alt={imgItem.name} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImgPreview;
