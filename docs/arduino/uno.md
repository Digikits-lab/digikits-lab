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

Os pinos digitais do Arduino UNO podem ser utilizados como entradas ou saídas.

Os pinos **0 e 1** também são utilizados pela comunicação serial:

- **D0 (RX)** — recepção serial
- **D1 (TX)** — transmissão serial

As entradas analógicas são:

- **A0**
- **A1**
- **A2**
- **A3**
- **A4**
- **A5**

Os pinos **A4 e A5** também podem ser utilizados para comunicação I²C.

## Alimentação

O Arduino UNO pode ser alimentado de diferentes formas:

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
