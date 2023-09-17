import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Divider from '../Divider/Divider';
import PaModal from '../PaModal/PaModal';
import ModalUserTextInput from './components/ModalUserTextInput/ModalUserTextInput';

export default function PaInputModal(props) {
  const { modalVisible, setModalVisible, onSubmit, header, subHeader, inputPlaceholder, multiline } = props;

  return (
    <PaModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <View style={styles.modalMainContentWrapper}>
        <View style={styles.modalTextWrapper}>
          <Text style={styles.modalHeader}>{header}</Text>
          <Text style={styles.modalSubHeader}>{subHeader}</Text>
        </View>
        <ModalUserTextInput multiline={multiline} placeholder={inputPlaceholder} />
      </View>
      <Divider />
      <Pressable style={styles.modalSubmitButton} onPress={() => onSubmit()}>
        <Text style={styles.modalSubmitButtonText}>Apply</Text>
      </Pressable>
    </PaModal>
  );
};

const styles = StyleSheet.create({
  modalSubmitButton: {
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
