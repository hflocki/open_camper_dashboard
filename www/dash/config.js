/*
 * MQTT-Konfiguration für Camper Dashboard
 * Speichern als: config.js
 */

// **********************************************
// --- Allgemeine MQTT & App Einstellungen ---
// **********************************************

const WS_HOST = window.location.hostname; //IP adress local and tailscale
const WS_PORT = 9001;              // WebSocket Port des Brokers
const WS_PATH = "/";

const MQTT_USERNAME = "mqttcaruser";
const MQTT_PASSWORD = "eUZT2zR9VG4rJ3";

/*
 * Die ClientID muss einzigartig sein, daher wird sie im HTML/JS-Code generiert.
 * Dieser Pfad wird NICHT in der HTML-Datei verwendet, dient nur als Referenz.
 * const clientId = "webClient_" + Math.random().toString(16).substr(2, 8);
 */

const APP_NAME = "Camper Dashboard";

// **********************************************
// --- ESPHome Node Namen ---
// **********************************************
const ESPHOME_NODE_HEATER = "smartavan-heater";
const ESPHOME_NODE_FAN    = "maxxfan";
const ESPHOME_NODE_GPS    = "espgeopos";
const ESPHOME_NODE_TEMP   = "esptemp";
const ESPHOME_NODE_WATER  = "fuellstand";

// Node ID und Basis-Topic für das Wassersystem (toc/nodes/8673...)
const WATER_NODE_ID = "09c6"; 
const WATER_MQTT_BASE = `toc/nodes/${WATER_NODE_ID}`;


// **********************************************
// --- Topics für Allgemeine LEDs & System (LWT) ---
// **********************************************

// Status-Topics für die LEDs (Last Will and Testament - LWT)
const HEATER_STATE_TOPIC    = `${ESPHOME_NODE_HEATER}/status`;
const ESPGEOPOS_STATE_TOPIC = `${ESPHOME_NODE_GPS}/status`; 
const MAXXFAN_STATE_TOPIC   = `${ESPHOME_NODE_FAN}/status`; 
const ESPTEMP_STATE_TOPIC   = `${ESPHOME_NODE_TEMP}/status`; 
const CP_PLUS_ALIVE_TOPIC   = `${ESPHOME_NODE_HEATER}/binary_sensor/cp_plus_alive/state`;
const WATERLEVEL_STATUS_TOPIC = `${WATER_MQTT_BASE}/mqttconnected`;

// **********************************************
// --- Topics für Sensoren & Anzeigen ---
// **********************************************

// --- Heizung/Licht Topics (Node: smartavan-heater) ---
const HEATER_SETPOINT_TOPIC = `${ESPHOME_NODE_HEATER}/number/set_temp/state`; 
const HEATER_CURRENT_TOPIC  = `${ESPHOME_NODE_HEATER}/sensor/current_temp/state`; 
const LIGHT_STATE_TOPIC     = `${ESPHOME_NODE_HEATER}/switch/main_light/state`;

// --- Umgebungssensoren Topics (Node: espgeopos) ---
const GPS_TEMP_TOPIC = `${ESPHOME_NODE_GPS}/sensor/espgeopos_umgebungstemperatur/state`;
const GPS_HUMIDITY_TOPIC = `${ESPHOME_NODE_GPS}/sensor/espgeopos_luftfeuchtigkeit/state`;

// --- Lage/GPS Topics (Node: espgeopos) ---
const GPS_PITCH_TOPIC = `${ESPHOME_NODE_GPS}/sensor/neigung_vorne_hinten/state`;
const GPS_ROLL_TOPIC = `${ESPHOME_NODE_GPS}/sensor/neigung_links_rechts/state`;
const GPS_LAT_TOPIC = `${ESPHOME_NODE_GPS}/sensor/espgeopos_latitude/state`;
const GPS_LON_TOPIC = `${ESPHOME_NODE_GPS}/sensor/espgeopos_longitude/state`;
const GPS_ALT_TOPIC = `${ESPHOME_NODE_GPS}/sensor/espgeopos_altitude/state`;
const GPS_SPEED_TOPIC = `${ESPHOME_NODE_GPS}/sensor/espgeopos_speed/state`;
const GPS_SAT_TOPIC = `${ESPHOME_NODE_GPS}/sensor/espgeopos_satellites/state`;

// Fan Component ID ist "maxxair_fan_id" laut YAML
//const MAXXFAN_LID_COMMAND_TOPIC     = `${ESPHOME_NODE_FAN}/cover/maxxair_lid/command`;
const MAXXFAN_AUTO_COMMAND_TOPIC    = `${ESPHOME_NODE_FAN}/switch/auto_fan/command`;
const MAXXFAN_CEILING_COMMAND_TOPIC = `${ESPHOME_NODE_FAN}/switch/ceiling_fan_mode/command`;

// Topics für Geschwindigkeit und Richtung (nehmen Standard ESPHome Fan Component Pfade an)
const MAXXFAN_SPEED_SET_TOPIC     = `${ESPHOME_NODE_FAN}/fan/maxxair_fan_id/set`; // Setzt Geschwindigkeit 0-100%
const MAXXFAN_DIRECTION_SET_TOPIC = `${ESPHOME_NODE_FAN}/fan/maxxair_fan_id/set_direction`; // Setzt FORWARD/REVERSE

// MaxxFan Status-Topics
const MAXXFAN_AUTO_STATE_TOPIC      = `${ESPHOME_NODE_FAN}/switch/auto_fan/state`;
const MAXXFAN_CEILING_STATE_TOPIC   = `${ESPHOME_NODE_FAN}/switch/ceiling_fan_mode/state`;
const MAXXFAN_DIRECTION_TOPIC       = `${ESPHOME_NODE_FAN}/text_sensor/maxxfan_direction_text/state`; // Status der Richtung

// Steuerung Topics (falls Sie diese später für control.html benötigen)
const MAXXFAN_FAN_COMMAND_TOPIC  = `${ESPHOME_NODE_FAN}/fan/maxxair_fan_id/command`;
const MAXXFAN_LID_COMMAND_TOPIC  = `${ESPHOME_NODE_FAN}/cover/maxxair_lid/command`;
const MAXXFAN_AUTO_COMMAND_TOPIC = `${ESPHOME_NODE_FAN}/switch/auto_fan/command`;
const MAXXFAN_CEILING_COMMAND_TOPIC = `${ESPHOME_NODE_FAN}/switch/ceiling_fan_mode/command`;

// **********************************************
// --- Topics für Licht & Heizung Steuerung ---
// **********************************************
const SETPOINT_SET_TOPIC = `${ESPHOME_NODE_HEATER}/number/set_temp/command`;
const LIGHT_SET_TOPIC    = `${ESPHOME_NODE_HEATER}/switch/main_light/command`;

// **********************************************
// --- Topics für System-Steuerung (Neustart) ---
// **********************************************
const RESTART_HEATER_TOPIC = `${ESPHOME_NODE_HEATER}/button/restart_switch/command`;
const RESTART_FAN_TOPIC    = `${ESPHOME_NODE_FAN}/button/restart_switch/command`;
const RESTART_GPS_TOPIC    = `${ESPHOME_NODE_GPS}/button/restart_switch/command`;
const RESTART_TEMP_TOPIC   = `${ESPHOME_NODE_TEMP}/button/restart_switch/command`;
const RESTART_WATER_TOPIC  = `${ESPHOME_NODE_WATER}/button/restart_switch/command`;


// --- WASSERLevel AtomS3 ---
const FRESH_WATER_STATE_TOPIC = `${WATER_MQTT_BASE}/wasser_stand_prozent/state`;
// --- WASSER KALIBRIERUNGS TOPICS ---
const CALIBRATE_WATER_FULL_TOPIC = `${WATER_MQTT_BASE}/button/wasser_voll_kalibrieren/command`;
const CALIBRATE_WATER_EMPTY_TOPIC = `${WATER_MQTT_BASE}/button/wasser_leer_kalibrieren/command`;

// (Zeroing) 
const GPS_CALIBRATE_ROLL_TOPIC = `${ESPHOME_NODE_GPS}/button/calibrate_imu_roll/command`; 
const GPS_CALIBRATE_PITCH_TOPIC = `${ESPHOME_NODE_GPS}/button/calibrate_imu_pitch/command`;
