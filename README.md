# Chat App com React, Expo e Firebase

Este projeto é um Chat App desenvolvido em sala de aula utilizando React Native com Expo e Firebase. O objetivo do aplicativo é permitir que os usuários se comuniquem em tempo real através de mensagens de texto.

## Funcionalidades

- Autenticação de usuários utilizando o Firebase Authentication.
- Armazenamento de mensagens em tempo real utilizando o Firebase Realtime Database.
- Interface de usuário intuitiva e responsiva construída com React Native.
- Capacidade de enviar mensagens de texto para outros usuários em tempo real.

## Como Executar o Projeto

1. **Instalação das Dependências**: Certifique-se de ter o Node.js e o Expo CLI instalados em seu ambiente de desenvolvimento. Execute o seguinte comando para instalar as dependências do projeto:

    ```
    npm install
    ```

2. **Configuração do Firebase**: Crie um projeto no Firebase (https://console.firebase.google.com/) e obtenha as credenciais do seu projeto (apiKey, authDomain, databaseURL, etc.). Insira essas credenciais no arquivo `firebaseConfig.js` localizado na pasta `config`.

3. **Execução do Projeto**: Após instalar as dependências e configurar o Firebase, execute o seguinte comando para iniciar o servidor Expo:

    ```
    expo start
    ```

4. **Visualização do Aplicativo**: Use um emulador de dispositivo móvel ou o aplicativo Expo Go em seu dispositivo físico para visualizar o aplicativo em execução.

## Estrutura do Projeto

- **/components**: Contém os componentes React reutilizáveis utilizados na construção da interface de usuário.
- **/services**: Contém os serviços relacionados à autenticação e comunicação com o Firebase.
- **/config**: Contém arquivos de configuração, como `firebaseConfig.js`, que armazena as credenciais do Firebase.


