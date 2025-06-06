import prisma from '../src/lib/prisma';

const main = async () => {
  // await prisma.brand.createMany({
  //   data: [
  //     {
  //       name: "Comme des Garçons",
  //       description:
  //         "Культовый японский бренд, основанный Рэй Кавакубо в 1969 году. Известен своим деконструктивистским подходом к моде, асимметричными силуэтами, необработанными краями, экспериментальными кроями и концептуальными коллекциями. Comme des Garçons разрушает традиционные представления о красоте и форме, превращая одежду в арт-объекты. Бренд активно сотрудничает с другими дизайнерами и компаниями, создавая неожиданные коллаборации и расширяя границы моды.",
  //       imageUrl:
  //         "https://res.cloudinary.com/dr3gzvaqk/image/upload/v1740865700/Comme%20des%20Gar%C3%A7ons.png",
  //     },
  //     {
  //       name: "Yohji Yamamoto",
  //       description:
  //         "культовый японский дизайнер, известный своим авангардным подходом к моде. Основанный в 1981 году. одноимённый бренд сочетает деконструктивизм, сложные драпировки, асимметричные силуэты и преимущественно монохромную палитру, чаще всего в черных оттенках. Его стиль — это баланс между минимализмом и выразительной архитектурностью, свободой движений и загадочной, бунтарской элегантностью",
  //       imageUrl:
  //         "https://res.cloudinary.com/dr3gzvaqk/image/upload/v1740866515/Yohji%20Yamamoto.png",
  //     },
  //     {
  //       name: "Junya Watanabe",
  //       description:
  //         "японский дизайнер и ученик Рэй Кавакубо, запустивший свой одноимённый бренд под эгидой Comme des Garçons в 1992 году. Известен экспериментами с кроем, текстурами и инновационными материалами. В его коллекциях часто встречается сочетание классических силуэтов с технологичными элементами, вдохновение рабочей одеждой и милитари-эстетикой. переосмысляет традиционные формы, создавая футуристичные, но при этом носибельные вещи, сохраняя баланс.",
  //       imageUrl:
  //         "https://res.cloudinary.com/dr3gzvaqk/image/upload/v1740866620/Junya%20Watanabe.png",
  //     },
  //     {
  //       name: "Haider Ackermann",
  //       description:
  //         "колумбийский дизайнер, известный своим утонченным, но бунтарским стилем. Основанный в 2001 году, его одноимённый бренд сочетает сложные драпировки, точную архитектуру кроя и плавные, скульптурные силуэты. Ackermann мастерски работает с тканями, создавая одежду с ощущением легкости и движения, но при этом с подчеркнутой строгостью линий. Его эстетика — это сочетание андрогинности, роскоши и гранжа, что делает его фаворитом среди артистов и интеллектуалов. Бренд известен своей сдержанной цветовой палитрой, в которой доминируют глубокие, насыщенные оттенки.",
  //       imageUrl:
  //         "https://res.cloudinary.com/dr3gzvaqk/image/upload/v1740866735/Haider%20Ackermann.png",
  //     },
  //     {
  //       name: "Kiko Kostadinov",
  //       description:
  //         "болгарский дизайнер, известный своим инновационным подходом к мужской и женской моде. Основанный в 2016 году, его бренд сочетает сложные конструкции, асимметричные линии и функциональный дизайн. Вдохновляясь рабочей и униформенной одеждой, Кико использует технологичные ткани, нетрадиционные элементы кроя и нестандартные способы пошива. Его стиль — это баланс между утилитарностью и концептуальностью, где спортивные и повседневные силуэты приобретают архитектурную четкость.",
  //       imageUrl:
  //         "https://res.cloudinary.com/dr3gzvaqk/image/upload/v1740866814/Kiko%20Kostadinov.png",
  //     },
  //     {
  //       name: "Namacheko",
  //       description:
  //         "авангардный бренд, основанный в 2017 году братьями Диланом и Лео Лаки из Курдистана, выросшими в Швеции. Бренд сочетает архитектурный подход к крою, геометрические формы и тонкую работу с текстурами. Namacheko вдохновляется искусством, кино и культурными корнями основателей, создавая минималистичные, но сложные силуэты с неожиданными конструктивными элементами. Одежда бренда часто выглядит строгой и структурированной, но при этом сохраняет мягкость и текучесть линий.",
  //       imageUrl:
  //         "https://res.cloudinary.com/dr3gzvaqk/image/upload/v1740866932/Namacheko.png",
  //     },
  //     {
  //       name: "Maison Margiela",
  //       description:
  //         "французский бренд, основанный бельгийским дизайнером Мартином Маржелой в 1988 году. Известен концептуальным подходом к моде, деконструкцией, переосмыслением традиционных силуэтов и использованием нестандартных материалов. Маржела анонимно создавал коллекции, отдавая внимание вещам, а не дизайнеру, и активно работал с техникой upcycling, превращая винтажные вещи в новые арт-объекты. Фирменные элементы бренда — необработанные края, швы наружу, маскирующий белый цвет и отсутствие логотипа (его заменяют четыре белых стежка на спине вещей).",
  //       imageUrl:
  //         "https://res.cloudinary.com/dr3gzvaqk/image/upload/v1740867031/Maison%20Margiela.png",
  //     },
  //     {
  //       name: "Sankuanz",
  //       description:
  //         "китайский авангардный бренд, основанный дизайнером Шангуань Чжэ в 2013 году. Бренд известен своим футуристичным, экспериментальным стилем, сочетанием уличной моды, милитари-эстетики и технологий. Вдохновляясь молодежной культурой, постапокалиптическими образами и киберпанком, создаёт одежду с нетривиальными конструкциями, необычными материалами и смелыми графическими элементами.",
  //       imageUrl:
  //         "https://res.cloudinary.com/dr3gzvaqk/image/upload/v1740867363/Sankuanz.png",
  //     },
  //     {
  //       name: "Ludovic de Saint Sernin",
  //       description:
  //         "французский бренд, основанный одноимённым дизайнером в 2017 году. Известен своим минималистичным, но чувственным подходом к моде, объединяющим андрогинность, сексуальность и утонченность. Бренд разрушает границы между мужским и женским гардеробом, создавая одежду с облегающими силуэтами, открытой кожей и акцентом на телесность. Фирменные — прозрачные ткани, металлизированные текстуры, кожаные шнуровки, облегающие топы и брюки, а также использование кристаллов и вышивки.",
  //       imageUrl:
  //         "https://res.cloudinary.com/dr3gzvaqk/image/upload/v1740867689/Ludovic%20de%20Saint%20Sernin.png",
  //     },
  //     {
  //       name: "Ann Demeulemeester",
  //       description:
  //         "бельгийский бренд, основанный одноимённым дизайнером в 1985 году. Является одной из знаковых марок «Антверпенской шестерки», группы дизайнеров, которые изменили европейскую моду, привнеся в неё деконструктивизм и андрогинную эстетику. Бренд известен своим готическим романтизмом, многослойностью, асимметричным кроем и преобладанием черного цвета. Вещи сочетают бунтарскую эстетику панка с изысканной элегантностью: длинные плащи, свободные рубашки, приталенные жакеты, высокие сапоги и драпированные силуэты создают загадочный и утончённый образ.",
  //       imageUrl:
  //         "https://res.cloudinary.com/dr3gzvaqk/image/upload/v1740867768/Ann%20Demeulemeester.png",
  //     },
  //     {
  //       name: "Ulyana Sergeenko",
  //       description:
  //         "российский люксовый бренд, основанный дизайнером Ульяной Сергеенко в 2011 году. Известен своим утонченным, женственным стилем, сочетающим винтажную эстетику, русскую аристократичность и элементы высокой моды. Вдохновение черпается в ретро-образах, русской культуре, литературе и кино, что отражается в изысканных корсетах, пышных юбках, длинных перчатках и элегантных вечерних платьях.",
  //       imageUrl:
  //         "https://res.cloudinary.com/dr3gzvaqk/image/upload/v1740867861/Ulyana%20Sergeenko.png",
  //     },
  //     {
  //       name: "Raf Simons",
  //       description:
  //         "бельгийский бренд, основанный одноимённым дизайнером в 1995 году. Известен своим интеллектуальным подходом к моде, сочетанием минимализма, субкультурных мотивов и архитектурного кроя. Симонс начал карьеру как промышленный дизайнер, что повлияло на его точность форм и внимание к деталям. Основные черты бренда — андеграундная эстетика, оверсайз-силуэты, элементы панк- и гот-культуры.",
  //       imageUrl:
  //         "https://res.cloudinary.com/dr3gzvaqk/image/upload/v1740867960/Raf%20Simons.png",
  //     },
  //   ],
  // });
  await prisma.product.createMany({
    data: [
      {
        name: 'Пиджак с эффектом потертости',
        price: 149795,
        sizes: ['M', 'L', 'XL'],
        description:
          'черный, смесовая шерсть, зазубренные лацканы, эффект потертости, застежка на пуговицах спереди, прорезной карман на груди, два передних кармана с листочкой, передний карман с клапаном, подплечники, длинные рукава.',
        country: 'Япония',
        composition: 'Наружный Материал: Шерсть 97%, Полиуретан 3%, Подкладка: Купро 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741038861/noir/products/aehrwff7xpsdiorlb44y.webp',
        brandId: '67c3899f9a7d257532374940',
      },
      {
        name: 'Черное пальто CDG Pea из толстого твида с молнией',
        price: 141507,
        sizes: ['M', 'XL'],
        description:
          'Вареное шерстяное пальто с двойным покрытием и молнией на всю длину, чтобы снять нижнюю часть одежды. Полностью разделяемая верхняя и нижняя части.',
        country: 'Япония',
        composition: '100% шерсть',
        instructions: 'Специальная чистка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741038885/noir/products/nnq3xpmbbfekk5cbccrs.webp',
        brandId: '67c3899f9a7d257532374940',
      },
      {
        name: 'Черные брюки CDG с асимметричным подолом и молнией',
        price: 69866,
        sizes: ['M', 'L'],
        description:
          'Прямой крой с классическим поясом и универсальными молниями на штанине, укороченная посадка, застежка-молния вокруг ноги.',
        country: 'Япония',
        composition: '100% шерсть',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Низ',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741038959/noir/products/ssv1faz7cm2vsfju9xux.webp',
        brandId: '67c3899f9a7d257532374940',
      },
      {
        name: 'Зауженные брюки',
        price: 46349,
        sizes: ['S', 'M', 'L', 'XL'],
        description:
          'Черный, шерсть, ткань с твиловым переплетением, дизайн со вставками, средняя посадка, потайная застежка на молнии и пуговицах, петли для ремня, два прорезных кармана по бокам, два накладных кармана сзади, зауженный крой.',
        country: 'Япония',
        composition: '100% шерсть',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Низ',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741038979/noir/products/screruh7xrfyqh8ajfwg.webp',
        brandId: '67c3899f9a7d257532374940',
      },
      {
        name: 'Льняной пиджак с декоративными булавками',
        price: 326036,
        sizes: ['M'],
        description:
          'Черный, лен, декоративная булавка, зазубренные лацканы, застежка на пуговицах спереди, застежка на пуговицы сзади, длинные рукава реглан, манжеты с ремешками, нагрудный карман с клапаном, два кармана на пуговице по бокам, подкладка из хлопка.',
        country: 'Япония',
        composition: 'Наружный Материал: Лен 100%, Подкладка: Хлопок 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741039872/noir/products/Yohji%20Yamamoto/wjhk9vxzm7buaveovlwh.webp',
        brandId: '67c3899f9a7d257532374941',
      },
      {
        name: 'Фетровая шляпа',
        price: 73355,
        sizes: ['один размер'],
        description:
          'Черный, смесовая шерсть, эффект войлока, широкие поля, ремешки, плоская тулья, подкладка из хлопка.',
        country: 'Япония',
        composition: 'Наружный Материал: Шерсть 90%, Нейлон 10%, Подкладка: Хлопок 100%',
        instructions: 'Не стирать / не использовать сухую чистку',
        gender: 'Муж',
        category: 'Аксессуары',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741039895/noir/products/Yohji%20Yamamoto/bicunxbb8i0zj3eoz8ws.webp',
        brandId: '67c3899f9a7d257532374941',
      },
      {
        name: 'Рубашка со съемным воротником',
        price: 83354,
        sizes: ['L', 'XL'],
        description:
          'Белый, хлопок, съемный воротник, отложной воротник, застежка на пуговицах спереди, длинные рукава, манжеты на пуговицах, нагрудный накладной карман и прямой подол.',
        country: 'Япония',
        composition: 'Хлопок 100%',
        instructions: 'Ручная стирка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741039911/noir/products/Yohji%20Yamamoto/nk58pqy9xuh7hgtdrhph.webp',
        brandId: '67c3899f9a7d257532374941',
      },
      {
        name: 'Шерстяной свитер',
        price: 67375,
        sizes: ['L'],
        description:
          'Черный, шерсть, вязаный дизайн, узор в вертикальную полоску, эффект потертости, круглый вырез, приспущенные плечи, длинные рукава, подол и манжеты в рубчик, прямой подол.',
        country: 'Япония',
        composition: 'Шерсть 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741039932/noir/products/Yohji%20Yamamoto/mkllo0icx5xq9qqwdtul.webp',
        brandId: '67c3899f9a7d257532374941',
      },
      {
        name: 'Ботинки со складками',
        price: 196238,
        sizes: ['36', '37', '38'],
        description:
          'Черный, телячья кожа, гладкая текстура кожи, складки, закругленный носок, застежка на молнии сзади, низкий блочный каблук и высота по щиколотку.',
        country: 'Япония',
        composition:
          'Подкладка: Кожа теленка 100%, Наружный Материал: Кожа теленка 100%, Подошва: Резина 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Обувь',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741039954/noir/products/Yohji%20Yamamoto/bahnomj503wgeb7j0x6t.webp',
        brandId: '67c3899f9a7d257532374941',
      },
      {
        name: 'Футболка асимметричного кроя',
        price: 55507,
        sizes: ['M'],
        description: 'Черный, круглый вырез, короткие рукава, эластичная ткань.',
        country: 'Япония',
        composition: 'Хлопок 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741039972/noir/products/Yohji%20Yamamoto/pxdgjogrpanm6uraezzx.webp',
        brandId: '67c3899f9a7d257532374941',
      },
      {
        name: 'Высокие кеды на шнуровке',
        price: 197539,
        sizes: ['36', '37', '39'],
        description:
          'Черный/красный, смесовая шерсть, шнуровка спереди, застежка на молнии сбоку, длина по щиколотку, закругленный носок, стелька с логотипом, резиновая подошва.',
        country: 'Япония',
        composition:
          'Наружный Материал: Шерсть 90%, Нейлон 10%, Подошва: Резина 100%, Подкладка: Ткань 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Обувь',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741039989/noir/products/Yohji%20Yamamoto/fpcx1hddgo5ukv9ujbz2.webp',
        brandId: '67c3899f9a7d257532374941',
      },
      {
        name: 'Брюки с многослойным поясом',
        price: 108352,
        sizes: ['S', 'M'],
        description:
          'Черный/синий, хлопок, шерсть, фактурная отделка, потайная застежка на пуговицы, крючок и молнию спереди, застежка с пряжкой спереди, многослойный пояс, джинсовая вставка, классическая пятикарманная модель, подвернутые манжеты, прямой крой.',
        country: 'Япония',
        composition:
          'Наружный Материал: Хлопок 100%, Шерсть 100%, Кожа 100%, Полиуретановая смола 100%, Подкладка: Купро 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Низ',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040109/noir/products/Junya%20Watanabe/stnse9mibpqqmvgcbuya.webp',
        brandId: '67c3899f9a7d257532374942',
      },
      {
        name: 'Куртка с поясом',
        price: 460521,
        sizes: ['S'],
        description:
          'Черный, высокий воротник, ремень на талии, длинные рукава, застежка на молнии сбоку и асимметричная форма.',
        country: 'Япония',
        composition: 'Подкладка: Полиэстер 100%, Наружный Материал: Кожа теленка 100%',
        instructions: 'Специальная чистка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040143/noir/products/Junya%20Watanabe/xrkldr2gxd3xmivqhwqv.webp',
        brandId: '67c3899f9a7d257532374942',
      },
      {
        name: 'Ботильоны с заклепками',
        price: 97414,
        sizes: ['37', '38'],
        description:
          'Черный/серебристый, кожа, лакированная отделка, застежка на молнии сбоку, каблук-танкетка средней высоты, заостренный носок, кожаная стелька с логотипом.',
        country: 'Япония',
        composition: 'Наружный Материал: Кожа 100%, Подкладка: Кожа 100%, Подошва: Кожа 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Обувь',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040212/noir/products/Junya%20Watanabe/ap3swvy7r7lymf0lzcnn.webp',
        brandId: '67c3899f9a7d257532374942',
      },
      {
        name: 'Многослойная твидовая куртка',
        price: 307014,
        sizes: ['M', 'L'],
        description:
          'твидовая ткань, многослойный дизайн, черный/белый, асимметричный подол, квадратный вырез, застежка на пуговицах спереди, кейп, длинные рукава, золотистые пуговицы, вырезные детали.',
        country: 'Япония',
        composition:
          'Наружный Материал: Нейлон 36%, Вискоза 33%, Шерсть 16%, Хлопок 13%, Полиэстер 2%, Подкладка: Полиэстер 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040281/noir/products/Junya%20Watanabe/gsk6e2vfxntrgnoxswen.webp',
        brandId: '67c3899f9a7d257532374942',
      },
      {
        name: 'Брюки с эластичным поясом',
        price: 51044,
        sizes: ['S'],
        description: 'Черный, модель без застежки, эластичный пояс, прямой крой и узкий крой.',
        country: 'Япония',
        composition: 'Полиэстер 85%, Полиуретан 15%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Низ',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040329/noir/products/Junya%20Watanabe/jkeaceylwrvsxc9cpkao.webp',
        brandId: '67c3899f9a7d257532374942',
      },
      {
        name: 'Колготки с принтом',
        price: 39171,
        sizes: ['M'],
        description:
          'принт с изображением черепа, длина в пол, эластичный материал, эластичный пояс, модель без застежки, светло-бежевый. Чулочно-носочные изделия можно вернуть, только если оригинальная упаковка не была вскрыта.',
        country: 'Япония',
        composition: 'Нейлон 77%, Полиуретан 23%',
        instructions: 'Ручная стирка',
        gender: 'Жен',
        category: 'Аксессуары',
        color: 'Бежевый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040345/noir/products/Junya%20Watanabe/rzjfnphk23waiij0jvvn.webp',
        brandId: '67c3899f9a7d257532374942',
      },
      {
        name: 'Футболка в полоску',
        price: 23839,
        sizes: ['M'],
        description:
          'черный/белый, шерсть, фактурная отделка, узор в горизонтальную полоску, круглый вырез, приспущенные плечи, рукава три четверти, прямой подол.',
        country: 'Япония',
        composition: 'Шерсть 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040378/noir/products/Junya%20Watanabe/umeyli88lzgsxxa6fu2r.webp',
        brandId: '67c3899f9a7d257532374942',
      },
      {
        name: 'Пиджак',
        price: 56840,
        sizes: ['XXS'],
        description:
          'Атлас, без аппликаций, базовый, воротник с отворотом, длинные рукава, без карманов, 1 пуговица, на подкладке.',
        country: 'Италия',
        composition: 'Шерсть 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741039259/noir/products/Haider%20Ackermann/dnjongqyaz8rhrsffo5b.jpg',
        brandId: '67c3899f9a7d257532374943',
      },
      {
        name: 'Удлиненное пальто',
        price: 42256,
        sizes: ['XS'],
        description:
          'Ткань, плиссированная, однотонная, китайский воротник, длинные рукава, спортивные манжеты с пуговицами, без подкладки, пуговицы, без карманов.',
        country: 'Италия',
        composition: 'хлопок, шелк 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741039260/noir/products/Haider%20Ackermann/xs7jlqhngwoz1envkraf.jpg',
        brandId: '67c3899f9a7d257532374943',
      },
      {
        name: 'Укороченный топ',
        price: 18791,
        sizes: ['XS'],
        description: 'Ткань, белый, однотонная, без пуговиц, без карманов.',
        country: 'Италия',
        composition: 'хлопок, шелк 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741039260/noir/products/Haider%20Ackermann/ush7elmseunbfxtzd1kr.jpg',
        brandId: '67c3899f9a7d257532374943',
      },
      {
        name: 'Куртка Chalice',
        price: 158742,
        sizes: ['M'],
        description:
          'черный, хлопок, ткань с твиловым переплетением, потайная молния спереди, потайная застежка на кнопках спереди, широкий воротник с заклепками, контрастная окантовка, длинные рукава реглан, два вшитых кармана по бокам, съемный клатч, складки, внутренние прорезные карманы, цельная подкладка, прямой подол.',
        country: 'Италия',
        composition:
          'Подкладка: Вискоза 100%, Полиэстер 65%, Хлопок 35%, Наружный Материал: Хлопок 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040776/noir/products/Kiko%20Kostadinov/pekiqdpdyofwlp33munw.webp',
        brandId: '67c3899f9a7d257532374944',
      },
      {
        name: 'Куртка Ohne K-Dart',
        price: 111718,
        sizes: ['M'],
        description:
          'серый, смесовая вирджинская шерсть, застежка на пуговицы, воротник-стойка, два нагрудных кармана на молнии, длинные рукава, два прорезных кармана сбоку, прямой подол.',
        country: 'Италия',
        composition: 'Полиэстер 55%, Шерсть 45%',
        instructions: 'Информацию можно найти на этикетке товара',
        gender: 'Муж',
        category: 'Верх',
        color: 'Серый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040791/noir/products/Kiko%20Kostadinov/t04ispcquaf0hva0osas.webp',
        brandId: '67c3899f9a7d257532374944',
      },
      {
        name: 'Ключница Ohne',
        price: 53194,
        sizes: ['один размер'],
        description:
          'черный, застежка на молнии сбоку, съемный ремень на шею, карабин, серебристая фурнитура с выгравированным логотипом.',
        country: 'Италия',
        composition: 'Кожа теленка 100%, нержавеющая сталь 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Сумки',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040808/noir/products/Kiko%20Kostadinov/mggwfbtkrcvylexpln3b.webp',
        brandId: '67c3899f9a7d257532374944',
      },
      {
        name: 'Прямые брюки с контрастной строчкой',
        price: 76099,
        sizes: ['M'],
        description:
          'серый, контрастная строчка, потайная застежка на молнии и пуговицах, петли для ремня, два прорезных кармана по бокам, два кармана с листочкой сзади.',
        country: 'Италия',
        composition: 'Полиэстер 55%, Шерсть 45%',
        instructions: 'Информацию можно найти на этикетке товара',
        gender: 'Муж',
        category: 'Низ',
        color: 'Серый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040839/noir/products/Kiko%20Kostadinov/libt5vkgabpoiv2srwdc.webp',
        brandId: '67c3899f9a7d257532374944',
      },
      {
        name: 'Рубашка Jarocka',
        price: 43798,
        sizes: ['M', 'L'],
        description:
          'черный, жаккард с монограммой, широкий заостренный воротник, плиссированные детали, длинные рукава, накладной карман спереди, прямой подол, асимметричная застежка на пуговицах спереди.',
        country: 'Италия',
        composition: 'Полиамид 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040860/noir/products/Kiko%20Kostadinov/bralmxxud02ixqczlezf.webp',
        brandId: '67c3899f9a7d257532374944',
      },
      {
        name: 'Брюки Chalice',
        price: 76532,
        sizes: ['M', 'L', 'XL'],
        description:
          'черный, хлопок, ткань с твиловым переплетением, застежка на кнопки и молнию спереди, заклепки, контрастная отделка, складки, петли для ремня, два прорезных кармана по бокам, два накладных кармана сзади, прямой крой.',
        country: 'Италия',
        composition: 'Наружный Материал: Хлопок 100%, Подкладка: Полиэстер 65%, Хлопок 35%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Низ',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040882/noir/products/Kiko%20Kostadinov/bs7or2aw1dgtgq5sk5it.webp',
        brandId: '67c3899f9a7d257532374944',
      },
      {
        name: 'Куртка Zafar',
        price: 96356,
        sizes: ['M', 'L', 'XL'],
        description:
          'песочно-бежевый, потайная застежка на кнопках спереди, два прорезных кармана на груди, два кармана на молнии по бокам, вставка со сборками.',
        country: 'Италия',
        composition:
          'Подкладка: Полиэстер 95%, Эластан 5%, Наружный Материал: Лиоцелл 55%, Хлопок 45%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Бежевый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040903/noir/products/Kiko%20Kostadinov/x51tibxfvu202wkejgqu.webp',
        brandId: '67c3899f9a7d257532374944',
      },
      {
        name: 'Брюки карго Zafar',
        price: 57629,
        sizes: ['S', 'M', 'L', 'XL'],
        description:
          'песочно-бежевый, ширинка на пуговицах, петли для ремня, два прорезных кармана по бокам, два накладных кармана сзади.',
        country: 'Италия',
        composition:
          'Наружный Материал: Лиоцелл 55%, Хлопок 45%, Подкладка: Полиэстер 65%, Хлопок 35%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Низ',
        color: 'Бежевый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741040918/noir/products/Kiko%20Kostadinov/qk9em38c2hhycvju23pd.webp',
        brandId: '67c3899f9a7d257532374944',
      },
      {
        name: 'Широкие брюки с люверсами',
        price: 87682,
        sizes: ['XS', 'S', 'M', 'L'],
        description:
          'черный, хлопок, свободный крой, люверсы, застежка на молнии и пуговице спереди, два прорезных кармана по бокам, два кармана с листочкой сзади.',
        country: 'Швеция',
        composition: 'Хлопок 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Низ',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041107/noir/products/Namacheko/tof7z7mmgthrmsmdimon.webp',
        brandId: '67c3899f9a7d257532374945',
      },
      {
        name: 'Однобортное пальто Ãtran',
        price: 61579,
        sizes: ['XS', 'M'],
        description:
          'черный, хлопок, канвас, отделка металлическими люверсами, нашивка с логотипом сзади, лакированный воротник, потайная пуговичная застежка спереди, длинные рукава реглан, два прорезных кармана сбоку, два кармана с клапанами сзади, прямой крой, модель без подкладки.',
        country: 'Швеция',
        composition: 'Хлопок 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041134/noir/products/Namacheko/njfmidlw63vjlf4vvkga.webp',
        brandId: '67c3899f9a7d257532374945',
      },
      {
        name: 'Кардиган Axan с прорезями',
        price: 96873,
        sizes: ['S', 'M', 'L', 'XL'],
        description:
          'черный, смесь органического хлопка и льна, смесовый переработанный полиамид, смесовая шерсть, модель с прорезями, классический воротник, застежка на пуговицах спереди, приспущенные плечи, длинные рукава, прямой подол.',
        country: 'Швеция',
        composition:
          'Органический лен 64%, Органический хлопок 20%, Переработанный полиамид 14%, Шерсть 2%',
        instructions: 'Информацию можно найти на этикетке товара',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041155/noir/products/Namacheko/r66aspslezbhn9l0zqrw.webp',
        brandId: '67c3899f9a7d257532374945',
      },
      {
        name: 'Укороченные расклешенные брюки с кристаллами',
        price: 78767,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        description:
          'Черный, декор из кристаллов, петли для ремня, потайная застежка спереди, средняя посадка, расклешенный крой, два вшитых кармана по бокам, задние карманы с листочкой и укороченная длина.',
        country: 'Швеция',
        composition: 'Ткань 100%',
        instructions: 'Информацию можно найти на этикетке товара',
        gender: 'Муж',
        category: 'Низ',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041176/noir/products/Namacheko/cazhlr32heii5vrefgmj.webp',
        brandId: '67c3899f9a7d257532374945',
      },
      {
        name: 'Шерстяная куртка-рубашка с бисером',
        price: 43798,
        sizes: ['S', 'M', 'L', 'XL'],
        description:
          'черный, шерсть, декор из бисера, обтянутые тканью пуговицы, без воротника, длинные рукава, застежка на пуговицах спереди, прямой подол.',
        country: 'Швеция',
        composition: 'Шерсть 100%',
        instructions: 'Информацию можно найти на этикетке товара',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041193/noir/products/Namacheko/sqb6xhn7nczlxe8w619m.webp',
        brandId: '67c3899f9a7d257532374945',
      },
      {
        name: 'Плиссированная рубашка Ven асимметричного кроя',
        price: 80605,
        sizes: ['XS', 'S', 'M', 'L'],
        description:
          'темно-синий, плиссированный материал, асимметричный крой, декоративные пуговицы, классический воротник, застежка на пуговицах спереди, короткие рукава реглан, нагрудный накладной карман, закругленный подол.',
        country: 'Швеция',
        composition: 'Бумага 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041211/noir/products/Namacheko/doys5ftskav0yuudiomj.webp',
        brandId: '67c3899f9a7d257532374945',
      },
      {
        name: 'Рубашка Moleskin',
        price: 92277,
        sizes: ['S'],
        description:
          'черный, хлопок, застежка на пуговицах спереди, два накладных кармана на груди, заклепки, длинные рукава, манжеты на пуговицах, прямой подол.',
        country: 'Швеция',
        composition: 'Хлопок 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041231/noir/products/Namacheko/nepc9k9c0orgqbipfsps.webp',
        brandId: '67c3899f9a7d257532374945',
      },
      {
        name: 'Балетки Tabi',
        price: 62498,
        sizes: ['35', '36', '37', '38', '39', '40'],
        description:
          'черный, овечья кожа, без застежки, декор в виде узла, знаковый раздвоенный носок Tabi, плоская кожаная подошва.',
        country: 'Франция',
        composition:
          'Подкладка: Кожа теленка 100%, Подошва: Кожа теленка 100%, Наружный Материал: Наппа 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Обувь',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041311/noir/products/Maison%20Margiela/miu3p77fnek0rlurndzu.webp',
        brandId: '67c3899f9a7d257532374946',
      },
      {
        name: 'Ботинки Tabi 60',
        price: 93196,
        sizes: ['35', '36', '37', '38', '39', '40'],
        description:
          'черный, кожа, знаковый логотип-стежок, знаковый раздвоенный носок Tabi, застежка на крючок сбоку, кожаная стелька с логотипом, блочный каблук средней высоты, кожаная подошва.',
        country: 'Франция',
        composition:
          'Наружный Материал: Овечья кожа 100%, Подкладка: Кожа теленка 100%, Подошва: Кожа теленка 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Обувь',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041658/noir/products/Maison%20Margiela/rulcpfumcdfljj3cdeyn.webp',
        brandId: '67c3899f9a7d257532374946',
      },
      {
        name: 'Атласное платье',
        price: 275730,
        sizes: ['XS', 'M'],
        description:
          'Кремовый, шелк, прозрачные вставки, квадратный вырез, без рукавов, вырезные детали, U-образный вырез на спине и длинная модель.',
        country: 'Франция',
        composition:
          'Наружный Материал: Полиамид 100%, Вискоза 52%, Ацетат 48%, Подкладка: Шелк 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Платья',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041689/noir/products/Maison%20Margiela/nmoqrafrusyw9ndsl8gy.webp',
        brandId: '67c3899f9a7d257532374946',
      },
      {
        name: 'Сумка на плечо Glam Slam среднего размера',
        price: 165438,
        sizes: ['один размер'],
        description:
          'белый, телячья кожа, гладкая текстура кожи, стеганная модель, нашивка с логотипом спереди, знаковый узор с цифрами, ремень-цепочка на плечо, откидной верх на магнитной застежке, основное отделение, внутренний карман на молнии, тисненый логотип внутри, нашивка с логотипом, цельная подкладка.',
        country: 'Франция',
        composition:
          'Подкладка: Полиэстер 100%, Наружный Материал: Кожа теленка 100%, Цинк 94%, Алюминий 4%, Медь 2%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Сумки',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041710/noir/products/Maison%20Margiela/y1psopvwkocyl4cwvot8.webp',
        brandId: '67c3899f9a7d257532374946',
      },
      {
        name: 'Ботильоны Tabi 80',
        price: 105696,
        sizes: ['35', '36', '37', '38', '39', '40'],
        description:
          'голубой, овечья кожа, знаковый раздвоенный носок Tabi, логотип на пятке, стелька из телячьей кожи с логотипом, цилиндрический блочный каблук 80 мм, подошва из телячьей кожи, длина по щиколотку.',
        country: 'Франция',
        composition:
          'Подкладка: Кожа теленка 100%, Подошва: Кожа теленка 100%, Наружный Материал: Овечья кожа 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Обувь',
        color: 'Голубой',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041736/noir/products/Maison%20Margiela/senyldavhwjr8iobnsmh.webp',
        brandId: '67c3899f9a7d257532374946',
      },
      {
        name: 'Рубашка с заостренным воротником',
        price: 34833,
        sizes: ['XXS', 'XS', 'S'],
        description:
          'Белый, хлопок, боковые разрезы, прямой воротник, застежка на пуговицах спереди, длинные рукава, рукава с манжетами на пуговицах и прямой подол.',
        country: 'Франция',
        composition: 'Хлопок 100%',
        instructions: 'Информацию можно найти на этикетке товара',
        gender: 'Муж',
        category: 'Верх',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041756/noir/products/Maison%20Margiela/kbd9swlcy76nvdpud7cr.webp',
        brandId: '67c3899f9a7d257532374946',
      },
      {
        name: 'Брюки чинос Skater',
        price: 67002,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description:
          'темно-серый, смесовый хлопок, нашивка с логотипом, складки, петли для ремня, эластичный пояс сзади, застежка на молнии и пуговице спереди, два прорезных кармана по бокам, два кармана с листочкой сзади, свободный крой, длинная модель.',
        country: 'Франция',
        composition: 'Полиэстер 60%, Хлопок 40%',
        instructions: 'Информацию можно найти на этикетке товара',
        gender: 'Муж',
        category: 'Низ',
        color: 'Серый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041774/noir/products/Maison%20Margiela/n1ijryfrpszrzwnb1imx.webp',
        brandId: '67c3899f9a7d257532374946',
      },
      {
        name: 'Кольцо с логотипом',
        price: 21874,
        sizes: ['2', '3', '4', '5'],
        description:
          'Серебро 925 пробы, матовое покрытие, плоский профиль внутри и снаружи и выгравированный логотип. Этот товар доставят в его оригинальной упаковке.',
        country: 'Франция',
        composition: 'серебро 925-й пробы',
        instructions: 'Только сухая чистка',
        gender: 'Уни',
        category: 'Украшения',
        color: 'Серый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041791/noir/products/Maison%20Margiela/vznervqj7frlybzgz11d.webp',
        brandId: '67c3899f9a7d257532374946',
      },
      {
        name: 'Кроссовки Replica',
        price: 41911,
        sizes: ['40'],
        description:
          'Эффект разбрызганной краски, юбка со вставками, нашивка с логотипом на язычке, закругленный носок, шнуровка спереди и плоская резиновая подошва.',
        country: 'Франция',
        composition: 'Наружный Материал: Кожа 100%, Подкладка: Кожа 100%, Подошва: Резина 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Обувь',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041791/noir/products/Maison%20Margiela/vznervqj7frlybzgz11d.webp',
        brandId: '67c3899f9a7d257532374946',
      },
      {
        name: 'Многослойный тренч',
        price: 220952,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        description:
          'черный, хлопок, многослойный дизайн, зазубренные лацканы, потайная застежка на молнии и пуговицах, длинные рукава, манжеты на пуговицах, шлица по центру сзади, прямой подол.',
        country: 'Франция',
        composition: 'Хлопок 100%',
        instructions: 'Информацию можно найти на этикетке товара',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741041832/noir/products/Maison%20Margiela/tv8smskh63kbczxawmca.webp',
        brandId: '67c3899f9a7d257532374946',
      },
      {
        name: 'Блузка с широким воротником',
        price: 72241,
        sizes: ['S', 'M'],
        description: 'белый, поплин, застежка на крючке спереди, асимметричный подол.',
        country: 'Китай',
        composition: 'Хлопок 100%',
        instructions: 'Информацию можно найти на этикетке товара',
        gender: 'Жен',
        category: 'Верх',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119042/noir/products/Sankuanz/wizui4mbgmoisvkwhlbr.webp',
        brandId: '67c3899f9a7d257532374947',
      },
      {
        name: 'Бомбер со вставками',
        price: 261760,
        sizes: ['M'],
        description: 'Черный, застежка на молнии спереди, подол и манжеты в рубчик.',
        country: 'Китай',
        composition: 'Шерсть 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119077/noir/products/Sankuanz/cze5xhbcc6jyebbmuwb6.webp',
        brandId: '67c3899f9a7d257532374947',
      },
      {
        name: 'Юбка с графичным принтом',
        price: 138324,
        sizes: ['S'],
        description:
          'Красный, потайная застежка на молнии сбоку, драпированная юбка, асимметричный подол.',
        country: 'Китай',
        composition: 'Шелк 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Низ',
        color: 'Красный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119106/noir/products/Sankuanz/mfchbaxw6ub3aojwmun0.webp',
        brandId: '67c3899f9a7d257532374947',
      },
      {
        name: 'Топ с асимметричным воротником',
        price: 66634,
        sizes: ['S'],
        description: 'Черный, застежка на молнии сбоку, отделка.',
        country: 'Китай',
        composition: 'Ткань 96%, Эластан 4%',
        instructions: 'Ручная стирка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119120/noir/products/Sankuanz/iej7flanguwsjrnurpup.webp',
        brandId: '67c3899f9a7d257532374947',
      },
      {
        name: 'Юбка с выбеленным эффектом',
        price: 65164,
        sizes: ['XS'],
        description:
          'Черный, потайная застежка на крючках и молнии сбоку, драпированная юбка, асимметричный подол.',
        country: 'Китай',
        composition: 'Хлопок 100%',
        instructions: 'Машинная стирка',
        gender: 'Жен',
        category: 'Низ',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119139/noir/products/Sankuanz/iecwxhxdfy1v1gdn9sx4.webp',
        brandId: '67c3899f9a7d257532374947',
      },
      {
        name: 'Блузка с асимметричным воротником',
        price: 97332,
        sizes: ['M'],
        description: 'Черный, поплин, застежка на пуговицах спереди, закругленный подол.',
        country: 'Китай',
        composition: 'Хлопок 100%',
        instructions: 'Ручная стирка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119157/noir/products/Sankuanz/w3fpvzbiejowlyfmn3ff.webp',
        brandId: '67c3899f9a7d257532374947',
      },
      {
        name: 'Кольцо Spike с логотипом',
        price: 37223,
        sizes: ['Один размер'],
        description: 'Кольцо Spike с логотипом от Sankuanz. Модель слип-он, без застежки.',
        country: 'Китай',
        composition: 'Платина',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Украшения',
        color: 'Серый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119178/noir/products/Sankuanz/icg5gtupx5w9hpkdntkp.webp',
        brandId: '67c3899f9a7d257532374947',
      },
      {
        name: 'Платье мини Lucinda Bustier',
        price: 59098,
        sizes: ['S'],
        description:
          'Черный, смесовый хлопок, саржевое переплетение, застежка на завязке сзади, потайная застежка на молнии сзади, квадратный вырез, люверсы, шнуровка, без бретелей, вырезные детали, модель без подкладки, асимметричный подол, длина до бедер.',
        country: 'Франция',
        composition: 'Хлопок 98%, Эластан 2%',
        instructions: 'Машинная стирка',
        gender: 'Жен',
        category: 'Платья',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119288/noir/products/Ludovic%20de%20Saint%20Sernin/bohhkdn0o8qo2kt1yra5.webp',
        brandId: '67c3899f9a7d257532374948',
      },
      {
        name: 'Платье макси с драпировкой',
        price: 72884,
        sizes: ['S'],
        description:
          'Хаки, жоржет, полупрозрачный дизайн, драпировка, кушак, вырез халтер, модель на одном плече, длина макси, двухслойный материал.',
        country: 'Франция',
        composition: 'Полиэстер 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Платья',
        color: 'Бежевый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119307/noir/products/Ludovic%20de%20Saint%20Sernin/cetyvqnxozw0q8ghwffk.webp',
        brandId: '67c3899f9a7d257532374948',
      },
      {
        name: 'Платье Cleavage с люверсами',
        price: 134924,
        sizes: ['XS'],
        description:
          'Черный, овечья кожа, люверсы, шнуровка, тонкие бретели, вырез в форме сердца, приталенный силуэт, подол с оборками, застежка на завязке сзади, вырез сзади и длина до бедер.',
        country: 'Франция',
        composition: 'Кожа ягненка 100%',
        instructions: 'Специальная чистка',
        gender: 'Жен',
        category: 'Платья',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119343/noir/products/Ludovic%20de%20Saint%20Sernin/vvknichervezp9bkamqp.webp',
        brandId: '67c3899f9a7d257532374948',
      },
      {
        name: 'Платье макси Grace',
        price: 50274,
        sizes: ['S', 'M'],
        description:
          'Черный, бархат, облегающий крой, потайная застежка на крючках и молнии сзади, застежка на завязке сзади, завязки вокруг шеи, вырез в форме сердца, без рукавов, кожаные вставки, отделка металлическими люверсами, обметочный шов, вырез сзади, цельная подкладка, прямой подол, длина макси.',
        country: 'Франция',
        composition: 'Полиэстер 90%, Полиуретан 10%',
        instructions: 'Машинная чистка',
        gender: 'Жен',
        category: 'Платья',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119362/noir/products/Ludovic%20de%20Saint%20Sernin/tnzllkra1p5oo0vfhqww.webp',
        brandId: '67c3899f9a7d257532374948',
      },
      {
        name: 'Платье с высоким воротником',
        price: 39245,
        sizes: ['M'],
        description: 'Черный, высокий воротник, без рукавов, завязки по бокам и длина макси.',
        country: 'Франция',
        composition: 'Полиэстер 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Платья',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119386/noir/products/Ludovic%20de%20Saint%20Sernin/i9jaeawceeqlzvs6dpcf.webp',
        brandId: '67c3899f9a7d257532374948',
      },
      {
        name: 'Топ с принтом Self Portrait',
        price: 12591,
        sizes: ['M', 'L', 'XL'],
        description: 'Белый, логотип сзади.',
        country: 'Франция',
        composition: 'Органический хлопок 94%, Эластан 6%',
        instructions: 'Машинная стирка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119416/noir/products/Ludovic%20de%20Saint%20Sernin/epbfk2b0qjvjq6mdm3bo.webp',
        brandId: '67c3899f9a7d257532374948',
      },
      {
        name: 'Расклешенные брюки Bum строгого кроя',
        price: 28767,
        sizes: ['XS', 'S', 'M', 'L'],
        description:
          'Кремовый, смесовый органический хлопок, петли для ремня, потайная застежка на пуговицы, крючок и молнию спереди, расклешенный крой, два вшитых кармана по бокам, два кармана с листочкой сзади, прямой подол.',
        country: 'Франция',
        composition: 'Органический хлопок 67%, Пенька 33%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Низ',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119460/noir/products/Ludovic%20de%20Saint%20Sernin/ffmuup5j31mldkkbhtdb.webp',
        brandId: '67c3899f9a7d257532374948',
      },
      {
        name: 'Топ Jay',
        price: 18565,
        sizes: ['XS', 'S', 'M', 'L'],
        description: 'Черный, жатый эффект, модель на одном плече, без рукавов, прямой подол.',
        country: 'Франция',
        composition: 'Полиамид 50%, Органический хлопок 50%',
        instructions: 'Машинная стирка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119481/noir/products/Ludovic%20de%20Saint%20Sernin/vxxndagjnjajvjsmkevo.webp',
        brandId: '67c3899f9a7d257532374948',
      },
      {
        name: 'Платье с высоким воротником',
        price: 78031,
        sizes: ['S'],
        description:
          'Черный, смесовый хлопок, шифоновый слой, завязки, высокий воротник, застежка на молнии сзади, длинные рукава.',
        country: 'Италия',
        composition: 'Хлопок 82%, Полиамид 18%',
        instructions: 'Информацию можно найти на этикетке товара',
        gender: 'Жен',
        category: 'Платья',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119672/noir/products/Ann%20Demeulemeester/kuzdac5upvdbl9qarx0d.webp',
        brandId: '67c3899f9a7d257532374949',
      },
      {
        name: 'Кожаный топ с вырезом халтер',
        price: 116725,
        sizes: ['XXS', 'XS'],
        description:
          'Черный, кожа, ремень на талии, без задника, вырез-петля халтер, завязки вокруг шеи, без рукавов и прямой подол.',
        country: 'Италия',
        composition: 'Овечья кожа 100%',
        instructions: 'Специальная чистка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119712/noir/products/Ann%20Demeulemeester/btlmvwnylaoxzily9bzh.webp',
        brandId: '67c3899f9a7d257532374949',
      },
      {
        name: 'Байкерская куртка Ikra',
        price: 241540,
        sizes: ['XS', 'S'],
        description:
          'Черный, двусторонняя молния спереди, два кармана на молнии по бокам, молнии на манжетах, длинные рукава.',
        country: 'Италия',
        composition: 'Наружный Материал: Кожа 100%, Подкладка: Вискоза 100%, Хлопок 100%',
        instructions: 'Специальная чистка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119737/noir/products/Ann%20Demeulemeester/dhov9aebjjg9zrpxifnz.webp',
        brandId: '67c3899f9a7d257532374949',
      },
      {
        name: 'Драпированное платье',
        price: 246595,
        sizes: ['M'],
        description:
          'Черный, асимметричная форма, драпировка, дизайн со сборками, асимметричный вырез, тонкие бретели, завязки по бокам, застежка на завязке сзади, открытые плечи, объемные рукава, открытая спина, приталенный силуэт, длина макси и прямой подол.',
        country: 'Италия',
        composition: 'Вискоза 100%',
        instructions: 'Машинная стирка',
        gender: 'Жен',
        category: 'Платья',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119912/noir/products/Ann%20Demeulemeester/d9zmblewzdm6lb46gvwj.webp',
        brandId: '67c3899f9a7d257532374949',
      },
      {
        name: 'Полупрозрачная футболка с длинными рукавами',
        price: 30973,
        sizes: ['S', 'M'],
        description:
          'Белый, смесовый хлопок, прозрачный материал, круглый вырез, длинные рукава, застежка на завязке сзади и прямой подол.',
        country: 'Италия',
        composition: 'Хлопок 82%, Полиамид 18%',
        instructions: 'Ручная стирка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119940/noir/products/Ann%20Demeulemeester/cuyvspvumrvyg7aplvee.webp',
        brandId: '67c3899f9a7d257532374949',
      },
      {
        name: 'Ботильоны Hedy 85',
        price: 128030,
        sizes: ['35', '38'],
        description:
          'Черный, телячья кожа, декоративная строчка, закругленный носок, застежка на молнии сзади, каблук на высокой шпильке, кожаная подошва и высота по щиколотку. В комплект входит мешок-пыльник для хранения.',
        country: 'Италия',
        composition:
          'Подкладка: Кожа теленка 100%, Полиуретан 100%, Наружный Материал: Кожа теленка 100, Подошва: Кожа теленка 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Обувь',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741119968/noir/products/Ann%20Demeulemeester/pbxlyh3olb5iizem7wvy.webp',
        brandId: '67c3899f9a7d257532374949',
      },
      {
        name: 'Сумка на плечо',
        price: 28767,
        sizes: ['Один размер'],
        description:
          'Черный, застежка на молнии сверху, отделение на молнии, регулируемый ремень на плечо.',
        country: 'Италия',
        composition: 'Кожа 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Сумки',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741120006/noir/products/Ann%20Demeulemeester/pzcfhidnmdqiwboqnf8s.webp',
        brandId: '67c3899f9a7d257532374949',
      },
      {
        name: 'Колье с подвеской',
        price: 78399,
        sizes: ['Один размер'],
        description:
          'Серебристый, декор из бисера, цепочка. Маркирован в Лондонском пробирном бюро Соединенного Королевства.',
        country: 'Италия',
        composition: 'Серебро 925-й пробы',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Украшения',
        color: 'Серый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741120039/noir/products/Ann%20Demeulemeester/y437qylpyojyqaryz6ue.webp',
        brandId: '67c3899f9a7d257532374949',
      },
      {
        name: 'Шелковая юбка миди А-силуэта',
        price: 166357,
        sizes: ['XS', 'S'],
        description: 'Завышенная талия, плиссированная модель и А-образный силуэт.',
        country: 'Россия',
        composition: 'Шелк 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Низ',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741120149/noir/products/Ulyana%20Sergeenko/qbfmqjsdljhwk04k3a2e.webp',
        brandId: '67c3899f9a7d25753237494a',
      },
      {
        name: 'Зауженные джинсы',
        price: 147699,
        sizes: ['M'],
        description:
          'Завышенная талия, ширинка на пуговицах, классическая пятикарманная модель, серебристые заклепки, вставки и зауженный крой.',
        country: 'Россия',
        composition: 'Хлопок 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Низ',
        color: 'Белый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741120167/noir/products/Ulyana%20Sergeenko/ev93bzkg8kufiprpxnmj.webp',
        brandId: '67c3899f9a7d25753237494a',
      },
      {
        name: 'Клетчатый блейзер с запахом',
        price: 289425,
        sizes: ['XS', 'M'],
        description:
          'Глубокий V-образный вырез, застежка на пуговицы сзади, защипы, асимметричный подол и длинные рукава.',
        country: 'Россия',
        composition: 'Шерсть 100%',
        instructions: 'Только сухая чистка',
        gender: 'Жен',
        category: 'Верх',
        color: 'Серый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741120195/noir/products/Ulyana%20Sergeenko/gzdvwf9lq8qbcpuwtqwj.webp',
        brandId: '67c3899f9a7d25753237494a',
      },
      {
        name: 'Массивные кроссовки Pharaxus',
        price: 51929,
        sizes: ['38', '39'],
        description:
          'Черный, искусственная кожа, сетка, дизайн со вставками, тисненый логотип сбоку, логотип на язычке, закругленный носок, шнуровка спереди, логотип на стельке, массивная резиновая подошва.',
        country: 'Италия',
        composition:
          'Подкладка: Ткань 100%, Наружный Материал: Ткань 100%, Полиуретан 100%, Подошва: Резина 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Обувь',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741120261/noir/products/Raf%20Simons/qpm0szvd7y9qftmfnkun.webp',
        brandId: '67c3899f9a7d25753237494b',
      },
      {
        name: 'Браслет-кафф',
        price: 148710,
        sizes: ['M'],
        description: 'Черный, глянцевая фактура, выгравированный логотип и регулируемый дизайн.',
        country: 'Италия',
        composition: 'Медь',
        instructions: 'Только сухая чистка',
        gender: 'Уни',
        category: 'Украшения',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741120392/noir/products/Raf%20Simons/nycvcnvkk7r93kxuo8zp.webp',
        brandId: '67c3899f9a7d25753237494b',
      },
      {
        name: 'Двубортное пальто оверсайз',
        price: 165989,
        sizes: ['S', 'M'],
        description:
          'Черный, хлопок, двубортная застежка на кнопки, зазубренные лацканы, длинные рукава, два передних кармана с клапанами, контрастная строчка и оправа оверсайз.',
        country: 'Италия',
        composition: 'Хлопок 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741120423/noir/products/Raf%20Simons/ctqkbwwnhl7wiwrrqeis.webp',
        brandId: '67c3899f9a7d25753237494b',
      },
      {
        name: 'Джинсовая куртка с бахромой',
        price: 165989,
        sizes: ['S', 'M'],
        description:
          'Черный, хлопок, деним, серебристые заклепки, бахрома, нашивка с логотипом на груди, два нагрудных кармана с клапанами, застежка на пуговицах спереди, классический воротник, длинные рукава, манжеты на пуговицах, прямой подол.',
        country: 'Италия',
        composition: 'Хлопок 100%',
        instructions: 'Машинная стирка',
        gender: 'Муж',
        category: 'Верх',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741120460/noir/products/Raf%20Simons/b21nf6j7bekpvylz2i2u.webp',
        brandId: '67c3899f9a7d25753237494b',
      },
      {
        name: 'Бейсболка с драпировкой',
        price: 54227,
        sizes: ['Один размер'],
        description: 'Черный, хлопок, люверсы, нашивка с логотипом сзади и закругленный козырек.',
        country: 'Италия',
        composition: 'Хлопок 100%',
        instructions: 'Только сухая чистка',
        gender: 'Муж',
        category: 'Аксессуары',
        color: 'Черный',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741120483/noir/products/Raf%20Simons/s7vlbp94s8el6qd4kapb.webp',
        brandId: '67c3899f9a7d25753237494b',
      },
      {
        name: 'Кольцо RS',
        price: 62498,
        sizes: ['18'],
        description: 'Логотип.',
        country: 'Италия',
        composition: 'Медь',
        instructions: 'Только сухая чистка',
        gender: 'Уни',
        category: 'Украшения',
        color: 'Серый',
        imageUrl:
          'https://res.cloudinary.com/dr3gzvaqk/image/upload/v1741120500/noir/products/Raf%20Simons/ymuyiq2vf8fpjihuphvd.webp',
        brandId: '67c3899f9a7d25753237494b',
      },
    ],
  });
};

main();
