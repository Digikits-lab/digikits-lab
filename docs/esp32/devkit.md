---
sidebar_position: 2
title: ESP32 DevKit V1
---

# ESP32 DevKit V1 — 30 pinos

A **ESP32 DevKit V1** é uma placa de desenvolvimento baseada no módulo **ESP32-WROOM-32**, muito utilizada em projetos de IoT, automação, robótica, sensores e sistemas conectados à Internet.

Esta documentação utiliza como referência a **versão de 30 pinos mostrada nesta página**.

> **Atenção:** existem diversas placas comercializadas como "ESP32 DevKit". O layout e a pinagem podem variar entre fabricantes e versões.

## Principais características

- Microcontrolador ESP32-WROOM-32
- CPU dual-core Xtensa LX6
- Frequência de até 240 MHz
- Wi-Fi 2,4 GHz
- Bluetooth Classic e BLE
- GPIOs digitais
- Entradas analógicas ADC
- Saídas analógicas DAC
- PWM
- Touch capacitivo
- Interfaces UART, SPI e I²C
- Conexão USB para programação e comunicação serial
- Botão EN (reset)
- Botão BOOT
- Alimentação em 3,3 V
- Entrada VIN para alimentação de 5 V

---

## Pinout completo

A imagem abaixo mostra a pinagem da **ESP32 DevKit V1 de 30 pinos** utilizada como referência no DIGIKITS LAB.

![Pinout completo do ESP32 DevKit V1](/img/esp32/esp32-devkit-pinout.png)

---

## Especificações técnicas

| Característica | Especificação |
|---|---|
| Módulo | ESP32-WROOM-32 |
| CPU | Dual-core Xtensa LX6 |
| Frequência | Até 240 MHz |
| Memória SRAM | 520 KB |
| Flash | 4 MB, conforme a versão do módulo |
| Tensão lógica | 3,3 V |
| Wi-Fi | 802.11 b/g/n — 2,4 GHz |
| Bluetooth | Bluetooth Classic + BLE |
| ADC | 12 bits |
| DAC | 8 bits |
| PWM | LEDC |
| Interfaces | UART, SPI, I²C, I²S |
| USB | Micro-USB |
| Alimentação | USB ou VIN |

As características do ESP32-WROOM-32 são definidas pela documentação da Espressif. :contentReference[oaicite:0]{index=0}

---

# GPIOs

Os GPIOs do ESP32 podem desempenhar diferentes funções dependendo da configuração utilizada pelo programa.

A GPIO Matrix permite direcionar diversos sinais de periféricos para diferentes GPIOs. :contentReference[oaicite:1]{index=1}

## GPIOs disponíveis na placa

| Pino da placa | GPIO | Observação |
|---|---:|---|
| D0 | GPIO0 | Strapping / BOOT |
| D1 | GPIO1 | TX0 |
| D2 | GPIO2 | Strapping |
| D3 | GPIO3 | RX0 |
| D4 | GPIO4 | GPIO / Touch |
| D5 | GPIO5 | Strapping / SPI |
| D12 | GPIO12 | ADC2 / Strapping |
| D13 | GPIO13 | ADC2 / Touch |
| D14 | GPIO14 | ADC2 / Touch |
| D15 | GPIO15 | ADC2 / Strapping |
| D16 | GPIO16 | UART2 RX |
| D17 | GPIO17 | UART2 TX |
| D18 | GPIO18 | SPI SCK |
| D19 | GPIO19 | SPI MISO |
| D21 | GPIO21 | I²C SDA |
| D22 | GPIO22 | I²C SCL |
| D23 | GPIO23 | SPI MOSI |
| D25 | GPIO25 | ADC2 / DAC1 |
| D26 | GPIO26 | ADC2 / DAC2 |
| D27 | GPIO27 | ADC2 / Touch |
| D32 | GPIO32 | ADC1 / Touch |
| D33 | GPIO33 | ADC1 / Touch |
| D34 | GPIO34 | Somente entrada |
| D35 | GPIO35 | Somente entrada |
| VP | GPIO36 | Somente entrada / ADC |
| VN | GPIO39 | Somente entrada / ADC |

Os GPIOs 34 a 39 são somente de entrada e não possuem pull-up/pull-down interno controlável por software. :contentReference[oaicite:2]{index=2}

---

# Pinos somente de entrada

Os seguintes GPIOs não podem ser utilizados como saída digital:

```text
GPIO34
GPIO35
GPIO36
GPIO39
