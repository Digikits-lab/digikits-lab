---
sidebar_position: 2
title: ESP32 DevKit
---
# ESP32 DevKit

Uma placa de desenvolvimento prática para projetos de IoT, automação e prototipagem.

## Aplicações
- Internet das Coisas (IoT)
- automação residencial
- monitoramento de sensores
- servidores web locais

## Exemplo Wi‑Fi
```cpp
#include <WiFi.h>
const char* ssid="SUA_REDE";
const char* password="SUA_SENHA";
void setup(){Serial.begin(115200);WiFi.begin(ssid,password);while(WiFi.status()!=WL_CONNECTED){delay(500);Serial.print(".");}Serial.println(WiFi.localIP());}
void loop(){}
```
