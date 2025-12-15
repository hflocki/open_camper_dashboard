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

const APP_NAME = "Camper Dashboard";

// **********************************************
// --- ESPHome Node Namen ---
// **********************************************
const ESPHOME_NODE_HEATER = "smartavan-heater";
const ESPHOME_NODE_FAN    = "maxxfan";
const ESPHOME_NODE_GPS    = "espgeopos";
const ESPHOME_NODE_TEMP   = "esptemp";
const ESPHOME_NODE_WATER  = "fuellstand";

// Node ID und Basis-Topic für das Wassersystem
const WATER_NODE_ID = "2726"; 
const WATER_NODE_SEC = "1712"; 
const MQTT_ROOT_ID = "7fc5b1c2-70d0-4fe1-90a5-089e87aa316d";
const WATER_MQTT_BASE = `toc/nodes/${WATER_NODE_ID}`; 


// **********************************************
// --- Topics für Allgemeine LEDs & System (LWT) ---
// **********************************************

const HEATER_STATE_TOPIC = `${ESPHOME_NODE_HEATER}/status`;
const ESPGEOPOS_STATE_TOPIC = `${ESPHOME_NODE_GPS}/status`;
const MAXXFAN_STATE_TOPIC = `${ESPHOME_NODE_FAN}/status`;
const ESPTEMP_STATE_TOPIC = `${ESPHOME_NODE_TEMP}/status`;
const CP_PLUS_ALIVE_TOPIC = `truma/cp_plus/alive`;

const WATERLEVEL_STATUS_TOPIC = `${WATER_MQTT_BASE}/mqttconnected`;

// **********************************************
// --- Topics für Status-Anzeige (index.html) ---
// **********************************************

// --- TRUMA/Heizung ---
const HEATER_SETPOINT_TOPIC = `${ESPHOME_NODE_HEATER}/sensor/setpoint_temp/state`;
const HEATER_CURRENT_TOPIC = `${ESPHOME_NODE_HEATER}/sensor/heater_current_temp/state`;

// --- GPS/Lage ---
const GPS_TEMP_TOPIC = `${ESPHOME_NODE_GPS}/sensor/temp_external/state`;
const GPS_HUMIDITY_TOPIC = `${ESPHOME_NODE_GPS}/sensor/humidity_external/state`;
const GPS_PITCH_TOPIC = `${ESPHOME_NODE_GPS}/sensor/pitch_sensor/state`;
const GPS_ROLL_TOPIC = `${ESPHOME_NODE_GPS}/sensor/roll_sensor/state`;
const GPS_LAT_TOPIC = `${ESPHOME_NODE_GPS}/sensor/latitude/state`;
const GPS_LON_TOPIC = `${ESPHOME_NODE_GPS}/sensor/longitude/state`;
const GPS_ALT_TOPIC = `${ESPHOME_NODE_GPS}/sensor/altitude/state`;
const GPS_SPEED_TOPIC = `${ESPHOME_NODE_GPS}/sensor/speed_kph/state`;
const GPS_SAT_TOPIC = `${ESPHOME_NODE_GPS}/sensor/satellites/state`;

// --- MAXXFAN ---
const MAXXFAN_FAN_STATE_TOPIC = `${ESPHOME_NODE_FAN}/fan/maxxair_fan_id/state`;
const MAXXFAN_LID_STATE_TOPIC = `${ESPHOME_NODE_FAN}/cover/maxxair_lid/state`;
const MAXXFAN_DIRECTION_TOPIC = `${ESPHOME_NODE_FAN}/select/maxxair_direction/state`;
const MAXXFAN_AUTO_STATE_TOPIC = `${ESPHOME_NODE_FAN}/switch/auto_mode/state`;
const MAXXFAN_CEILING_STATE_TOPIC = `${ESPHOME_NODE_FAN}/switch/ceiling_fan_mode/state`;

// --- WASSERLevel AtomS3 (separate Topics) ---
const FRESH_WATER_PERCENT_TOPIC = `${WATER_MQTT_BASE}/levelPercent`; 
const FRESH_WATER_VOLUME_TOPIC  = `${WATER_MQTT_BASE}/levelVolume`;  
const FRESH_WATER_ADC_TOPIC     = `${WATER_MQTT_BASE}/adc`;          


// **********************************************
// --- Topics für Steuerungs-Befehle (control.html) ---
// **********************************************

// --- MAXXFAN Commands ---
const MAXXFAN_LID_COMMAND_TOPIC = `${ESPHOME_NODE_FAN}/cover/maxxair_lid/command`;
const MAXXFAN_SPEED_SET_TOPIC = `${ESPHOME_NODE_FAN}/number/speed/command`;
const MAXXFAN_DIRECTION_SET_TOPIC = `${ESPHOME_NODE_FAN}/select/maxxair_direction/command`;
const MAXXFAN_AUTO_COMMAND_TOPIC = `${ESPHOME_NODE_FAN}/switch/auto_mode/command`;
const MAXXFAN_CEILING_COMMAND_TOPIC = `${ESPHOME_NODE_FAN}/switch/ceiling_fan_mode/command`;

// **********************************************
// --- Topics für Licht & Heizung Steuerung ---
// **********************************************
const SETPOINT_SET_TOPIC = `${ESPHOME_NODE_HEATER}/number/set_temp/command`;
const LIGHT_SET_TOPIC    = `${ESPHOME_NODE_HEATER}/switch/main_light/command`;

// **********************************************
// --- Topics für Kalibrierung (COMMANDS) ---
// **********************************************

// --- GPS/Lage Kalibrierung ---
const GPS_CALIBRATE_ROLL_TOPIC = `${ESPHOME_NODE_GPS}/button/calibrate_roll/command`;
const GPS_CALIBRATE_PITCH_TOPIC = `${ESPHOME_NODE_GPS}/button/calibrate_pitch/command`;

// --- WASSER KALIBRIERUNG TOPICS ---
const CALIBRATE_WATER_FULL_TOPIC = `${WATER_MQTT_BASE}/button/wasser_voll_kalibrieren/command`; 
const CALIBRATE_WATER_EMPTY_TOPIC = `${WATER_MQTT_BASE}/button/wasser_leer_kalibrieren/command`;

// **********************************************
// --- Topics für System-Steuerung (Neustart) ---
// **********************************************
const RESTART_HEATER_TOPIC = `${ESPHOME_NODE_HEATER}/button/restart_switch/command`;
const RESTART_FAN_TOPIC    = `${ESPHOME_NODE_FAN}/button/restart_switch/command`;
const RESTART_GPS_TOPIC    = `${ESPHOME_NODE_GPS}/button/restart_switch/command`;
const RESTART_TEMP_TOPIC   = `${ESPHOME_NODE_TEMP}/button/restart_switch/command`;
const RESTART_WATER_TOPIC  = `${ESPHOME_NODE_WATER}/button/restart_switch/command`;


// **********************************************
// --- Topics für Goovee Sensoren  ---
// **********************************************
const GOVEE_TEMP_TOPIC_1 = "home/OMG_ATOM_L/BTtoMQTT/A4C1381EA678"; 
const GOVEE_TEMP_TOPIC_2 = "home/OMG_ATOM_L/BTtoMQTT/A4C138C2EF51"; 
const GOVEE_TEMP_TOPIC_3 = "home/OMG_ATOM_L/BTtoMQTT/A4C1381EA678_3";