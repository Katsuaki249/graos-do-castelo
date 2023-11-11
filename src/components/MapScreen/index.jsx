import React from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const address = 'Av. Dr. Alberto Sarmento, 1060 - Bonfim, Campinas - SP, 13070-711';
  const latitude = -22.891116977629064;
  const longitude = -47.07695294625134;

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title="Localização"
          description={address}
          onPress={openGoogleMaps}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: 'center',
    width: '90%',
    height: 200,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
