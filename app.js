import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Platform } from 'react-native';
import BarcodeGenerator from './BarcodeGenerator';
import BarcodeReader from './BarcodeReader';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [generatedBarcodeData, setGeneratedBarcodeData] = useState('');

  const handleGenerateBarcode = () => {
    setGeneratedBarcodeData(inputText);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text for barcode"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Generate Barcode" onPress={handleGenerateBarcode} />
      {generatedBarcodeData ? (
        <View style={styles.barcodeContainer}>
          <BarcodeGenerator data={generatedBarcodeData} setData={setGeneratedBarcodeData} />
        </View>
      ) : null}
      {Platform.OS !== 'web' && (
        <View style={styles.barcodeReaderContainer}>
          <BarcodeReader />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  barcodeContainer: {
    width: '100%',
    height: 250,
    marginTop: 20,
  },
  barcodeReaderContainer: {
    width: '100%',
    height: 400,
    marginTop: 20,
  },
});

export default App;