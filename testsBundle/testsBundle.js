var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// tests/utils/sum.test.js
var sum_test_exports = {};
__export(sum_test_exports, {
  sum_test: () => sum_test
});

// node_modules/ramda/es/internal/_isPlaceholder.js
function _isPlaceholder(a) {
  return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
}

// node_modules/ramda/es/internal/_curry1.js
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

// node_modules/ramda/es/internal/_curry2.js
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

// node_modules/ramda/es/internal/_arrayFromIterator.js
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

// node_modules/ramda/es/internal/_includesWith.js
function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

// node_modules/ramda/es/internal/_functionName.js
function _functionName(f) {
  var match = String(f).match(/^function (\w*)/);
  return match == null ? "" : match[1];
}

// node_modules/ramda/es/internal/_has.js
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// node_modules/ramda/es/internal/_objectIs.js
function _objectIs(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
}
var objectIs_default = typeof Object.is === "function" ? Object.is : _objectIs;

// node_modules/ramda/es/internal/_isArguments.js
var toString = Object.prototype.toString;
var _isArguments = /* @__PURE__ */ function() {
  return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
    return toString.call(x) === "[object Arguments]";
  } : function _isArguments2(x) {
    return _has("callee", x);
  };
}();
var isArguments_default = _isArguments;

// node_modules/ramda/es/keys.js
var hasEnumBug = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString");
var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
var hasArgsEnumBug = /* @__PURE__ */ function() {
  "use strict";
  return arguments.propertyIsEnumerable("length");
}();
var contains = function contains2(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};
var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(function keys2(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /* @__PURE__ */ _curry1(function keys3(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && isArguments_default(obj);
  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== "length")) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
var keys_default = keys;

// node_modules/ramda/es/type.js
var type = /* @__PURE__ */ _curry1(function type2(val) {
  return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
var type_default = type;

// node_modules/ramda/es/internal/_equals.js
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }
  return !_includesWith(function(b2, aItem) {
    return !_includesWith(eq, aItem, b2);
  }, b, a);
}
function _equals(a, b, stackA, stackB) {
  if (objectIs_default(a, b)) {
    return true;
  }
  var typeA = type_default(a);
  if (typeA !== type_default(b)) {
    return false;
  }
  if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
    return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
  }
  if (typeof a.equals === "function" || typeof b.equals === "function") {
    return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
  }
  switch (typeA) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof a.constructor === "function" && _functionName(a.constructor) === "Promise") {
        return a === b;
      }
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof a === typeof b && objectIs_default(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case "Date":
      if (!objectIs_default(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case "Error":
      return a.name === b.name && a.message === b.message;
    case "RegExp":
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }
  switch (typeA) {
    case "Map":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case "Set":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return false;
  }
  var keysA = keys_default(a);
  if (keysA.length !== keys_default(b).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

// node_modules/ramda/es/equals.js
var equals = /* @__PURE__ */ _curry2(function equals2(a, b) {
  return _equals(a, b, [], []);
});
var equals_default = equals;

// testingLibrary/testingLibrary.js
var logColors = {
  Reset: "\x1B[0m",
  FgRed: "\x1B[31m",
  FgGreen: "\x1B[32m",
  FgWhite: "\x1B[37m",
  FgGray: "\x1B[90m"
};
var loggerFn = console.log;
var LOG_LEVEL = "error";
var TestMatchers = class {
  constructor({
    actual,
    logColors: logColors2,
    logFn = console.log,
    logLevel = LOG_LEVEL
  }) {
    this.actual = actual;
    this.logFn = logFn;
    this.logColors = logColors2;
    this.logLevel = logLevel;
  }
  toBe(expected) {
    if (equals_default(expected, this.actual)) {
      if (this.logLevel === "all") {
        this.logFn(
          `${this.logColors.FgGreen}Succeeded${this.logColors.Reset}`
        );
      }
    } else {
      this.logFn(
        `${this.logColors.FgRed}Test failed
Actual:
${JSON.stringify(
          this.actual
        )}
                
Expected:
${JSON.stringify(expected)}
${this.logColors.Reset}`
      );
      throw new Error();
    }
  }
  toBeTruthy() {
    if (this.actual) {
      this.logFn(`Succeeded`);
    } else {
      this.logFn(
        `Fail - Expected value to be truthy but got ${this.actual}`
      );
      throw new Error(
        `Fail - Expected value to be truthy but got ${this.actual}`
      );
    }
  }
};
function expect(actual) {
  return new TestMatchers({ actual, logColors, logFn: loggerFn });
}
function describe(suiteName, fn, logFn = loggerFn, logLevel = LOG_LEVEL) {
  try {
    if (logLevel === "all") {
      logFn(`suite: ${suiteName}`);
    }
    fn();
  } catch (err) {
    logFn(
      `${logColors.FgRed}suite: ${suiteName}
${err.message}${logColors.Reset}`
    );
  }
}
function it(testName, fn, logFn = loggerFn, logLevel = LOG_LEVEL) {
  if (logLevel === "all") {
    logFn(`test: ${testName}`);
  }
  try {
    fn();
  } catch (err) {
    logFn(`${logColors.FgRed}${err.message}${logColors.Reset}`);
    throw new Error(`test: ${testName}`);
  }
}

// src/utils/sum.js
function sum(a, b) {
  return a + b;
}

// tests/utils/sum.test.js
var sum_test = () => {
  describe("sum", () => {
    it("sum 1+2", () => {
      const result = sum(1, 2);
      const expected = 3;
      expect(result).toBe(expected);
    });
  });
};

// tests/string/removeSubstringByRegexp.test.js
var removeSubstringByRegexp_test_exports = {};
__export(removeSubstringByRegexp_test_exports, {
  removeSubstringByRegexp_test: () => removeSubstringByRegexp_test
});

// src/string/removeSubstringByRegexp.js
function removeSubstringByRegexp(string, regexp, replaceWith) {
  return string.replace(regexp, replaceWith);
}

// tests/string/removeSubstringByRegexp.test.js
var removeSubstringByRegexp_test = () => {
  describe("remove substring by regular expression", () => {
    it("remove substring by regular expression 0", () => {
      const string = "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar";
      const result = removeSubstringByRegexp(
        string,
        /.part[0-9]_Downloadly.ir.rar/,
        ""
      );
      const expected = "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6";
      expect(result).toBe(expected);
    });
  });
};

// tests/string/fitGroups.test.js
var fitGroups_test_exports = {};
__export(fitGroups_test_exports, {
  fitGroups_test: () => fitGroups_test
});

// src/string/fitGroups.js
function fitGroups(array, groups) {
  return groups.map((group) => ({
    data: array.filter((string) => string.includes(group)),
    group
  }));
}

// tests/string/fitGroups.test.js
var fitGroups_test = () => {
  describe("fit groups", () => {
    it("fit groups", () => {
      const strings = [
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar",
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part2_Downloadly.ir.rar",
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part3_Downloadly.ir.rar",
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part4_Downloadly.ir.rar",
        "Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part1.rar",
        "Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part2.rar",
        "Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part3.rar",
        "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part1_Downloadly.ir.rar",
        "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part2_Downloadly.ir.rar",
        "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part3_Downloadly.ir.rar",
        "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part4_Downloadly.ir.rar"
      ];
      const groups = [
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6",
        "Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4",
        "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12"
      ];
      const result = fitGroups(strings, groups);
      const expected = [
        {
          data: [
            "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar",
            "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part2_Downloadly.ir.rar",
            "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part3_Downloadly.ir.rar",
            "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part4_Downloadly.ir.rar"
          ],
          group: "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6"
        },
        {
          data: [
            "Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part1.rar",
            "Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part2.rar",
            "Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part3.rar"
          ],
          group: "Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4"
        },
        {
          data: [
            "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part1_Downloadly.ir.rar",
            "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part2_Downloadly.ir.rar",
            "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part3_Downloadly.ir.rar",
            "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part4_Downloadly.ir.rar"
          ],
          group: "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12"
        }
      ];
      expect(result).toBe(expected);
    });
  });
};

// tests/string/extractUniq.test.js
var extractUniq_test_exports = {};
__export(extractUniq_test_exports, {
  extractUniq_test: () => extractUniq_test
});

// src/string/extractUniq.js
function extractUniq(array) {
  return [...new Set(array)];
}

// tests/string/extractUniq.test.js
var extractUniq_test = () => {
  describe("extract unique values from array", () => {
    it("extract unique values from array", () => {
      const strings = ["a", "b", "c", "a", "a", "b"];
      const result = extractUniq(strings);
      const expected = ["a", "b", "c"];
      expect(result).toBe(expected);
    });
  });
};

// tests/string/extractSubstringByRegExp.test.js
var extractSubstringByRegExp_test_exports = {};
__export(extractSubstringByRegExp_test_exports, {
  extractSubstringByRegExp_test: () => extractSubstringByRegExp_test
});

// src/string/extractSubstringByRegExp.js
function extractSubstringByRegExp(string, regexp) {
  return string.match(regexp)[0];
}

// tests/string/extractSubstringByRegExp.test.js
var extractSubstringByRegExp_test = () => {
  describe("extract substring by regular expression", () => {
    it("extract substring by regular expression", () => {
      const string = "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar";
      const result = extractSubstringByRegExp(string, /^[^.]+/);
      const expected = "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6";
      expect(result).toBe(expected);
    });
    it("extract substring by regular expression", () => {
      const string = "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar";
      const result = extractSubstringByRegExp(string, /(^.*?\d{4}-\d{1})/);
      const expected = "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6";
      expect(result).toBe(expected);
    });
  });
};

// tests/string/extractCommonSubsequence.test.js
var extractCommonSubsequence_test_exports = {};
__export(extractCommonSubsequence_test_exports, {
  extractCommonSubsequence_test: () => extractCommonSubsequence_test
});

// src/string/extractCommonSubsequence.js
function extractCommonSubsequence(array) {
  {
    let sortedArray = array.sort();
    let first = sortedArray[0];
    let last = sortedArray.pop();
    let length = first.length;
    let index = 0;
    while (index < length && first[index] === last[index]) {
      index++;
    }
    return first.substring(0, index);
  }
}

// tests/string/extractCommonSubsequence.test.js
var extractCommonSubsequence_test = () => {
  describe("extract common subsequence", () => {
    it("extract common subsequence", () => {
      const strings = [
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar",
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part2_Downloadly.ir.rar",
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part3_Downloadly.ir.rar",
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part4_Downloadly.ir.rar"
      ];
      const result = extractCommonSubsequence(strings);
      const expected = "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part";
      expect(result).toBe(expected);
    });
  });
};

// tests/string/createGroups.test.js
var createGroups_test_exports = {};
__export(createGroups_test_exports, {
  createGroups_test: () => createGroups_test
});

// src/string/createGroups.js
function createGroups(array, regexp) {
  const cutted = array.map(
    (string) => extractSubstringByRegExp(string, regexp)
  );
  return extractUniq(cutted);
}

// tests/string/createGroups.test.js
var createGroups_test = () => {
  describe("create groups from array", () => {
    it("create groups from array", () => {
      const strings = [
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar",
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part2_Downloadly.ir.rar",
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part3_Downloadly.ir.rar",
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part4_Downloadly.ir.rar",
        "Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part1.rar",
        "Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part2.rar",
        "Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part3.rar",
        "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part1_Downloadly.ir.rar",
        "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part2_Downloadly.ir.rar",
        "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part3_Downloadly.ir.rar",
        "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part4_Downloadly.ir.rar"
      ];
      const result = createGroups(strings, /(^.*?\d{4}-\d{1,})/);
      const expected = [
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6",
        "Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4",
        "Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12"
      ];
      expect(result).toBe(expected);
    });
  });
};

// tests/files/renameFiles/renameFiles.test.js
var renameFiles_test_exports = {};
__export(renameFiles_test_exports, {
  renameFiles_test: () => renameFiles_test
});

// src/files/getFileNames.js
import fs from "fs";
function getFileNames(dirName) {
  return fs.readdirSync(dirName);
}

// tests/files/renameFiles/renameFiles.test.js
var renameFiles_test = () => {
  describe("rename files", () => {
  });
};

// tests/files/renameFile/renameFile.test.js
var renameFile_test_exports = {};
__export(renameFile_test_exports, {
  renameFile_test: () => renameFile_test
});
var renameFile_test = () => {
  describe("rename file", () => {
  });
};

// tests/files/makeDirs/makeDirs.test.js
var makeDirs_test_exports = {};
__export(makeDirs_test_exports, {
  makeDirs_test: () => makeDirs_test
});
import path from "path";

// src/files/makeDir.js
import fs2 from "fs";
function makeDir(dir) {
  if (!fs2.existsSync(dir)) {
    fs2.mkdirSync(dir);
  }
}

// src/files/makeDirs.js
function makeDirs(dirNames) {
  dirNames.forEach((dirName) => {
    makeDir(dirName);
  });
}

// src/files/getDirs.js
import { readdirSync } from "fs";
function getDirs(source) {
  return readdirSync(source, { withFileTypes: true }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
}

// tests/files/makeDirs/makeDirs.test.js
var makeDirs_test = () => {
  describe("make directories", () => {
    it("make directories", () => {
      const resolvedPath = path.resolve() + "\\tests\\files\\makeDirs\\testFolder0";
      const dirNames = [
        resolvedPath + "\\testDir0",
        resolvedPath + "\\testDir1"
      ];
      makeDirs(dirNames);
      const createdDirName = path.resolve() + "\\tests\\files\\makeDirs\\testFolder0\\";
      const result = getDirs(createdDirName);
      const expected = ["testDir0", "testDir1"];
      expect(result).toBe(expected);
    });
  });
};

// tests/files/makeDir/makeDir.test.js
var makeDir_test_exports = {};
__export(makeDir_test_exports, {
  makeDir_test: () => makeDir_test
});
import path2 from "path";
var makeDir_test = () => {
  describe("make directory", () => {
    it("make directory", () => {
      const dirName = path2.resolve() + "\\tests\\files\\makeDir\\testFolder0\\testDir0";
      makeDir(dirName);
      const createdDirName = path2.resolve() + "\\tests\\files\\makeDir\\testFolder0\\";
      const result = getDirs(createdDirName);
      const expected = ["testDir0"];
      expect(result).toBe(expected);
    });
  });
};

// tests/files/getFileNames/getFileNames.test.js
var getFileNames_test_exports = {};
__export(getFileNames_test_exports, {
  getFileNames_test: () => getFileNames_test
});
import path3 from "path";
var getFileNames_test = () => {
  describe("get file names from the folder", () => {
    it("get file names from the folder 0", () => {
      const dirName = path3.resolve() + "\\tests\\files\\getFileNames\\testFolder0";
      const result = getFileNames(dirName);
      const expected = ["a.txt", "b.txt", "c.txt"];
      expect(result).toBe(expected);
    });
    it("get file names from the folder 1", () => {
      const dirName = path3.resolve() + "\\tests\\files\\getFileNames\\testFolder1";
      const result = getFileNames(dirName);
      const expected = [
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.txt",
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part2_Downloadly.ir.txt",
        "Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part3_Downloadly.ir.txt"
      ];
      expect(result).toBe(expected);
    });
  });
};

// tests/files/getDirs/getDirs.test.js
var getDirs_test_exports = {};
__export(getDirs_test_exports, {
  getDirs_test: () => getDirs_test
});
import path4 from "path";
var getDirs_test = () => {
  describe("get directory names from the folder", () => {
    it("get directory names from the folder 0", () => {
      const dirName = path4.resolve() + "\\tests\\files\\getDirs\\testFolder0";
      const result = getDirs(dirName);
      const expected = ["testDir0", "testDir1"];
      expect(result).toBe(expected);
    });
  });
};

// tests/files/createDirsFromFiles/createDirsFromFileGroups.test.js
var createDirsFromFileGroups_test_exports = {};
__export(createDirsFromFileGroups_test_exports, {
  createDirsFromFileGroups_test: () => createDirsFromFileGroups_test
});

// src/files/createDirsFromFileGroups.js
function createDirsFromFileGroups(dirName, regexp) {
  const fileNames = getFileNames(dirName);
  const cuttedFileNames = fileNames.map(
    (fileName) => removeSubstringByRegexp(fileName, regexp, "")
  );
  return extractUniq(cuttedFileNames);
}

// tests/files/createDirsFromFiles/createDirsFromFileGroups.test.js
import path5 from "path";
var createDirsFromFileGroups_test = () => {
  describe("create directories from file groups", () => {
    it("create directories from file groups", () => {
      const dirName = path5.resolve() + "\\tests\\files\\createDirsFromFiles\\testFolder0";
      const regexp = /.part[0-9]_Downloadly.ir.txt/;
      const result = createDirsFromFileGroups(dirName, regexp);
      const expected = [
        "Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5",
        "Udemy_The_Complete_Quantum_Computing_Course_with_Python_2025_2025-3"
      ];
      expect(result).toBe(expected);
    });
  });
};

// testsAutoImport.js
var tests = { ...sum_test_exports, ...removeSubstringByRegexp_test_exports, ...fitGroups_test_exports, ...extractUniq_test_exports, ...extractSubstringByRegExp_test_exports, ...extractCommonSubsequence_test_exports, ...createGroups_test_exports, ...renameFiles_test_exports, ...renameFile_test_exports, ...makeDirs_test_exports, ...makeDir_test_exports, ...getFileNames_test_exports, ...getDirs_test_exports, ...createDirsFromFileGroups_test_exports };
export {
  tests
};
