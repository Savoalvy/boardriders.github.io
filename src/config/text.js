// src/config/text.js
const text = {
  header: {
    firstLayer: {
      location: 'Ваш регион доставки:',
      navigation: {
        shops: 'Магазины',
        help: 'Помощь',
        blog: 'Блог'
      },
      freeDelivery: 'Бесплатная доставка *',
      payment: 'Оплата при получении',
      purchaseReturns: 'Возврат в течение 14 дней'
    },
    secondLayer: {
      men: 'Мужчинам',
      women: 'Женщинам',
      children: 'Детям'
    },
    thirdLayer: {
      novelty: 'Новинки',
      snowboard: 'Сноуборд',
      skis: 'Лыжи',
      skate: 'Скейт',
      songboard: 'Лонгборд',
      sakeboard: 'Вейкборд',
      surf: 'Серф',
      sup: 'Sup',
      cloth: 'Одежда',
      shoes: 'Обувь',
      accessories: 'Аксессуары',
      brands: 'Бренды',
      sale: 'Распродажа'
    },
    selector: {
      brest: 'Брест',
      minsk: 'Минск',
      grodno: 'Гродно',
      mogilev: 'Могилев',
      vitebsk: 'Витебск',
      gomel: 'Гомель'
    }
  }
};

// Рекурсивная функция для маппинга текста
export const mapText = (textLayer) => {
  if (!textLayer || typeof textLayer !== 'object') return []; // Защита от null, undefined и не-объектов

  return Object.values(textLayer).flatMap((value) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      return mapText(value); // Рекурсивно обрабатываем вложенные объекты
    }
    return { text: value, href: '#' }; // Для простых значений
  });
};

export default text;
