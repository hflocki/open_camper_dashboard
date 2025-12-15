// =========================================================
// MQTT-Broker Konfiguration
// =========================================================
const MQTT_BROKER_IP = window.location.hostname; 
const MQTT_PORT = 9001; // Der Websocket-Port

// SICHERHEIT: HIER MÜSSEN IHRE ZUGANGSDATEN EINGEFÜGT WERDEN
const MQTT_USERNAME = "mqttcaruser";
const MQTT_PASSWORD = "eUZT2zR9VG4rJ3";

// =========================================================
// TOPIC DEFINITIONEN
// =========================================================

// --- Node-Name für dieses Testgerät (Basis für den Restart-Button) ---
const ESPHOME_NODE_TEST = "switch"; 

const BASE_TOPIC = `${ESPHOME_NODE_TEST}/switch/`;

// ---------------- LED 1 ----------------
const LED1_TOPIC_PREFIX = BASE_TOPIC + "led1/";
const LED1_SET_TOPIC = LED1_TOPIC_PREFIX + "command";
const LED1_STATE_TOPIC = LED1_TOPIC_PREFIX + "state";

// ---------------- LED 2 ----------------
const LED2_TOPIC_PREFIX = BASE_TOPIC + "led2/";
const LED2_SET_TOPIC = LED2_TOPIC_PREFIX + "command";
const LED2_STATE_TOPIC = LED2_TOPIC_PREFIX + "state";

// ---------------- System-Steuerung ----------------
// ESPHome Restart Topic: [NODE_NAME]/button/restart_switch/command
const RESTART_TEST_TOPIC = `${ESPHOME_NODE_TEST}/button/restart_switch/command`;

// ---------------- GOVEE TEST SENSOR ----------------
// BITTE ANPASSEN: Dies muss durch das tatsächliche Govee Topic ersetzt werden!
const GOVEE_TEMP_TOPIC = "home/OMG_ATOM_L/BTtoMQTT/A4C1381EA678";