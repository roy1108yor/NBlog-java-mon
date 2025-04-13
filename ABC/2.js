/**
 * Calculator类 - 提供基本的数学运算功能
 * 包含加、减、乘、除四种基本运算
 */
class Calculator {
  /**
   * 加法运算
   * @param {number} a - 第一个操作数
   * @param {number} b - 第二个操作数 
   * @returns {number} - 两数之和
   * @throws {Error} - 当参数不是数字时抛出错误
   */
  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('参数必须是数字');
    }
    return a + b;
  }

  /**
   * 减法运算
   * @param {number} a - 被减数
   * @param {number} b - 减数
   * @returns {number} - 两数之差
   * @throws {Error} - 当参数不是数字时抛出错误
   */
  subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('参数必须是数字');
    }
    return a - b;
  }

  /**
   * 乘法运算
   * @param {number} a - 第一个因数
   * @param {number} b - 第二个因数
   * @returns {number} - 两数之积
   * @throws {Error} - 当参数不是数字时抛出错误
   */
  multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('参数必须是数字');
    }
    return a * b;
  }

  /**
   * 除法运算
   * @param {number} a - 被除数
   * @param {number} b - 除数
   * @returns {number} - 两数之商
   * @throws {Error} - 当参数不是数字时抛出错误
   * @throws {Error} - 当除数为0时抛出错误
   */
  divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('参数必须是数字');
    }
    if (b === 0) {
      throw new Error('除数不能为0');
    }
    return a / b;
  }
}

// 创建Calculator的实例
const calculator = new Calculator();

// 演示加法运算
try {
  const sum = calculator.add(10, 5);
  console.log(`加法：10 + 5 = ${sum}`);
} catch (error) {
  console.error(`加法错误：${error.message}`);
}

// 演示减法运算
try {
  const difference = calculator.subtract(10, 5);
  console.log(`减法：10 - 5 = ${difference}`);
} catch (error) {
  console.error(`减法错误：${error.message}`);
}

// 演示乘法运算
try {
  const product = calculator.multiply(10, 5);
  console.log(`乘法：10 * 5 = ${product}`);
} catch (error) {
  console.error(`乘法错误：${error.message}`);
}

// 演示除法运算
try {
  const quotient = calculator.divide(10, 5);
  console.log(`除法：10 / 5 = ${quotient}`);
} catch (error) {
  console.error(`除法错误：${error.message}`);
}

// 演示错误处理（除数为0的情况）
try {
  const result = calculator.divide(10, 0);
  console.log(`除法：10 / 0 = ${result}`);
} catch (error) {
  console.error(`除法错误：${error.message}`);
}

// 演示错误处理（参数不是数字的情况）
try {
  const invalid = calculator.add('10', 5);
  console.log(`加法：'10' + 5 = ${invalid}`);
} catch (error) {
  console.error(`参数错误：${error.message}`);
}