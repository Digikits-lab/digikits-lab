---
sidebar_position: 1
title: Arduino UNO
---

# Arduino UNO

O **Arduino UNO** é uma das placas de desenvolvimento mais utilizadas para aprendizado de eletrônica, programação e prototipagem.

É uma excelente placa para começar no mundo maker e pode ser utilizada em projetos com LEDs, sensores, displays, motores, relés e diversos outros módulos.

## Principais características

- Microcontrolador **ATmega328P**
- 14 pinos digitais
- 6 entradas analógicas
- 6 saídas PWM
- Comunicação USB
- Alimentação por USB ou fonte externa
- Compatível com Arduino IDE
- Tensão lógica de 5 V

## Especificações técnicas

| Característica | Especificação |
|---|---|
| Microcontrolador | ATmega328P |
| Tensão de operação | 5 V |
| Pinos digitais | 14 |
| Entradas analógicas | 6 |
| PWM | 6 canais |
| Memória Flash | 32 KB |
| SRAM | 2 KB |
| EEPROM | 1 KB |
| Clock | 16 MHz |

## Pinagem

Os pinos do Arduino UNO podem ser utilizados para diferentes funções, como entradas e saídas digitais, PWM, comunicação serial, I²C e SPI.

![Pinout completo do Arduino UNO](/img/arduino/arduino-uno-pinout.png)

### Pinos digitais

| Pino | Função | Recurso |
|---|---|---|
| D0 | Digital / RX | Comunicação Serial |
| D1 | Digital / TX | Comunicação Serial |
| D2 | Digital | Interrupção externa |
| D3 | Digital / PWM | Interrupção externa |
| D4 | Digital | — |
| D5 | Digital / PWM | PWM |
| D6 | Digital / PWM | PWM |
| D7 | Digital | — |
| D8 | Digital | — |
| D9 | Digital / PWM | PWM |
| D10 | Digital / PWM | SPI / SS |
| D11 | Digital / PWM | SPI / MOSI |
| D12 | Digital | SPI / MISO |
| D13 | Digital | SPI / SCK / LED integrado |

### Entradas analógicas

| Pino | Função | Recurso |
|---|---|---|
| A0 | Entrada analógica | ADC |
| A1 | Entrada analógica | ADC |
| A2 | Entrada analógica | ADC |
| A3 | Entrada analógica | ADC |
| A4 | Entrada analógica / SDA | I²C |
| A5 | Entrada analógica / SCL | I²C |

## Comunicação

### Serial

```text
D0 → RX
D1 → TX
```

Os pinos D0 e D1 são utilizados pela interface serial do Arduino UNO.

:::warning
Evite utilizar D0 e D1 para outros dispositivos enquanto estiver utilizando a comunicação serial ou fazendo upload do programa.
:::

### I²C

```text
A4 → SDA
A5 → SCL
```

A comunicação I²C permite conectar dispositivos como sensores, displays e módulos RTC utilizando apenas dois sinais.

### SPI

```text
D10 → SS
D11 → MOSI
D12 → MISO
D13 → SCK
```

A interface SPI pode ser utilizada para comunicação com módulos como cartões SD, displays e outros periféricos.

## Alimentação

| Pino  | Função                         |
| ----- | ------------------------------ |
| 5V    | Saída de 5 V                   |
| 3.3V  | Saída de 3,3 V                 |
| GND   | Terra                          |
| VIN   | Entrada de alimentação externa |
| RESET | Reinicia o microcontrolador    |
| AREF  | Referência analógica           |

Antes de conectar um módulo ou sensor, consulte a tensão de alimentação e a tensão lógica exigidas pelo dispositivo.

### USB

Conecte a placa ao computador utilizando um cabo USB.

Essa é a forma mais simples para programação e testes.

### Entrada de alimentação

Também é possível utilizar uma fonte externa compatível com a entrada de alimentação da placa.

:::warning
Sempre verifique a tensão da fonte antes de conectar o Arduino.
:::



## Primeiro programa

Um dos primeiros testes realizados com Arduino é o famoso **Blink**, que faz o LED integrado da placa piscar.

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);

  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```
