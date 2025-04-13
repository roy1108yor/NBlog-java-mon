/**
 * 问候函数 - 根据提供的名字生成问候语
 * @param {string} name - 要问候的人的名字
 * @returns {string} - 返回包含名字的问候语
 */
function greeting(name) {
  return `你好，${name}！欢迎来到JavaScript世界。`;
}

// 调用greeting函数并输出结果
const userName = "朋友";
const message = greeting(userName);
console.log(message);

// 也可以直接调用并输出
console.log(greeting("开发者"));