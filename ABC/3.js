/**
 * ArrayUtils类 - 提供数组操作工具方法
 * 包含最大值、最小值、求和和平均值等基本数组操作
 */
class ArrayUtils {
  /**
   * 查找数组中的最大值
   * @param {Array<number>} array - 要处理的数组
   * @returns {number} - 数组中的最大值
   * @throws {Error} - 当参数不是数组或数组中包含非数字元素时抛出错误
   */
  max(array) {
    this.validateArray(array);
    return Math.max(...array);
  }

  /**
   * 查找数组中的最小值
   * @param {Array<number>} array - 要处理的数组
   * @returns {number} - 数组中的最小值
   * @throws {Error} - 当参数不是数组或数组中包含非数字元素时抛出错误
   */
  min(array) {
    this.validateArray(array);
    return Math.min(...array);
  }

  /**
   * 计算数组元素之和
   * @param {Array<number>} array - 要处理的数组
   * @returns {number} - 数组元素之和
   * @throws {Error} - 当参数不是数组或数组中包含非数字元素时抛出错误
   */
  sum(array) {
    this.validateArray(array);
    return array.reduce((total, current) => total + current, 0);
  }

  /**
   * 计算数组元素的平均值
   * @param {Array<number>} array - 要处理的数组
   * @returns {number} - 数组元素的平均值
   * @throws {Error} - 当参数不是数组或数组中包含非数字元素时抛出错误
   * @throws {Error} - 当数组为空时抛出错误
   */
  average(array) {
    this.validateArray(array);
    if (array.length === 0) {
      throw new Error('无法计算空数组的平均值');
    }
    return this.sum(array) / array.length;
  }

  /**
   * 验证输入是否为只包含数字的数组
   * @param {any} array - 要验证的参数
   * @throws {Error} - 当参数不是数组时抛出错误
   * @throws {Error} - 当数组中包含非数字元素时抛出错误
   * @private
   */
  validateArray(array) {
    // 检查是否为数组
    if (!Array.isArray(array)) {
      throw new Error('参数必须是数组');
    }

    // 检查数组中的每个元素是否都是数字
    for (const item of array) {
      if (typeof item !== 'number' || isNaN(item)) {
        throw new Error('数组中只能包含数字');
      }
    }
  }
}

// 创建ArrayUtils的实例
const arrayUtils = new ArrayUtils();

// 准备测试数据
const numbers = [5, 2, 9, 1, 7, 3];
console.log(`测试数组: [${numbers}]`);

// 演示查找最大值
try {
  const maxValue = arrayUtils.max(numbers);
  console.log(`最大值: ${maxValue}`);
} catch (error) {
  console.error(`查找最大值错误: ${error.message}`);
}

// 演示查找最小值
try {
  const minValue = arrayUtils.min(numbers);
  console.log(`最小值: ${minValue}`);
} catch (error) {
  console.error(`查找最小值错误: ${error.message}`);
}

// 演示求和
try {
  const sumValue = arrayUtils.sum(numbers);
  console.log(`元素和: ${sumValue}`);
} catch (error) {
  console.error(`求和错误: ${error.message}`);
}

// 演示平均值
try {
  const avgValue = arrayUtils.average(numbers);
  console.log(`平均值: ${avgValue}`);
} catch (error) {
  console.error(`计算平均值错误: ${error.message}`);
}

// 演示错误处理（非数组参数）
try {
  const invalidMax = arrayUtils.max("这不是数组");
  console.log(`无效输入的最大值: ${invalidMax}`);
} catch (error) {
  console.error(`错误处理演示(非数组): ${error.message}`);
}

// 演示错误处理（数组包含非数字元素）
try {
  const mixedArray = [1, 2, "三", 4, 5];
  const invalidSum = arrayUtils.sum(mixedArray);
  console.log(`混合数组的和: ${invalidSum}`);
} catch (error) {
  console.error(`错误处理演示(非数字元素): ${error.message}`);
}

// 演示错误处理（空数组的平均值）
try {
  const emptyArray = [];
  const invalidAvg = arrayUtils.average(emptyArray);
  console.log(`空数组的平均值: ${invalidAvg}`);
} catch (error) {
  console.error(`错误处理演示(空数组): ${error.message}`);
}