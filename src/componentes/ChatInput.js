// ChatInput.js
import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

const ChatInput = ({ onEnviarMensagem }) => {
    const [mensagem, setMensagem] = useState('');

    const handleEnviarMensagem = () => {
        if (mensagem.trim() !== '') {
            onEnviarMensagem({ nome: 'SeuNome:', texto: mensagem, hora: 'Agora' }); // Adiciona a nova mensagem à conversa
            setMensagem('');
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Digite sua mensagem"
                value={mensagem}
                onChangeText={text => setMensagem(text)}
            />
            <Pressable
                style={styles.botaoEnviar}
                onPress={handleEnviarMensagem}
            >
                <Text style={styles.textoBotao}>Enviar</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    input: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'lightgray',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'lightgray',
        height: 48,
    },
    botaoEnviar: {
        backgroundColor: '#03A64A',
        padding: 10,
        borderRadius: 16,
        marginLeft: 10,
    },
    textoBotao: {
        color: 'white',
    },
});

export default ChatInput;
