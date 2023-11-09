import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

export default Register = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cep, setCEP] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');

  const handleCEPChange = async (inputCEP) => {
    setCEP(inputCEP);
    if (inputCEP.length === 8) { // Validar se o CEP tem 8 dígitos
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${inputCEP}/json/`);
        const { logradouro, localidade, uf } = response.data;
        setEndereco(`${logradouro}, ${localidade} - ${uf}`);
      } catch (error) {
        console.error('Erro ao consultar o CEP:', error);
      }
    }
  };

  const handleSubmit = () => {
    // Aqui você pode implementar a lógica para submeter os dados do formulário
    // Por exemplo, enviar os dados para uma API ou realizar ações necessárias
    // com os dados fornecidos.
    console.log('Dados do formulário:');
    console.log('Nome:', nome);
    console.log('Sobrenome:', sobrenome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('CEP:', cep);
    console.log('Endereço:', endereco);
    console.log('Número:', numero);
  };

  return (
    <View>
      <Text>Nome</Text>
      <TextInput value={nome} onChangeText={setNome} />

      <Text>Sobrenome</Text>
      <TextInput value={sobrenome} onChangeText={setSobrenome} />

      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Text>Senha</Text>
      <TextInput secureTextEntry value={senha} onChangeText={setSenha} />

      <Text>Confirmar Senha</Text>
      <TextInput secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />

      <Text>CEP</Text>
      <TextInput value={cep} onChangeText={handleCEPChange} />

      <Text>Endereço</Text>
      <TextInput value={endereco} editable={false} placeholder='Endereço' />

      <Text>Número</Text>
      <TextInput value={numero} onChangeText={setNumero} />

      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
};
