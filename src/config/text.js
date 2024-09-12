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
  },
  footer: {
    other: {
      referal: 'Подпишись на рассылку и получи',
      referalDiscount: 'скидку',
      app: 'Доступ к ранним релизам в приложении',
      contact: 'Контакты',
      phone: '+375 (29) 242-09-57',
      phoneText: 'Бесплатная горячая линия Ежедневно с 9 до 21',
      email: 'Контактный Email',
      emailText: 'info@brd.ru',
      right: '© 2020 Brd.ru. Все права защищены'
    },
    help: {
      help: 'Помощь',
      delivery: 'Доставка',
      payment: 'Оплата',
      refund: 'Возврат',
      reviews: 'Отзывы (2290)',
      discount: 'Акции и скидки'
    },
    company: {
      company: 'Конпания',
      contacts: 'Контакты',
      boardriders: 'О boardriders',
      vacancy: 'Вакансии',
      offer: 'Публичная офферта'
    },
    inc: {
      inc: 'Boardriders inc.',
      franchising: 'Франчайзинг',
      quiksilver: 'Quiksilver',
      roxy: 'Roxy',
      dc: 'DC Shoes',
      club: 'Boardriders Club'
    },
    socialLinks: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      twitch: 'https://twitch.tv',
      youtube: 'https://youtube.com',
      instagram: 'https://instagram.com'
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
