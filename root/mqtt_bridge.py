import paho.mqtt.client as mqtt
import json

# --- KONFIGURATION ---
BROKER = "127.0.0.1"
PORT = 1883
USER = "mqttcaruser"
PASS = "eUZT2zR9VG4rJ3"

SOURCE_TOPIC = "home/OMG_ATOM_L/BTtoMQTT/+"
TARGET_BASE = "camper/status/govee/"

def on_connect(client, userdata, flags, rc):
    print(f"Govee-Filter aktiv. Höre auf {SOURCE_TOPIC}...")
    client.subscribe(SOURCE_TOPIC)

def on_message(client, userdata, msg):
    try:
        # JSON Payload parsen
        data = json.loads(msg.payload.decode('utf-8'))
        
        # PRÜFUNG: Nur Govee-Markengeräte verarbeiten
        if data.get("brand") == "Govee":
            sensor_id = msg.topic.split('/')[-1]
            
            # Neues, schlankes JSON-Objekt bauen
            filtered_data = {
                "tempc": data.get("tempc"),
                "hum": data.get("hum"),
                "batt": data.get("batt")
            }
            
            new_topic = f"{TARGET_BASE}{sensor_id}"
            new_payload = json.dumps(filtered_data)
            
            # Mit Retain senden
            client.publish(new_topic, new_payload, retain=True, qos=0)
            
            print(f"Filter & Retain: {sensor_id} -> {filtered_data}")
            
    except Exception as e:
        # Falls es kein JSON ist oder Felder fehlen, einfach ignorieren
        pass

client = mqtt.Client()
client.username_pw_set(USER, PASS)
client.on_connect = on_connect
client.on_message = on_message

client.connect(BROKER, PORT, 60)
client.loop_forever()