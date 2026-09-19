---
sidebar_position: 1
title: Blink — Primeiro programa
---

# Blink — Primeiro programa com ESP32

O exemplo **Blink** é um dos primeiros programas que você pode testar em uma ESP32.

Neste exemplo vamos fazer um LED piscar utilizando o **GPIO2**.

## O que vamos aprender

- configurar um GPIO como saída;
- ligar um LED;
- desligar um LED;
- utilizar `digitalWrite()`;
- utilizar `delay()`.

---

## 🔌 Ligação

Para um LED externo:

```text
ESP32 GPIO2 ─── Resistor 220 Ω ─── LED ─── GND
