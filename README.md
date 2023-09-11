# heroes3_demonology_calc

Сайт про механику демонения из игры Heroes of Might and Magic 3.

Сам сайт - [калькулятор демонения для HoMM3](https://freshhead.github.io/heroes3_demonology_calc/).

Демонение (демонология) это способность "Адских отродьев", на слэнге "Питлордов" или "Питов", создавать демонов из мёртвых отрядов союзников.
Сами "Питлорды" это существа пятого уровня в замке расы "Инферно".

![image](https://user-images.githubusercontent.com/5730634/148909876-352ef6c8-e51d-4696-9603-56962f359dcc.png)

Созданые таким образом демоны остаются и после боя. Поэтому с помощью демонения можно превращать других существ в демонов.

## Запуск
Для локального запуска используйте http-server, например serve. Так как используются es6 modules, напрямую открывать index.html в браузере нельзя.
Можно скачать и запустить сервер 2-мя командами:
```
npm install
npm start
```
## Запуск тестов
На текущий момент не используем каких-то стороних тест-раннеров. Тесты запускаем нодой, а тестируем стандартным нодовским assert.
Так как тест это es6 module, версия ноды должна быть не меньше 13. Сам запускал на v16.13.2.
Запустить тест можно командой:
```
npm test
```

## Формула демонения
Количество созданных существ определяется здоровьем убитого отряда и количеством "Питов". 

Нельзя надемонить больше существ, чем было в убитом отряде.

Количество демонов = здоровье отряда / 35, но не может быть больше (50 * количество "Питов" ) / 35.

Округление при делении всегда идёт в меньшую сторону.

## Совместимость с игрой
Данные для существ собраны для дополнения Horn Of the Abyss.

## Благодарность
Святослав Глитчев — за фавиконку.

Cyrus Annihilator — за спрайты из героев. Его сайт: https://cyrusannihilator.blogspot.com/.

## Технические вопросы
### Вопрос: Почему не используешь расширение *.mjs?
### Ответ:
Сервер моего текущего хостинга отдаёт *.mjs файлы с Content-Type: "application/octet-stream" что приводит к ошибкам в браузерах:

Firefox:
```
Loading module from “http://localhost/file.mjs” was blocked because of a disallowed MIME type (“application/octet-stream”).
Loading failed for the module with source “http://localhost/file.mjs”.
```
Chrome:
```
Failed to load module script: The server responded with a non-JavaScript MIME type of "application/octet-stream". Strict MIME type checking is enforced for module scripts per HTML spec.
```


