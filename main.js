let naipe  = ['ouros', 'espadas', 'copas', 'paus'];

let value = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'dama', 'valete', 'reis'];



    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < naipe.length; j++) {
            let card = value[i] + ' de ' + naipe[j];
            console.log(card);
        }
    }  