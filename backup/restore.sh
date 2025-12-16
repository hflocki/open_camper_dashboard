#!/bin/sh

USB_DIR="/tmp/mountd/disk1_part1"
LATEST_BACKUP=$(ls -td $USB_DIR/glinet_config_* | head -1)

echo "--- Starte Wiederherstellung aus $LATEST_BACKUP ---"

# 1. Systempakete installieren (Python wird für die Brücke benötigt)
echo "Installiere Python und MQTT-Libraries..."
opkg update
opkg install python3 python3-pip mosquitto-ssl
pip install paho-mqtt

# 2. Bestehende Restores (Dashboard, Configs)
cp -r "$LATEST_BACKUP/www/dash" /www/
cp "$LATEST_BACKUP/etc_config/uhttpd" /etc/config/
cp "$LATEST_BACKUP/etc_config/mosquitto" /etc/config/

# --- NEU: 3. Autostart und Brücke wiederherstellen ---
echo "Stelle rc.local und mqtt_bridge.py wieder her..."
cp "$LATEST_BACKUP/system_scripts/rc.local" /etc/rc.local
[ -f "$LATEST_BACKUP/system_scripts/mqtt_bridge.py" ] && cp "$LATEST_BACKUP/system_scripts/mqtt_bridge.py" /root/

# Berechtigungen sicherstellen
chmod +x /etc/rc.local

# Services neu starten
/etc/init.d/uhttpd restart
/etc/init.d/mosquitto restart

# Brücke sofort im Hintergrund starten
python3 /root/mqtt_bridge.py &

echo "--- Wiederherstellung abgeschlossen ---"