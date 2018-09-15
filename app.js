// APP 入口的 JS

require('env2')('./.env');

const Hapi = require('hapi');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');

// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');



const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {

  await server.register([
    // 为系统使用 hapi-swagger
    ...pluginHapiSwagger,
  ]);

  server.route([
    // 创建一个简单的hello hapi接口
    ...routesHelloHapi,
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
