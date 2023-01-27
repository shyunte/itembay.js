/* 이벤트리스너를 통한 계산기  */


let numOne ='';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
const onClikNumber = (event) => {
    return () => {
        if (!operator) {   //비어있을때
            numOne += event.target.textContent;
            $result.value += event.target.textContent;
            return;
        }
            if (!numTwo) {
                $result.value = '';
            }
            numTwo += event.target.textContent;
            $result.value += event.target.textContent;
        }
        ;

        document.querySelector('#num-0').addEventListener('click', onClikNumber);
        document.querySelector('#num-1').addEventListener('click', onClikNumber);
        document.querySelector('#num-2').addEventListener('click', onClikNumber);
        document.querySelector('#num-3').addEventListener('click', onClikNumber);
        document.querySelector('#num-4').addEventListener('click', onClikNumber);
        document.querySelector('#num-5').addEventListener('click', onClikNumber);
        document.querySelector('#num-6').addEventListener('click', onClikNumber);
        document.querySelector('#num-7').addEventListener('click', onClikNumber);
        document.querySelector('#num-8').addEventListener('click', onClikNumber);
        document.querySelector('#num-9').addEventListener('click', onClikNumber);

        const onClickOperator = (op) => () => {
            if (numOne) {
                operator = op;
            } else {
                alert('숫자를 먼저 입력하세요.');
            }
        }
    }
    document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
    document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
    document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
    document.querySelector('#mutiple').addEventListener('click', onClickOperator('*'));

    document.querySelector('#calculate').addEventListener('click', () => {
        if (numTwo) {
            switch (operator) {
                case '+':
                    $result.value = parseInt(numOne) + parseInt(numTwo);
                    break;
                case '-':
                    $result.value = numOne - numTwo;
                    break;
                case '*':
                    $result.value = numOne / numTwo;
                    break;
                default:
                    break;
            }
        } else {
            alert('숫자를 먼저 입력하세요');
        }
    });

    document.querySelector('#clear').addEventListener('click', () => {
        numOne = '';
        operator = '';
        numTwo = '';
        $operator.value = '';
        $result.value = '';
    });

