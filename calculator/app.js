//此计算机仅支持两个数字的单次运算，不支持连续运算

let value1 = 0;
let value2 = 0;
let operator = '';
let result = 0;

//打印结果
function outputResult() {
    const input = document.getElementById('input');
    input.innerHTML = result 
}


//识别要计算的两个数字
function numBtn(num) {
    if (operator === '') {
        value1 = value1 * 10 + num
        const input = document.getElementById('input');
        input.innerHTML = value1
    } else {
        value2 = value2 * 10 + num
        const input = document.getElementById('input');
        input.innerHTML = value2
    }
}

//点击 = 之后执行运算
function opBtn(op) {
    if (op === "=") {
        //直接得出结果
        switch (operator) {
            case '+':
                result = value1 + value2
                break;
            case '-':
                result = value1 - value2
                break;
            case '*':
                result = value1 * value2
                break;
            case '/':
                if (value2 === 0) {
                    alert('错误！除数不能为0')
                } else {
                    result = value1 / value2
                }
        }

        outputResult()
        //初始化
        value1 = 0;
        value2 = 0;
        result = 0;
        operator = '';

    } else {
        operator = op
    }
}

function clearBtn() {
    value1 = 0;
    value2 = 0;
    result = 0;
    operator = '';

    outputResult()
}
