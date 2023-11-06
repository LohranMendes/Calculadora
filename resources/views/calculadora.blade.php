<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/css/app.css" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="{{ asset('js/calculadora.js') }}"></script>
        <title>Calculadora</title>
    </head>
    <body>
        <div class="fundo">
            <div class="calculadora">
                <h1>Calculadora</h1>
                <p id="resultado"></p>
                <table>
                    <tr>
                        <td><button class="botao" onclick="clean()">C</button></td>
                        <td><button class="botao" onclick="del()"><</button></td>
                        <td><button class="botao" onclick="div()">/</button></td>
                        <td><button class="botao" onclick="multi()">*</button></td>
                    </tr>
                    <tr>
                        <td><button class="botao" onclick="insert('7')">7</button></td>
                        <td><button class="botao" onclick="insert('8')">8</button></td>
                        <td><button class="botao" onclick="insert('9')">9</button></td>
                        <td><button class="botao" onclick="sub()">-</button></td>
                    </tr>
                    <tr>
                        <td><button class="botao" onclick="insert('4')">4</button></td>
                        <td><button class="botao" onclick="insert('5')">5</button></td>
                        <td><button class="botao" onclick="insert('6')">6</button></td>
                        <td><button class="botao" onclick="soma()">+</button></td>
                    </tr>
                    <tr>
                        <td><button class="botao" onclick="insert('1')">1</button></td>
                        <td><button class="botao" onclick="insert('2')">2</button></td>
                        <td><button class="botao" onclick="insert('3')">3</button></td>
                        <td rowspan="2"><button class="botao" id="igual" onclick="calcular()">=</button></td>
                    </tr>
                    <tr>
                        <td colspan="2"><button class="botao" id="zero"onclick="insert('0')">0</button></td>
                        <td><button class="botao" onclick="insert('.')">.</td>
                    </tr>
                </table>
            </div>
        </div>
        <script type="text/javascript" src="{{ asset('js/calculadora.js') }}"></script>
    </body>
</html>