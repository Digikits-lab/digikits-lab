---
sidebar_position: 1
title: Blink — Primeiro programa com ESP32
---

# Blink — Primeiro programa com ESP32

O **Blink** é um dos primeiros programas utilizados para testar uma placa de desenvolvimento.

Neste exemplo vamos utilizar uma **ESP32 DevKit V1 de 30 pinos** para fazer um LED piscar.

## Objetivo

Fazer um LED piscar continuamente:

```text
LED ligado
    ↓
500 ms
    ↓
LED desligado
    ↓
500 ms
    ↓
repete
```

## 🔌 Montagem

Podemos utilizar o LED integrado encontrado em muitas versões da ESP32 DevKit V1.

Para utilizar um LED externo:

```text
ESP32 GPIO2
     │
     │
Resistor 220 Ω
     │
     │
    LED
     │
     │
    GND
```

### Componentes

- 1 × ESP32 DevKit V1
- 1 × LED
- 1 × resistor de 220 Ω
- 1 × protoboard
- jumpers

> **Importante:** o resistor deve ser colocado em série com o LED para limitar a corrente.

## 💻 Programa completo

```cpp
const int LED = 2;

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, HIGH);
  delay(500);

  digitalWrite(LED, LOW);
  delay(500);
}
```

## 🧠 Entendendo o programa

### Definindo o GPIO

```cpp
const int LED = 2;
```

Criamos uma constante chamada `LED`. O número `2` indica que estamos utilizando o GPIO2.

Em muitas placas ESP32 DevKit V1, o LED integrado está conectado a esse GPIO.

### A função `setup()`

```cpp
void setup()
```

é executada uma única vez, quando a ESP32 é ligada ou reiniciada.

Dentro dela:

```cpp
pinMode(LED, OUTPUT);
```

configuramos o GPIO2 como uma saída digital.

### A função `loop()`

```cpp
void loop()
```

é executada continuamente.

O programa repete:

```text
LIGA
 ↓
500 ms
 ↓
DESLIGA
 ↓
500 ms
 ↓
LIGA
 ↓
...
```

### Ligando o LED

```cpp
digitalWrite(LED, HIGH);
```

coloca o GPIO2 em nível lógico alto.

### Esperando

```cpp
delay(500);
```

faz o programa esperar 500 milissegundos.

```text
1000 ms = 1 segundo
500 ms  = 0,5 segundo
```

### Desligando o LED

```cpp
digitalWrite(LED, LOW);
```

coloca o GPIO2 em nível lógico baixo.

## ⏱️ Alterando a velocidade

### Rápido

```cpp
delay(100);
```

### Meio segundo

```cpp
delay(500);
```

### Um segundo

```cpp
delay(1000);
```

### Dois segundos

```cpp
delay(2000);
```

## 🔁 Exemplo com 1 segundo

```cpp
const int LED = 2;

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, HIGH);
  delay(1000);

  digitalWrite(LED, LOW);
  delay(1000);
}
```

## 🚦 Criando uma sequência

```cpp
const int LED = 2;

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, HIGH);
  delay(1000);

  digitalWrite(LED, LOW);
  delay(200);

  digitalWrite(LED, HIGH);
  delay(200);

  digitalWrite(LED, LOW);
  delay(1000);
}
```

Sequência:

```text
LIGA      → 1 segundo
DESLIGA   → 200 ms
LIGA      → 200 ms
DESLIGA   → 1 segundo
```

## 💡 Controlando dois LEDs

Podemos controlar dois LEDs:

```text
LED 1 → GPIO2
LED 2 → GPIO4
```

```cpp
const int LED1 = 2;
const int LED2 = 4;

void setup() {
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
}

void loop() {
  digitalWrite(LED1, HIGH);
  digitalWrite(LED2, LOW);

  delay(500);

  digitalWrite(LED1, LOW);
  digitalWrite(LED2, HIGH);

  delay(500);
}
```

Os LEDs funcionarão alternadamente.

## 🧪 Desafio

Modifique o programa para criar:

```text
LIGA      → 100 ms
DESLIGA   → 100 ms
LIGA      → 100 ms
DESLIGA   → 100 ms
LIGA      → 100 ms
DESLIGA   → 1000 ms
```

Depois tente criar sua própria sequência.

## ⚠️ Cuidados com a ESP32

Os GPIOs da ESP32 trabalham com lógica de **3,3 V**.

**Nunca aplique 5 V diretamente em um GPIO.**

Para LEDs externos, utilize sempre um resistor em série para limitar a corrente.

## 🛠️ Problemas comuns

### O LED não acende

Verifique:

1. se a placa está corretamente alimentada;
2. se o programa foi carregado;
3. se o GPIO utilizado está correto;
4. se o LED externo está na orientação correta;
5. se o resistor está conectado corretamente.

### O LED integrado não funciona

Nem todas as placas ESP32 DevKit possuem o LED integrado conectado ao mesmo GPIO.

Nesta documentação utilizamos o **GPIO2** como referência.

Se o LED integrado não responder, utilize um LED externo conectado ao GPIO2.

## 🧠 O que aprendemos

```text
pinMode()
    ↓
configura o GPIO

digitalWrite()
    ↓
controla a saída digital

delay()
    ↓
cria intervalos de tempo

setup()
    ↓
executado uma vez

loop()
    ↓
executado continuamente
```

Esses conceitos serão utilizados nos próximos projetos com ESP32.

## 🚀 Próximo exemplo

Agora vamos aprender a **ler uma entrada digital utilizando um botão**.

```text
BOTÃO
  ↓
ESP32
  ↓
LED
```

Vamos trabalhar com:

- `INPUT`;
- `INPUT_PULLUP`;
- `digitalRead()`;
- leitura de GPIO;
- lógica HIGH/LOW;
- controle de um LED através de um botão.

**[Próximo: GPIO e botão →](./gpio)**





