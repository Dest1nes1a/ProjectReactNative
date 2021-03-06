import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Model,
  SafeAreaView,
  Button,
  Modal,
  Text,
} from 'react-native';

const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Modal animationType="slide" transparent={false} visible={showModal}>
          <View style={styles.modal}>
        <Text>MODAL NAJA</Text>
            <Button
              title="Click to close Modal"
              onPress={() => setShowModal(!showModal)}
            />
          </View>
        </Modal>
        {/*/Updating the state to make Model Visible*/}
        <Button
          title='Click to Open Modal'
          onPress={() => setShowModal(!showModal)}
        />

      </View>
    </SafeAreaView>
  );
};

export default ModalExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0fff0',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
