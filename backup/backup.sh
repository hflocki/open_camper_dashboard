#!/bin/sh

USB_DIR="/tmp/mountd/disk1_part1"
BACKUP_NAME="glinet_config_$(date +%Y%m%d_%H%M%S)"
BACKUP_DIR="$USB_DIR/$BACKUP_NAME"

echo "--- Starte Systemsicherung auf USB-Stick ---"

# Verzeichnisse vorbereiten
mkdir -p "$BACKUP_DIR/www"
mkdir -p "$BACKUP_DIR/etc_config"
mkdir -p "$BACKUP_DIR/system_scripts"

# 1-5. Bestehende Sicherungen (Dashboard, Mosquitto, uHTTPd)
cp -r /www/dash "$BACKUP_DIR/www/"
cp /etc/config/mosquitto "$BACKUP_DIR/etc_config/"
cp /etc/config/uhttpd "$BACKUP_DIR/etc_config/"

# --- NEU: 6. Autostart und Retain-Brücke sichern ---
echo "Sichere Autostart (/etc/rc.local) und Python-Brücke..."
cp /etc/rc.local "$BACKUP_DIR/system_scripts/"
[ -f /root/mqtt_bridge.py ] && cp /root/mqtt_bridge.py "$BACKUP_DIR/system_scripts/"

echo "Sicherung abgeschlossen: $BACKUP_NAME"