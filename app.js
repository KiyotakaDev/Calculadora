window.addEventListener('DOMContentLoaded', () => {                                                                                                      

    const keypad = document.getElementById("keypad");
    const display = document.getElementById("display");
    const igual = document.getElementById("igual");
    const reset = document.getElementById("reset");
    const borrar = document.getElementById("borrar");
    let actualOperacion;
    let num1;
    let num2;


    keypad.addEventListener('click', (e) => {

        let key = e.target;
        let keyId = e.target.id;

        if (!keyId && !key.classList.contains('operacion') && !key.classList.contains('resolver')) {
            const actualValue = display.innerHTML;
            const value_button = e.explicitOriginalTarget.value;
            display.innerHTML = `${actualValue}${value_button}`;
        }

        if(key.classList.contains('operacion')){
            actualOperacion = e.explicitOriginalTarget.defaultValue;
            num1 = parseFloat(display.innerHTML);
            display.innerHTML = '';
        }

    });

    reset.addEventListener('click', () => {
        display.innerHTML = '';
    });

    igual.addEventListener('click', () => {
        num2 = parseFloat(display.innerHTML);
        cases(actualOperacion,num1,num2);
    });

    borrar.addEventListener('click', () => {
        let cadena = display.innerHTML
        display.innerHTML = cadena.substring(0, cadena.length - 1);
        co
    });

    function cases(signo, num1, num2) {
        switch (signo) {
            case '+':
                display.innerHTML = num1 + num2;
                break;
            case '-':
                display.innerHTML = num1 - num2;
                break;
            case '*':
                display.innerHTML = num1 * num2;
                break;
            case '/':
                display.innerHTML = num1 / num2;
                break;
            default:
                "Huy que es eso";
                break;
        }
    }
});