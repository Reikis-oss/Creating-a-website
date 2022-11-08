'use strict';

let typeSite, 
    designSite, 
    adaptivitySite,
    summ,
    days,
    yes;

while ( true )
{  
    typeSite = prompt(`Выберите тип сайта:\n1 - Сайт визитка\n2 - Корпаративный сайт\n3 - Интернет магазин`, 1);

    if ( (typeSite == 1) || (typeSite == 2) ||(typeSite == 3) ) break;

    alert( "Ошибка. Выберите значения из предложеного списка\n'P.S. Писать нужно номер цифры'" ); 
};

while ( true )
{  
    designSite = prompt(`Выберите дизайн сайта:\n1 - Шаблонный\n2 - Уникальный\n3 - WOW-Дизайн`, 1);

    if ( (designSite == 1) || (designSite == 2) ||(designSite == 3) ) break;

    alert( "Ошибка. Выберите значения из предложеного списка\n'P.S. Писать нужно номер цифры'" ); 
};

while ( true )
{  
    adaptivitySite = prompt(`Выберите адаптивность сайта:\n1 - Только ПК\n2 - Только мобильный сайт\n3 - ПК + Мобильный`, 1);

    if ( (adaptivitySite == 1) || (adaptivitySite == 2) ||(adaptivitySite == 3) ) break;

    alert( "Ошибка. Выберите значения из предложеного списка\n'P.S. Писать нужно номер цифры'" ); 
};

summ = typeSite*5000 + designSite*5000 + adaptivitySite*5000;
days = typeSite*5 + designSite*5 + adaptivitySite*5

while (true)
{  
    yes = prompt(`Согласны ли вы с такими условиями:\nЦена: ${summ}р. \nВремя выполнения заказа: ${days} дней.\n1 - Да\n2 - Нет`, 1);

    if ( yes == 1 ) break;
    if ( yes == 2 )
    { 
        alert( "Попробуйте по другому собрать ваш заказ'" );
        window.location.reload();
        break;
    }
    
     alert( "Ошибка. Выберите значения из предложеного списка\n'P.S. Писать нужно номер цифры'" )
};

let serverMassiv = [];

    if(typeSite == 1)
        {
            serverMassiv[0] = "Сайт визитка"
        }
    else if (typeSite == 2)
        {
              serverMassiv[0] = "Корпаративный сайт"  
        }
    else if (typeSite == 3)
        {
              serverMassiv[0] = "Интернет магазин"  
        }
    if (designSite == 1)
        {
            serverMassiv[1] = "Шаблонный"
        }
    else if (designSite == 2)
        {
              serverMassiv[1] = "Уникальный"  
        }
    else if (designSite == 3)
        {
              serverMassiv[1] = "WOW-Дизайн"  
        }
    if (adaptivitySite == 1)
        {
            serverMassiv[2] = "Только ПК"
        }
    else if (adaptivitySite == 2)
        {
              serverMassiv[2] = "Только мобильный сайтй"  
        }
    else if (adaptivitySite == 3)
        {
              serverMassiv[2] = "ПК + Мобильный"  
        }

serverMassiv[3] = String(days);


let book = {
    type: serverMassiv[0],
    design: serverMassiv[1],
    adaptivity: serverMassiv[2],
    days: serverMassiv[3],
};
    
function createMessage(type, adaptivity, design, days){
    return `Тип сайта: ${type}, Дизайн сайта:  ${design}, Адаптивность сайта: ${adaptivity}, Дней на выполнение: ${days}`;
}

function showMessage(message)
{
    console.log(message);
}

function initMessage(type, adaptivity, design, days){
    showMessage(createMessage(type, adaptivity, design, days));
}

initMessage(book.type, book.adaptivity, book.design, book.days);












