---
sidebar_position: 2
title: Arduino Nano
---

# Arduino Nano

O **Arduino Nano** é uma placa compacta baseada no microcontrolador **ATmega328P**, muito utilizada em projetos onde o tamanho reduzido é importante.

Ele possui recursos semelhantes aos do Arduino UNO, mas apresenta um formato menor e pode ser facilmente utilizado em protoboards.

## Principais características

- Microcontrolador **ATmega328P**
- 14 pinos digitais
- 8 entradas analógicas
- 6 saídas PWM
- Comunicação serial
- Comunicação I²C
- Comunicação SPI
- Compatível com Arduino IDE
- Tensão de operação de 5 V
- Clock de 16 MHz
- Formato compacto

## Especificações técnicas

| Característica | Especificação |
|---|---|
| Microcontrolador | ATmega328P |
| Tensão de operação | 5 V |
| Pinos digitais | 14 |
| Entradas analógicas | 8 |
| PWM | 6 canais |
| Memória Flash | 32 KB |
| SRAM | 2 KB |
| EEPROM | 1 KB |
| Clock | 16 MHz |

## Pinagem

O Arduino Nano possui pinos digitais, entradas analógicas e interfaces de comunicação que permitem conectar sensores, displays, módulos e outros dispositivos.

![Pinout completo do Arduino Nano](/img/arduino/arduino-nano-pinout.png)

> A identificação dos pinos pode variar visualmente entre diferentes versões e fabricantes do Arduino Nano baseado no ATmega328P. Consulte a serigrafia da sua placa antes de realizar as conexões.
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
| A6 | Entrada analógica | ADC |
| A7 | Entrada analógica | ADC |

### Comunicação

#### Serial

```text
D0 → RX
D1 → TX
```

Os pinos D0 e D1 são utilizados pela interface serial do Arduino Nano.

:::warning
Evite utilizar D0 e D1 para outros dispositivos enquanto estiver utilizando a comunicação serial ou fazendo upload do programa.
:::

#### I²C

```text
A4 → SDA
A5 → SCL
```

A comunicação I²C permite conectar dispositivos como sensores, displays e módulos RTC utilizando apenas dois sinais.

#### SPI

```text
D10 → SS
D11 → MOSI
D12 → MISO
D13 → SCK
```

A interface SPI pode ser utilizada para comunicação com cartões SD, displays e outros periféricos.

## Alimentação

| VIN | Entrada de alimentação externa |
| 5V | Alimentação regulada de 5 V |
| 3.3V | Saída de 3,3 V |
| GND | Terra |
| RST | Reset da placa |

### USB

O Arduino Nano pode ser conectado ao computador por sua interface USB.

A interface USB é utilizada para programação e comunicação serial.

:::warning
A conexão USB e o circuito USB podem variar entre diferentes versões e clones do Arduino Nano. Verifique o conector e o conversor USB utilizado na sua placa.
:::

## Primeiro programa

Um dos primeiros testes realizados com o Arduino Nano é o famoso **Blink**, que faz o LED integrado da placa piscar.

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

## Arduino Nano e Arduino UNO

O Arduino Nano e o Arduino UNO utilizam o ATmega328P em suas versões clássicas e possuem recursos semelhantes.

A principal diferença está no formato físico e na disposição dos pinos.

| Característica | Arduino UNO | Arduino Nano |
|---|---|---|
| Microcontrolador | ATmega328P | ATmega328P |
| Clock | 16 MHz | 16 MHz |
| Pinos digitais | 14 | 14 |
| Entradas analógicas | 6 | 8 |
| PWM | 6 | 6 |
| Formato | Maior | Compacto |
| Protoboard | Adaptador normalmente necessário | Pode ser instalado diretamente |

## Projetos recomendados

O Arduino Nano pode ser utilizado em projetos como:

- Estações meteorológicas
- Automação residencial
- Controle de LEDs
- Leitura de sensores
- Controle de motores
- Sistemas com relés
- Displays LCD e OLED
- Projetos compactos para protoboard
