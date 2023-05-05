import React from 'react';
import { Color } from '@/src/views/VDetails/interface';
import classes from './imgPreview.module.scss';

type Props = {
    imgList: Array<Color>,
}

const ImgPreview:React.FC<Props> = ({ imgList }) => (
  <div className={classes.root} />
);

export default ImgPreview;