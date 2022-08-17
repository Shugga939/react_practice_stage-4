# Practice task "Bastion group SPA"

## Deploy in [GH Pages](https://shugga939.github.io/react_practice_stage-4/)

#### Для реализации использовались:
 - React + Typescript
 - Redux Toolkit

### Задание со стажировки:
*Все элементы нефункциональны, кроме тех, которые описаны в задании.
##### 1. Сверстать страницы по макету и реализовать логику.
Ссылки в шапке (имитация админ-панели):
-- Типы продуктов - форма добавления типов продуктов (id + название)
-- Продукты - форма добавления продукта. (id + название + выбор типа продукта из предыдущего пункта + цена + ГОСТ + загрузка фотографии или вывод дефолтного изображения).
-- Товары - список добавленных товаров.
В каждой из форм реализовать валидацию данных.
Если в названии есть буква "о", то такой товар  - "хит". Если есть буква "а", то акция.

##### 2. Страница с добавленными товарами.
-- Отображение добавленнх товаров.
-- Кнопки +/- и добавление в корзину.
-- При добавлении в корзину в шапке у иконки изменяется значение.
-- Надписи Хит и Акция.
-- Над карточками список уникальных ГОСТОВ, согласно добавленным товарам.
-- Если выбран  ОДИН или несколько гостов. То производится фильтрация товаров по этим ГОСТАМ.
-- Также реализовать фильтрацию по цене и типу продукта.

##### 3. Корзина.
При клике на Корзину в шапке открывается страница Корзины с соответствующим списком товаров.
-- Реализовать функционал корзины, и автоматический подсчет суммы.
-- Реализовать валидацию формы покупателя.
-- При клике на Оформить заказ в консоль выводится перечь бронируемого и Данные о покупателе.
