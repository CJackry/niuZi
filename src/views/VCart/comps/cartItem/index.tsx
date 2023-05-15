import React, { useState } from 'react';
import { CartInfo } from '@/src/views/VCart/interface';
import Link from 'next/link';
import GoodLim from '@/src/views/VCart/comps/goodLim';
import NumChange from '@/src/components/numChange';
import classes from './cartItem.module.scss';

type Props = {
  cartInfo: CartInfo,
  isChecked?: boolean,
  onChange: (total: number, check: boolean, num: number)=>void,
}

const CartItem:React.FC<Props> = (props) => {
  const { cartInfo, isChecked, onChange } = props;
  const [totalPrice, setTotalPrice] = useState<number>(Number(cartInfo.price) * cartInfo.amount);
  const [checked, setChecked] = useState(isChecked || false);
  const handleNumChange = (num:number) => {
    const newTotal = Number(cartInfo.price) * num;
    const diff = newTotal - totalPrice;
    setTotalPrice(newTotal);
    onChange(diff, true, num);
  };
  const handleCheckChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const check = e.target.checked;
    const num = totalPrice / Number(cartInfo.price);
    setChecked(check);
    onChange(totalPrice, check, num);
  };

  return (
    <div className={classes.root} style={checked ? { background: '#fff4e8' } : {}}>
      <input
        className={classes.checkOpt}
        type="checkbox"
        checked={checked || false}
        onChange={(e) => { handleCheckChange(e); }}
      />
      <div className={classes.good}>
        <div className={classes.goodCell1}>
          <a href="https://jd.com" className={classes.goodImg}>
            <img src={cartInfo.imgSrc} alt={cartInfo.title} />
          </a>
          <div className={classes.goodIntro}>
            <span className={classes.goodTit}>{cartInfo.title}</span>
            <span className={classes.goodServer}>选服务</span>
          </div>
        </div>
        <div className={classes.goodAttrs}>
          {cartInfo.attrs.map((attr) => (
            <span key={attr.id}>{attr.name}</span>
          ))}
        </div>
        <div className={classes.goodPrice}>
          <span className={classes.goodPriceCount}>{`￥${cartInfo.price}`}</span>
          <GoodLim isLimit isReduce reducePrice={800} />
        </div>
        <div className={classes.quantity}>
          <NumChange type="center" onChange={handleNumChange} defaultValue={1} />
          <span className={classes.isEnough}>有货</span>
        </div>
        <strong className={classes.sum}>{totalPrice.toFixed(2)}</strong>
        <div className={classes.options}>
          <Link href="https://jd.com">删除</Link>
          <Link href="https://jd.com">移入关注</Link>
        </div>
      </div>
      <div className={classes.gifts}>
        {cartInfo.gifts.map((gift) => (
          <div className={classes.giftInfo} key={gift.id}>
            <Link href="https://jd.com" className={classes.giftTit}>{`【赠品】${gift.name}`}</Link>
            <span className={classes.giftNum}>X1</span>
            <Link href="https://jd.com" className={classes.priceView}>查看价格</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
