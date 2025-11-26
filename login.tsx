// app/(auth)/login.tsx

import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ícones
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

// --- DEFINIÇÕES DE CORES ---
const COR_PRINCIPAL = '#E53935'; // Vermelho
const COR_SECUNDARIA = '#CCCCCC'; // Cinza Claro

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // === AUTENTICAÇÃO SIMULADA PARA MVP ===
    // Use 'admin' e '123' para passar
    if (email === 'admin' && senha === '123') {
      Alert.alert('Sucesso', 'Login efetuado! Redirecionando...');
      // Navega para o Dashboard (grupo de tabs) — navegue para a rota raiz do app (sem parênteses)
      router.replace('/');
    } else {
      Alert.alert('Erro', 'Credenciais inválidas. Tente admin e 123.');
    }
  };

  return (
    <View style={styles.container}>

      {/* 1. Área do Logo (Superior) */}
      <View style={styles.logoContainer}>
        <Image
          // O caminho depende de onde você salvou a imagem dentro de 'assets/'
          // Se o arquivo for 'logo_mp.png' e estiver em 'assets/images/'
          source={require('../../assets/images/logo_mp.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* 2. Título LOGIN */}
      <Text style={styles.loginTitle}>LOGIN</Text>

      {/* 3. Área Principal (Vermelha) */}
      <View style={styles.inputArea}>

        {/* Campo E-mail */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="email@exemplo.com"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <MaterialCommunityIcons name="email" size={20} color={COR_PRINCIPAL} style={styles.icon} />
        </View>

        {/* Campo Senha */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="senha"
            placeholderTextColor="#888"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
          <MaterialCommunityIcons name="lock" size={20} color={COR_PRINCIPAL} style={styles.icon} />
        </View>

        {/* Link Esqueceu a Senha */}
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Esqueci a Senha</Text>
        </TouchableOpacity>
      </View>

      {/* 4. Botão ENTRAR */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>ENTRAR</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_SECUNDARIA,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoContainer: {
    alignSelf: 'flex-start',
    marginTop: 40,
    marginBottom: 30,
    marginLeft: 10,
    // Adicione um pouco de padding/margin para o logo se necessário
  },
  logo: { // Estilo para a imagem do logo
    width: 60,
    height: 60,
  },
  loginTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COR_PRINCIPAL,
    marginBottom: 20,
  },
  inputArea: {
    width: '100%',
    backgroundColor: COR_PRINCIPAL,
    padding: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 40,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginLeft: 10,
    // O ícone deve ser branco, mas no mockup ele parece ser vermelho dentro da caixa branca.
    // Se quiser branco: color: 'white'
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: COR_PRINCIPAL,
    // Adiciona uma sombra para destacar o botão (opcional)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    // Fim da Sombra
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
    width: '80%',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
