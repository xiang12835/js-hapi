// APP 入口的 JS

require('env2')('./.env');

const Hapi = require('hapi');
const config = require('./config');

const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');

// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');

// 在 app.js 中注册使用 hapi-pagination
const pluginHapiPagination = require('./plugins/hapi-pagination');


const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {

  // 注册插件
  await server.register([
    ...pluginHapiSwagger,
    pluginHapiPagination,
  ]);

  // 注册路由
  server.route([
    // 创建一个简单的hello hapi接口
    ...routesHelloHapi,
    ...routesShops,
    ...routesOrders,
  ]);

  // 启动服务
  await server.start();
  
  console.log(`Server running at: ${server.info.uri}`);
};

init();
