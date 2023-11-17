import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const Payment = () => {
  const [numeroCartao, setNumeroCartao] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [cvv, setCvv] = useState('');

  const processarPagamento = async () => {
    try {
      const dadosPagamento = {
        numeroCartao,
        dataValidade,
        cvv,
      };

      const resposta = await axios.post('http://localhost:3000/api/pagamento', dadosPagamento);

      if (resposta.data.pagamentoSucesso) {
        Alert.alert('Pagamento bem-sucedido!');
      } else {
        Alert.alert('Falha no pagamento. Tente novamente.');
      }
    } catch (error) {
      Alert.alert('Erro ao processar o pagamento. Tente novamente mais tarde.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Número do cartão"
        value={numeroCartao}
        onChangeText={setNumeroCartao}
      />
      <TextInput
        placeholder="Data de validade"
        value={dataValidade}
        onChangeText={setDataValidade}
      />
      <TextInput
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
      />
      <Button title="Pagar" onPress={processarPagamento} />
    </View>
  );
};

export default Payment;
