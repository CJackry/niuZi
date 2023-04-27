import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import global from '@/styles/global.module.scss';
import { nanoid } from 'nanoid';
import type { Phone } from '@/src/views/VSearch/interface';
import { useWhyDidYouUpdate } from 'ahooks';
import Category from '@/src/views/VSearch/comps/category';
import AttrFilter from '@/src/views/VSearch/comps/attrFilter';
import ResultItem from '@/src/views/VSearch/comps/resultItem';
import NzPagination from '@/src/components/NzPagination';
import { getPhone } from '@/src/views/VSearch/service';
import classes from './VSearch.module.scss';

const PAGE_SIZE = 10;

const result = {
  code: 200,
  data: {
    records: [
      {
        title: 'vivo iQOO Z7 8GB+256GB 深空黑 120W超快闪充 等效5000mAh强续航 6400万像素 OIS光学防抖 护眼竞速屏5G',
        price: '1799.00',
        color: [{
          name: '深空黑',
          img_link: 'https://img10.360buyimg.com/n7/jfs/t1/194524/22/33488/56534/6432833cF2f4847cd/3f8c34ef084e9d35.jpg',
        }],
        commits: '1万+',
        shop: { name: 'iQOO京东自营官方旗舰店', link: 'https://mall.jd.com/index-1000310642.html?from=pc' },
      }, {
        title: '京品手机\nOPPO 一加 Ace 竞速版 8GB+256GB竞技灰享OPPO官方售后 天玑8100-MAX 120Hz变速电竞直屏 游戏稳帧引擎5G',
        price: '1589.00',
        color: [{
          name: '竞技灰',
          img_link: 'https://img11.360buyimg.com/n7/jfs/t1/202048/5/33253/82749/642e3cd7F685a425c/942ca8d1c9658a80.jpg',
        }, {
          name: '光速蓝',
          img_link: 'https://img11.360buyimg.com/n7/jfs/t1/76490/7/25443/75390/642e3d0bF4d12ddc5/444cd70ce1dea2f5.jpg',
        }],
        commits: '20万+',
        shop: { name: '一加手机京东自营官方旗舰店', link: 'https://mall.jd.com/index-1000001947.html?from=pc' },
      }, {
        title: '荣耀Play7T 6000mAh 长续航 8.27mm轻薄机身 6.74英寸高刷护眼屏 5G手机 8GB+128GB 钛空银',
        price: '1099.00',
        color: [{
          name: '钛空银',
          img_link: 'https://img10.360buyimg.com/n7/jfs/t1/166752/19/33589/63142/6433c437F1a68c528/b34f68bb8f79addc.jpg',
        }, {
          name: '幻夜黑',
          img_link: 'https://img12.360buyimg.com/n7/jfs/t1/46871/34/22938/27387/642168c0Fba9188bc/739f2f791a5624d3.jpg',
        }, {
          name: '魅海蓝',
          img_link: 'https://img12.360buyimg.com/n7/jfs/t1/152680/25/21950/34392/64216959F435acd42/2a7b82567f83f040.jpg',
        }],
        commits: '2000+',
        shop: { name: '荣耀京东自营旗舰店', link: 'https://mall.jd.com/index-1000000904.html?from=pc' },
      }, {
        title: '华为畅享 50z 5000万高清AI三摄 5000mAh超能续航 128GB 宝石蓝 大内存鸿蒙智能',
        price: '1049.00',
        color: [{
          name: '宝石蓝',
          img_link: 'https://img12.360buyimg.com/n7/jfs/t1/193805/6/34069/82572/6433f370Fa876ac9e/3f7910779dc8e156.jpg',
        }, {
          name: '幻夜黑',
          img_link: 'https://img14.360buyimg.com/n7/jfs/t1/178400/37/32251/90729/6433f396F3bac97ee/959c76d726894b6d.jpg',
        }, {
          name: '薄荷绿',
          img_link: 'https://img10.360buyimg.com/n7/jfs/t1/209716/11/32529/67774/6433f3baFb1f08a2d/243c2411b7e8b895.jpg',
        }],
        commits: '去看二手',
        shop: { name: '华为京东自营官方旗舰店', link: 'https://mall.jd.com/index-1000004259.html?from=pc' },
      }, {
        title: '魅族 20 12GB+256GB 先锋灰 第二代骁龙8旗舰芯片 144Hz电竞直屏 支持67W快充 超薄机身设计 5G',
        price: '3399.00',
        color: [{
          name: '先锋灰',
          img_link: 'https://img14.360buyimg.com/n7/jfs/t1/175023/3/32977/58248/6433da50Fa94a780a/87a35d0d44bdc5c9.jpg',
        }, {
          name: '定胜青',
          img_link: 'https://img14.360buyimg.com/n7/jfs/t1/181055/40/35092/57861/6433da5dFb4b17e96/edc20f81c826356e.jpg',
        }, {
          name: '热爱粉',
          img_link: 'https://img13.360buyimg.com/n7/jfs/t1/125370/6/32528/59477/6433da5dF23d8f554/1a75ebf9576cbf62.jpg',
        }],
        commits: '1万+',
        shop: { name: '魅族京东自营旗舰店', link: 'https://mall.jd.com/index-1000001952.html?from=pc' },
      }, {
        title: 'OPPO Find X6 Pro 16GB+512GB 大漠银月 超光影三主摄 哈苏影像 100W闪充 第二代骁龙8旗舰芯片 5G拍照',
        price: '6999.00',
        color: [{
          name: '大漠银月',
          img_link: 'https://img11.360buyimg.com/n7/jfs/t1/146596/7/36017/62427/6433eeb2F47f11a18/72fec7e7f0b95944.jpg',
        }, {
          name: '飞泉绿',
          img_link: 'https://img14.360buyimg.com/n7/jfs/t1/149443/4/35659/51994/6433eec3Fb66b2bb4/c82cdcbee6020cd6.jpg',
        }, {
          name: '云墨黑',
          img_link: 'https://img10.360buyimg.com/n7/jfs/t1/138285/28/29918/48044/6433eed5Fbd712301/cde57321e1f7c18a.jpg',
        }],
        commits: '1万+',
        shop: { name: 'OPPO京东自营官方旗舰店', link: 'https://mall.jd.com/index-1000004065.html?from=pc' },
      }, {
        title: '新款14promax灵动岛大屏智能手机256g可用5G卡4g全网通电竞游戏长续航学生机安卓超薄便宜价 紫色【8+128GB】',
        price: '599.00',
        color: [{ name: '紫色【8+128GB】', img_link: null }, {
          name: '黑色【8+128GB】',
          img_link: null,
        }, { name: '紫色【8+256GB】', img_link: null }, { name: '黑色【8+256GB】', img_link: null }, {
          name: '白色【8+256GB】',
          img_link: null,
        }, { name: '白色【8+128GB】', img_link: null }],
        commits: '1万+',
        shop: { name: '魅紫旗舰店', link: 'https://mall.jd.com/index-12332077.html?from=pc' },
      }, {
        title: '荣耀Magic5 荣耀鹰眼相机 第二代骁龙8旗舰芯片 5100mAh电池 5G手机 电商专供 8GB+256GB 亮黑色',
        price: '3999.00',
        color: [{ name: '亮黑色', img_link: null }, { name: '勃朗蓝', img_link: null }, {
          name: '苔原绿',
          img_link: null,
        }, { name: '珊瑚紫', img_link: null }, { name: '燃橙色（素皮）', img_link: null }],
        commits: '2万+',
        shop: { name: '荣耀京东自营旗舰店', link: 'https://mall.jd.com/index-1000000904.html?from=pc' },
      }, {
        title: '爱心东东\n新款星盖世X13Pro真八核超薄智能手机可用5G移动联通电信卡4g全网通百元便宜学生智能备用老人机 尊贵黑【8+256GB】',
        price: '799.00',
        color: [{ name: '尊贵黑【8+256GB】', img_link: null }, {
          name: '晴川蓝【8+256GB】',
          img_link: null,
        }, { name: '晴川蓝【8+128GB】', img_link: null }, {
          name: '尊贵黑【8+128GB】',
          img_link: null,
        }, { name: 'P50尊贵黑【8+128GB】', img_link: null }],
        commits: '5000+',
        shop: { name: '星盖世手机官方旗舰店', link: 'https://mall.jd.com/index-12371917.html?from=pc' },
      }, {
        title: 'HUAWEI Mate 50 直屏旗舰 超光变XMAGE影像 北斗卫星消息 低电量应急模式 128GB冰霜银华为鸿蒙',
        price: '4799.00',
        color: [{ name: '冰霜银', img_link: null }, { name: '曜金黑', img_link: null }, {
          name: '流光紫',
          img_link: null,
        }, { name: '昆仑破晓', img_link: null }, { name: '昆仑霞光', img_link: null }, {
          name: '曜金黑（昆仑玻璃）',
          img_link: null,
        }, { name: '冰霜银（昆仑玻璃）', img_link: null }],
        commits: '去看二手',
        shop: { name: '华为京东自营官方旗舰店', link: 'https://mall.jd.com/index-1000004259.html?from=pc' },
      }],
    total: 4620,
  },
  success: true,
};

const VSearch: React.FC = () => {
  const [phoneInfo, setPhoneInfo] = useState<Array<Phone> | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageInfo, setPageInfo] = React.useState({
    total: 0,
    pageSize: PAGE_SIZE,
  });
  useWhyDidYouUpdate('VSearch', { phoneInfo });

  useEffect(() => {
    getPhone(currentPage).then((res) => {
      if (res?.success) {
        setPhoneInfo(res.data.records);
        setPageInfo({ total: res.data.total, pageSize: PAGE_SIZE });
      }
    });
  }, []);

  const handlePageChange = (_, value) => {
    console.log(value);
    setCurrentPage(value);
  };
  console.log(pageInfo);

  return (
    <div className={classes.root}>
      <div className={global.w}>
        <div className={classes.topNav}>
          <Link href="https://jd.com">全部结果</Link>
          <span>{'>'}</span>
        </div>
        <Category />
        <AttrFilter />
        <div className={classes.goodsList}>
          {phoneInfo ? phoneInfo.map((phone) => (
            <ResultItem phone={phone} key={nanoid()} />
          )) : (
            <div className={classes.loading}>
              <span>Loading</span>
            </div>
          )}
        </div>
        <NzPagination
          onChange={handlePageChange}
          defaultPage={1}
          page={currentPage}
          total={pageInfo.total}
          pageSize={PAGE_SIZE}
        />
      </div>
    </div>
  );
};

export default VSearch;
