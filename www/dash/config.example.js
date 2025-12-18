/* config.js - Vollständige Camper-Konfiguration */

const WS_HOST = window.location.hostname;
const WS_PORT = 9001;
const WS_PATH = "/";
const MQTT_USERNAME = "xxxxxxx";
const MQTT_PASSWORD = "xxxxxxx";
const APP_NAME = "Camper Dashboard";

// --- ESPHome Node Namen ---
const ESPHOME_NODE_HEATER = "smartavan-heater";
const ESPHOME_NODE_FAN    = "maxxfan";
const ESPHOME_NODE_GPS    = "espgeopos";
const ESPHOME_NODE_TEMP   = "esptemp";
const ESPHOME_NODE_WATER  = "fuellstand";

// Node ID und Basis-Topic für das Wassersystem
const WATER_MQTT_BASE = "xxxxxxxxx-xxxx-xxxx-xxxxxxxxxxxxxx/toc/nodes/2726";

// --- Status Topics (LEDs) ---
const HEATER_STATE_TOPIC = `${ESPHOME_NODE_HEATER}/status`;
const ESPGEOPOS_STATE_TOPIC = `${ESPHOME_NODE_GPS}/status`;
const MAXXFAN_STATE_TOPIC = `${ESPHOME_NODE_FAN}/status`;
const ESPTEMP_STATE_TOPIC = `${ESPHOME_NODE_TEMP}/status`;
const CP_PLUS_ALIVE_TOPIC = `truma/cp_plus/alive`;
const WATERLEVEL_STATUS_TOPIC = `${WATER_MQTT_BASE}/mqttconnected`;

// --- Heizung / CP Plus ---
const HEATER_SETPOINT_TOPIC = `${ESPHOME_NODE_HEATER}/sensor/setpoint_temp/state`;
const HEATER_CURRENT_TOPIC = `${ESPHOME_NODE_HEATER}/sensor/heater_current_temp/state`;

// --- GPS / Lage ---
const GPS_PITCH_TOPIC = `${ESPHOME_NODE_GPS}/sensor/pitch_sensor/state`;
const GPS_ROLL_TOPIC = `${ESPHOME_NODE_GPS}/sensor/roll_sensor/state`;
const GPS_LAT_TOPIC = `${ESPHOME_NODE_GPS}/sensor/latitude/state`;
const GPS_LON_TOPIC = `${ESPHOME_NODE_GPS}/sensor/longitude/state`;
const GPS_ALT_TOPIC = `${ESPHOME_NODE_GPS}/sensor/altitude/state`;
const GPS_SPEED_TOPIC = `${ESPHOME_NODE_GPS}/sensor/speed_kph/state`;
const GPS_SAT_TOPIC = `${ESPHOME_NODE_GPS}/sensor/satellites/state`;

// --- MaxxFan ---
const MAXXFAN_FAN_STATE_TOPIC = `${ESPHOME_NODE_FAN}/fan/maxxair_fan_id/state`;
const MAXXFAN_LID_STATE_TOPIC = `${ESPHOME_NODE_FAN}/cover/maxxair_lid/state`;
const MAXXFAN_DIRECTION_TOPIC = `${ESPHOME_NODE_FAN}/select/maxxair_direction/state`;
const MAXXFAN_AUTO_STATE_TOPIC = `${ESPHOME_NODE_FAN}/switch/auto_mode/state`;
const MAXXFAN_CEILING_STATE_TOPIC = `${ESPHOME_NODE_FAN}/switch/ceiling_fan_mode/state`;

// --- WasserLevel Direkt-Topics (Wieder aktiviert) ---
const FRESH_WATER_PERCENT_TOPIC = `${WATER_MQTT_BASE}/levelPercent`; 
const FRESH_WATER_VOLUME_TOPIC  = `${WATER_MQTT_BASE}/levelVolume`;  
const FRESH_WATER_ADC_TOPIC     = `${WATER_MQTT_BASE}/adc`;     

// --- Govee Sensoren (3 Stück + 1 Innenraum) ---
const GOVEE_TEMP_TOPIC_1 = "camper/status/govee/A4C1381EA678"; 
const GOVEE_TEMP_TOPIC_2 = "camper/status/govee/A4C138C2EF51"; 
const GOVEE_TEMP_TOPIC_3 = "camper/status/govee/880F10857644";
const GEOPOS_TEMP_TOPIC = "espgeopos/sensor/temperature/state";
const GEOPOS_HUM_TOPIC  = "espgeopos/sensor/humidity/state";

// --- STEUERUNGS-BEFEHLE (Sehr wichtig für control.html) ---
const MAXXFAN_LID_COMMAND_TOPIC = `${ESPHOME_NODE_FAN}/cover/maxxair_lid/command`;
const MAXXFAN_SPEED_SET_TOPIC = `${ESPHOME_NODE_FAN}/number/speed/command`;
const MAXXFAN_DIRECTION_SET_TOPIC = `${ESPHOME_NODE_FAN}/select/maxxair_direction/command`;
const MAXXFAN_AUTO_COMMAND_TOPIC = `${ESPHOME_NODE_FAN}/switch/auto_mode/command`;
const MAXXFAN_CEILING_COMMAND_TOPIC = `${ESPHOME_NODE_FAN}/switch/ceiling_fan_mode/command`;
const SETPOINT_SET_TOPIC = `${ESPHOME_NODE_HEATER}/number/set_temp/command`;
const LIGHT_SET_TOPIC    = `${ESPHOME_NODE_HEATER}/switch/main_light/command`;

// --- Kalibrierung & System ---
const GPS_CALIBRATE_ROLL_TOPIC = `${ESPHOME_NODE_GPS}/button/calibrate_roll/command`;
const GPS_CALIBRATE_PITCH_TOPIC = `${ESPHOME_NODE_GPS}/button/calibrate_pitch/command`;
const CALIBRATE_WATER_FULL_TOPIC = `${WATER_MQTT_BASE}/button/wasser_voll_kalibrieren/command`; 
const CALIBRATE_WATER_EMPTY_TOPIC = `${WATER_MQTT_BASE}/button/wasser_leer_kalibrieren/command`;
const RESTART_HEATER_TOPIC = `${ESPHOME_NODE_HEATER}/button/restart_switch/command`;
const RESTART_FAN_TOPIC    = `${ESPHOME_NODE_FAN}/button/restart_switch/command`;
const RESTART_GPS_TOPIC    = `${ESPHOME_NODE_GPS}/button/restart_switch/command`;
const RESTART_TEMP_TOPIC   = `${ESPHOME_NODE_TEMP}/button/restart_switch/command`;
const RESTART_WATER_TOPIC  = `${ESPHOME_NODE_WATER}/button/restart_switch/command`;
