import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

const Chat = () => {
    const [mensagem, setMensagem] = useState('');
    const [conversa, setConversa] = useState([
        { nome: 'Professor Ronan:', texto: 'Todos conseguiram fazer a atividade?', hora: '10:35' },
        { nome: 'Gideone:', texto: 'Claro professor, muito fácil!', hora: '10:50' },
        { nome: 'Fernanda:', texto: 'Sim professor, easy!', hora: '13:45' },
        { nome: 'Mathiro:', texto: 'Pai tá brabo, manda mais uma que eu tô com tempo sobrando.', hora: '16:00' }
    ]);

    const handleEnviarMensagem = () => {
        if (mensagem.trim() !== '') {
            const horaAtual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const novaMensagem = { nome: 'Admin', texto: mensagem, hora: horaAtual };
            setConversa([...conversa, novaMensagem]);
            setMensagem('');
        }
    };

    return (
        <View style={styles.container}>
            {/* Menu com opções de filtro */}
            <View style={styles.menu}>
                <Pressable onPress={() => console.log('Filtrar por todos')}>
                    <Text style={[styles.menuOption, { color: '#04BF8A' }]}>Todos</Text>
                </Pressable>
                <Pressable onPress={() => console.log('Filtrar por alunos')}>
                    <Text style={styles.menuOption}>Alunos</Text>
                </Pressable>
                <Pressable onPress={() => console.log('Filtrar por professores')}>
                    <Text style={styles.menuOption}>Professores</Text>
                </Pressable>
            </View>

            {/* Componente para exibir conversas */}
            <ScrollView style={styles.conversas}>
                {conversa.map((item, index) => (
                    <View key={index} style={[styles.balaoContainer, { alignItems: item.nome === 'Admin' ? 'flex-end' : 'flex-start' }]}>
                        <View style={[styles.balao, { backgroundColor: item.nome === 'Admin' ? '#202C33' : '#005C4B' }]}>
                            <Text style={[styles.nomeRemetente, { textAlign: item.nome === 'Admin' ? 'right' : 'left' }]}>
                                {item.nome}
                            </Text>
                            <Text style={styles.textoMensagem}>{item.texto}</Text>
                        </View>
                        <Text style={styles.textoHora}>{item.hora}</Text>
                    </View>
                ))}
            </ScrollView>

            <View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.inputContainer}
            >
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
            </KeyboardAvoidingView>
            </View>
      
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#03A64A',
        paddingVertical: 10,
        marginBottom: 20,
    },
    menuOption: {
        fontSize: 20,
        color: 'white',
    },
    conversas: {
        flex: 1,
        paddingHorizontal: 10,
    },
    balaoContainer: {
        marginBottom: 10,
    },
    balao: {
        borderRadius: 10,
        padding: 10,
        maxWidth: '70%',
    },
    nomeRemetente: {
        color: '#ffff',
        fontSize: 18,
        marginBottom: 5,
    },
    textoMensagem: {
        fontSize: 16,
        color: '#ffff',
    },
    textoHora: {
        textAlign: 'right',
        marginTop: 5,
        opacity: 0.6,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 64,
        paddingHorizontal: 16,
        backgroundColor: 'lightgray',
        borderRadius: 16,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: 'lightgray',
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

export default Chat;