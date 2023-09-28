import { CartAttr } from '@/src/views/VDetails/interface';
import { ColumnsType } from 'antd/es/table';

export const cartTableColumns: ColumnsType<CartAttr> = [
  {
    title: '商品',
    dataIndex: 'title',
    render: (_, record) => (
      <div style={{ display: 'flex', alignItems: 'top' }}>
        <img style={{ width: 80, height: 80 }} src={record.imgSrc} alt={record.title} />
        <span style={{ fontSize: 12 }}>{record.title}</span>
      </div>
    ),
    width: 300,
    ellipsis: { showTitle: true },
  },
  {
    title: '属性',
    render: (_, record) => (
      <div style={{ textAlign: 'center' }}>
        <div>{record.color}</div>
        <div>{record.version}</div>
      </div>
    ),
  },
  {
    title: '单价',
    dataIndex: 'price',
    render: (text) => (`￥${text}`),
  },
  {
    title: '数量',
    dataIndex: 'amount',
    render: (text) => (`x ${text}`),
  },
  {
    title: '小记',
    render: (_, record) => (
      <span>{record.price * record.amount}</span>
    ),
  },
];
