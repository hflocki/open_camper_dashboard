import paho.mqtt.client as mqtt
import json
from datetime import datetime

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
        data = json.loads(msg.payload.decode('utf-8'))
        
        if data.get("brand") == "Govee":
            sensor_id = msg.topic.split('/')[-1]
            
            # Zeitstempel generieren (z.B. 14:35)
            now = datetime.now().strftime("%H:%M")
            
            filtered_data = {
                "tempc": data.get("tempc"),
                "hum": data.get("hum"),
                "batt": data.get("batt"),
                "time": now  # Zeitstempel hinzufügen
            }
            
            new_topic = f"{TARGET_BASE}{sensor_id}"
            client.publish(new_topic, json.dumps(filtered_data), retain=True, qos=0)
            
    except Exception as e:
        pass

client = mqtt.Client()
client.username_pw_set(USER, PASS)
client.on_connect = on_connect
client.on_message = on_message

client.connect(BROKER, PORT, 60)
client.loop_forever()