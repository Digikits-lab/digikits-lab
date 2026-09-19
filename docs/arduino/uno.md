---
sidebar_position: 1
title: Arduino UNO
---
# Arduino UNO

O Arduino UNO é uma das placas mais utilizadas para aprendizado de eletrônica e programação.

## Principais recursos
- Microcontrolador ATmega328P
- 14 pinos digitais
- 6 entradas analógicas
- Comunicação USB

## Exemplo de LED
```cpp
void setup(){pinMode(LED_BUILTIN,OUTPUT);}
void loop(){digitalWrite(LED_BUILTIN,HIGH);delay(1000);digitalWrite(LED_BUILTIN,LOW);delay(1000);}
```
