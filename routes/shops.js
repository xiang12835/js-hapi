// routes/shops.js
const GROUP_NAME = 'shops';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表',
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表',
    },
  },
];




const GROUP_NAME = 'orders';

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '创建订单',
    },
  },
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{orderId}/pay`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '支付某条订单',
    },
  },
];
