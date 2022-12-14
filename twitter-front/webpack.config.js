const path = require('path');

module.exports = {
    entry: './src/index.js', // Указываем точку входа - главный модуль приложения,
    // в который импортируются все остальные

    output: {
        path: path.resolve(__dirname, 'dist'), // Директория, в которой будет
        // размещаться итоговый бандл, папка dist в корне приложения
        clean: true, // Очищает директорию dist перед обновлением бандла
        // Свойство стало доступно с версии 5.20.0, до этого использовался
        // CleanWebpackPlugin
    },
    devtool: 'source-map',
    devServer: {
        hot: true, // Включает автоматическую перезагрузку страницы при изменениях
    }
}