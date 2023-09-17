import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Divider from '../Divider/Divider';
import PaModal from '../PaModal/PaModal';

export default function PaConfirm(props) {
  const { modalVisible, setModalVisible, onConfirmPress, onRejectPress, confirmText } = props;

  return (
    <PaModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <View style={styles.modalMainContentWrapper}>
        <View style={styles.modalTextWrapper}>
          <Text style={styles.modalHeader}>Are you sure</Text>
          <Text style={styles.modalSubHeader}>{confirmText}</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.actionButtonsWrapper}>
        <Pressable style={styles.modalSubmitButton} onPress={() => onConfirmPress()}>
          <Text style={[styles.modalSubmitButtonText, styles.confirmButton]}>Yes</Text>
        </Pressable>
        <Pressable style={styles.modalSubmitButton} onPress={() => onRejectPress()}>
          <Text style={[styles.modalSubmitButtonText, styles.rejectButton]}>No</Text>
        </Pressable>
      </View>
    </PaModal>
  );
};

const styles = StyleSheet.create({
  modalSubmitButton: {
    flex: 1
  },
  modalSubmitButtonText: {
    fontFamily: 'SF-Pro-Text-Bold',
    padding: 12,
    fontSize: 17,
    elevation: 2,
    textAlign: 'center'
  },
  confirmButton: {
    color: '#FF0000'
  },
  rejectButton: {
    color: '#0A84FF'
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
  },
  actionButtonsWrapper: {
    display: 'flex',
    flexDirection: 'row'
  }
});
