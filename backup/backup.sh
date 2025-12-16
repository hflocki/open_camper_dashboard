#!/bin/sh

# Pfad zum USB-Stick
USB_DIR="/tmp/mountd/disk1_part1"
BACKUP_NAME="glinet_config_$(date +%Y%m%d_%H%M%S)"
BACKUP_DIR="$USB_DIR/$BACKUP_NAME"

echo "--- Starte Systemsicherung auf USB-Stick: $BACKUP_DIR ---"

# 1. Saubere Verzeichnisstruktur erstellen
mkdir -p "$BACKUP_DIR/www"
mkdir -p "$BACKUP_DIR/etc_config"
mkdir -p "$BACKUP_DIR/etc_mosquitto"
mkdir -p "$BACKUP_DIR/scripts"
mkdir -p "$BACKUP_DIR/system"

# 2. Dashboard Dateien sichern
echo "Sichere Dashboard Dateien (/www/dash)..."
cp -r /www/dash "$BACKUP_DIR/www/"

# 3. Mosquitto & uHTTPd Konfiguration
echo "Sichere System-Konfigurationen (MQTT/Web)..."
cp /etc/config/mosquitto "$BACKUP_DIR/etc_config/"
cp /etc/config/uhttpd "$BACKUP_DIR/etc_config/"
[ -d /etc/mosquitto ] && cp -r /etc/mosquitto/* "$BACKUP_DIR/etc_mosquitto/"

# 4. Retain-Brücke und Autostart sichern (Korrektur der Pfade)
echo "Sichere MQTT-Retain-Brücke und Autostart..."
[ -f /root/mqtt_bridge.py ] && cp /root/mqtt_bridge.py "$BACKUP_DIR/scripts/mqtt_bridge.py"
cp /etc/rc.local "$BACKUP_DIR/system/rc.local"

echo "Sicherung abgeschlossen: $BACKUP_NAME"
echo "--- Ende Sicherung ---"