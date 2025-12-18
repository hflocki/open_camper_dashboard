import paho.mqtt.client as mqtt
import json
from datetime import datetime

# --- KONFIGURATION ---
BROKER = "127.0.0.1"
PORT = 1883
USER = "xxxxx" #MQTT User vom Broker hier eintragen
PASS = "xxxxx" #MQTT Passwort vom Broker hier eintragen

# Das Topic, auf dem das Gateway alle BT-Geräte meldet
SOURCE_TOPIC = "home/OMG_ATOM_L/BTtoMQTT/+"
# Das neue Ziel-Topic für saubere Govee-Daten
TARGET_BASE = "camper/status/govee/"

def on_connect(client, userdata, flags, rc):
    print(f"Govee-Brücke verbunden (Status {rc}). Höre auf {SOURCE_TOPIC}...")
    client.subscribe(SOURCE_TOPIC)

def on_message(client, userdata, msg):
    try:
        # JSON Payload vom Gateway parsen
        data = json.loads(msg.payload.decode('utf-8'))
        
        # PRÜFUNG: Nur Geräte der Marke "Govee" verarbeiten
        if data.get("brand") == "Govee":
            sensor_id = msg.topic.split('/')[-1]
            now = datetime.now().strftime("%H:%M")
            
            # Neues, schlankes JSON-Objekt mit Zeitstempel bauen
            filtered_data = {
                "tempc": data.get("tempc"),
                "hum": data.get("hum"),
                "batt": data.get("batt"),
                "time": now
            }
            
            # Ziel-Topic erstellen (z.B. camper/status/govee/A4C1381EA678)
            new_topic = f"{TARGET_BASE}{sensor_id}"
            new_payload = json.dumps(filtered_data)
            
            # Mit RETAIN senden, damit die Werte beim Laden der Seite sofort da sind
            client.publish(new_topic, new_payload, retain=True, qos=0)
            
            print(f"Govee-Fix: {sensor_id} aktualisiert um {now}")
            
    except Exception as e:
        # Fehler ignorieren (z.B. wenn Payload kein gültiges JSON ist)
        pass

# MQTT Client Setup
client = mqtt.Client()
client.username_pw_set(USER, PASS)
client.on_connect = on_connect
client.on_message = on_message

# Verbindung herstellen und Endlosschleife starten
try:
    client.connect(BROKER, PORT, 60)
    client.loop_forever()
except Exception as e:
    print(f"Verbindungsfehler: {e}")
