## Utilizando o projeto no ionic em novo computador
- 1 - Baixe ou clone este projeto
- 2 - Navegue até dentro da pasta pelo terminal (CMD)
- 3 - Certifique-se de tenha instalado o NodeJS mais atualizado do site oficial: https://nodejs.org/en/download/
- 4 - Faça o download das dependencias através do comando: npm install *cerca de 160MB*. (ele captura as dependencias do projeto que utilizam as bibliotecas. Estas mesmas não acompanham no projeto por se tratar de arquivos grandes)
- 5 - Para rodar o aplicativo, navegue dentro da pasta do projeto através do console, e execute o seguinte comando: ionic serve

## Obs.: Constantemente armazena cache
Caso queira fazer alterações no Angular, TypeScript e Html, recomenda-se limpar o cache, ou simplesmente reiniciar o servidor

## Gerar APK
Caso faça modificações e queira gerar APK  para Android, certifique-se de que tenha instalado o Android Studio: https://developer.android.com/studio/install.html?hl=pt-br
Certifique-se de que todas as atualizações estejam instaladas adtravés do SDK Manager: Abra o Android Studio -> Configure -> SDK Manager ->  Abas: Appareance & Behavior -> System Settings -> Android SDK. Dentro selecione a aba SDK Tools
Todas as checkbox com "-" foram assinaladas para "Check": 
- Android SKD Build-Tools
- Android Emulator
- Android SKD Platform-Tools
- Android  SDK Tools
- Google Play APK Expansion Library
- Instant Apps Development SDK
- Intel x86 Emulator Accelerator
- Support Repository.

- Faça a instalação de todas as atualizações
 
 Para gerar o APK, utilize o seguinte comando: ionic cordova build android.
