import React, { useRef, useState } from 'react';
import Link from 'next/link';
import GoodLim from '@/src/views/VCart/comps/goodLim';
import NumChange from '@/src/components/numChange';
import { useCartAction } from '@/src/stores/cartContext';
import { CartAttr } from '@/src/views/VDetails/interface';
import { useUserContext } from '@/src/stores/context';
import classes from './cartItem.module.scss';

type Props = {
  cartInfo: CartAttr,
  isChecked: boolean,
  onChange?: (newCart: CartAttr)=>void,
}

const CartItem:React.FC<Props> = (props) => {
  const { cartInfo, onChange, isChecked } = props;
  const [totalPrice, setTotalPrice] = useState<number>(cartInfo.price * cartInfo.amount);
  const cartCheck = useRef<HTMLInputElement>(null);
  const { handleCheck, handleNum } = useCartAction();
  const { store: { name } } = useUserContext();
  const handleNumChange = async (num: number) => {
    const newCart:CartAttr = { ...cartInfo, amount: num };
    await handleNum(cartInfo.id, num, name || '');
    setTotalPrice(num * cartInfo.price);
    if (onChange) {
      onChange(newCart);
    }
  };
  const handleCheckChange = async () => {
    const check = cartCheck.current?.checked || false;
    const newCart:CartAttr = { ...cartInfo, isChecked: check };
    await handleCheck(cartInfo.id, check, name || '');
    if (onChange) {
      onChange(newCart);
    }
  };

  return (
    <div className={classes.root} style={cartInfo.isChecked ? { background: '#fff4e8' } : {}}>
      <input
        className={classes.checkOpt}
        type="checkbox"
        checked={isChecked || false}
        ref={cartCheck}
        onChange={handleCheckChange}
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
          <span>{cartInfo.color}</span>
          <span>{cartInfo.version}</span>
        </div>
        <div className={classes.goodPrice}>
          <span className={classes.goodPriceCount}>{`￥${cartInfo.price}`}</span>
          <GoodLim isLimit isReduce reducePrice={800} />
        </div>
        <div className={classes.quantity}>
          <NumChange type="center" onChange={handleNumChange} defaultValue={cartInfo.amount} />
          <span className={classes.isEnough}>有货</span>
        </div>
        <strong className={classes.sum}>{totalPrice.toFixed(2)}</strong>
        <div className={classes.options}>
          <Link href="https://jd.com">删除</Link>
          <Link href="https://jd.com">移入关注</Link>
        </div>
      </div>
      <div className={classes.gifts}>
        {cartInfo.gifts ? cartInfo.gifts.map((gift) => (
          <div className={classes.giftInfo} key={gift.id}>
            <Link href="https://jd.com" className={classes.giftTit}>{`【赠品】${gift.name}`}</Link>
            <span className={classes.giftNum}>X1</span>
            <Link href="https://jd.com" className={classes.priceView}>查看价格</Link>
          </div>
        )) : <div />}
      </div>
    </div>
  );
};

export default CartItem;
