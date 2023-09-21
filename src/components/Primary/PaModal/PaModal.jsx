import React from 'react';
import { Modal, StyleSheet, TouchableOpacity } from 'react-native';

export default function PaModal(props) {
  const { modalVisible, setModalVisible, isCendered, children } = props;

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <TouchableOpacity
        style={[styles.centeredView, {marginBottom: isCendered ? 22 : 250}]}
        onPress={() => setModalVisible(!modalVisible)}>
        <TouchableOpacity style={styles.modalView} activeOpacity={1}>
          {children}
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
  }
});
