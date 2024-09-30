const converter = require('api-spec-converter');
const fs = require('fs');

// 执行转换
converter.convert({
  from: 'openapi_3',
  to: 'swagger_2',
  source: '', // 'http://openai3.json'
}, function(err, converted) {
  if (err) {
    console.error('转换错误:', err);
  } else {
    // 获取转换后的 Swagger 2.0 规范
    const swagger2 = converted.stringify({syntax: 'json', order: 'openapi'});
    
    // 将 Swagger 2.0 规范写入文件
    fs.writeFileSync('swagger2.json', swagger2);
    console.log('转换完成。Swagger 2.0 规范已保存到 swagger2.json');
  }
});