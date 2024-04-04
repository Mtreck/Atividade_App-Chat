import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
         // Lógica de autenticação
    if (email.toLowerCase().includes('@ifpr')) { // Verifica se o email inclui "@ifpr" (case insensitive)
        console.log('Email:', email);
        navigation.navigate('Chat'); // Navega para a tela de chat
    } else {
        alert('Email inválido. Deve ser do IFPR.'); 
    }
    };

    const handleCadastro = () => {
        // Navega para a tela de cadastro
        navigation.navigate('Cadastro');
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                {/* Quadrado com bordas arredondadas como foto de perfil */}
                <View style={styles.profile}></View>
            </View>
            <Text style={styles.title}>Acesse o chat</Text>
            <Text style={styles.description}>Use seu e-mail e senha cadastrados para acessar o painel de conversas.</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={true}
                onChangeText={text => setSenha(text)}
            />
            <Pressable
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={handleCadastro}
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04BF8A',
    },
    profileContainer: {
        marginBottom: 20,
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'lightgray',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    description: {
        marginBottom: 20,
        textAlign: 'center',
        color: 'white',
    },
    input: {
        width: 327,
        height: 64,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: 10,
        backgroundColor: 'lightgray',
        borderRadius: 16,
    },
    button: {
        backgroundColor: '#03A64A',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});

export default Login;
