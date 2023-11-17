import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

import * as S from './styles'
import { ScrollView } from 'react-native-gesture-handler';

export default Register = () => {

  const navigation = useNavigation()

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

    console.log('Dados do formulário:');
    console.log('Nome:', nome);
    console.log('Sobrenome:', sobrenome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('CEP:', cep);
    console.log('Endereço:', endereco);
    console.log('Número:', numero);
  };

  // const userRegister = async (nome, sobrenome, email, senha, endereco, numero) {
  //   try {}
  // }

  return (
    <ScrollView>

      <S.Container>
        <View>
          <S.Label>Nome</S.Label>
          <S.Input value={nome} onChangeText={setNome} />
        </View>

        <View>
          <S.Label>Sobrenome</S.Label>
          <S.Input value={sobrenome} onChangeText={setSobrenome} />
        </View>

        <View>
          <S.Label>Email</S.Label>
          <S.Input value={email} onChangeText={setEmail} />
        </View>

        <View>
          <S.Label>Senha</S.Label>
          <S.Input secureTextEntry value={senha} onChangeText={setSenha} />
        </View>

        <View>
          <S.Label>Confirmar Senha</S.Label>
          <S.Input secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />
        </View>

        <View>
          <S.Label>CEP</S.Label>
          <S.Input value={cep} onChangeText={handleCEPChange} />
        </View>

        <View>
          <S.Label>Endereço</S.Label>
          <S.Input value={endereco} editable={false} placeholder='Endereço' />
        </View>

        <View>
          <S.Label>Número</S.Label>
          <S.Input value={numero} onChangeText={setNumero} />
        </View>

        <S.Button title="Cadastrar" onPress={handleSubmit}>
          <S.MyText $bold>Confirmar</S.MyText>
        </S.Button>

        <S.MyText style={{paddingTop: 15, fontSize: 16}} $dark>Já possui uma conta?</S.MyText>
        <S.Button $orange title="Entrar" onPress={() => navigation.navigate('login')}>
          <S.MyText $bold>Entrar</S.MyText>
        </S.Button>
      </S.Container>
    </ScrollView>
  );
};
