import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Divider from '../Divider/Divider';
import ModalUserTextInput
  from './components/ModalUserTextInput/ModalUserTextInput';

export default function SettingsEditModal({ modalVisible, setModalVisible, onSubmit }) {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <TouchableOpacity
        style={styles.centeredView}
        onPress={() => setModalVisible(!modalVisible)}>
        <TouchableOpacity style={styles.modalView} activeOpacity={1}>
          <View style={styles.modalMainContentWrapper}>
            <View style={styles.modalTextWrapper}>
              <Text style={styles.modalHeader}>User Name</Text>
              <Text style={styles.modalSubHeader}>Change the user name</Text>
            </View>
            <ModalUserTextInput placeholder='Enter your new name here' />
          </View>
          <Divider />
          <Pressable onPress={() => onSubmit()}>
            <Text style={styles.modalSubmitButtonText}>Apply</Text>
          </Pressable>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    width: '70%',
    backgroundColor: '#191919',
    opacity: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  modalSubmitButton: {
    padding: '0 10',
    elevation: 2
  },
  modalSubmitButtonText: {
    fontFamily: 'SF-Pro-Text-Bold',
    padding: 12,
    fontSize: 17,
    elevation: 2,
    color: '#0A84FF',
    textAlign: 'center'
  },
  modalMainContentWrapper: {
    display: 'flex',
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  modalTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5
  },
  modalHeader: {
    color: '#FFFFFF',
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 17,
    textAlign: 'center'
  },
  modalSubHeader: {
    color: '#FFFFFF',
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 13,
    textAlign: 'center'
  }
});
