import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import db from '../componentes/servivices/firebaseConfi'
import { collection, addDoc } from "firebase/firestore"; 

const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const navigation = useNavigation();

    async function handleCadastro()  {

        // Validação do email com expressão regular
        const emailRegex = /@IFPR/i;
        if (emailRegex.test(email)) {
            console.log('Email válido:', email);
            console.log('Senha:', senha);
            console.log('Nome:', nome);
            
            // Mostra as informações cadastradas no console.log()
            console.log('Informações cadastradas:', { email, senha, nome });
                
             //firebase
            try {
                const docRef = await addDoc(collection(db, "usuarios"), {
                  email,
                  senha,
                  nome
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
              
            navigation.navigate('Login');
        } else {
            alert('Email inválido. Deve ser do IFPR.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={true}
                onChangeText={text => setSenha(text)}
                value={senha}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                onChangeText={text => setNome(text)}
                value={nome}
            />
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
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    input: {
        width: 327,
        height: 64,
        top: 480,
        left: 24,
        padding: '16px 0px 0px 0px',
        gap: 0,
        borderRadius: '16px 0px 0px 0px',
        border: '2px solid lightgray',
        opacity: 1,
        backgroundColor: 'lightgray',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#03A64A',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
});

export default Cadastro;
