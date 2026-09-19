const sidebars={tutorialSidebar:['intro',{type:'category',label:'Arduino',items:['arduino/uno','arduino/nano']},
{
  type: 'category',
  label: 'ESP32',
  items: [
    'esp32/intro',
    'esp32/devkit',
   {
      type: 'category',
      label: 'Exemplos',
      collapsible: true,
      collapsed: true,
  items: [
    'esp32/exemplos/blink',
    'esp32/exemplos/gpio',
  ],
},,
  ],
},{type:'category',label:'Sensores',items:['sensores/dht22','sensores/hc-sr04']},{type:'category',label:'Módulos',items:['modulos/rele','modulos/rfid']},'projetos','tutoriais','guias']};module.exports=sidebars;
