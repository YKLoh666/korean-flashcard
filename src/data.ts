import { FlashcardData, CardType, Politeness } from './types';

const now = Date.now();

export const INITIAL_CARDS: FlashcardData[] = [

  {
    id: "basic-expressions-1",
    category: "Basic Expressions",
    front_ko: "안녕하세요",
    front_en: "Hello",
    romanization: "annyeonghaseyo",
    meta: {
      type: CardType.Phrase,
      politeness: Politeness.Polite
    },
    example: {
      ko: "안녕하세요 저는 학생입니다.",
      en: "Hello I am a student."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "basic-expressions-2",
    category: "Basic Expressions",
    front_ko: "반갑습니다",
    front_en: "Nice to meet you",
    romanization: "bangapseumnida",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "만나서 반갑습니다.",
      en: "Nice to meet you."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "basic-expressions-3",
    category: "Basic Expressions",
    front_ko: "네",
    front_en: "Yes",
    romanization: "ne",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "네 저는 이해했어요.",
      en: "Yes I understand."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "basic-expressions-4",
    category: "Basic Expressions",
    front_ko: "아니요",
    front_en: "No",
    romanization: "aniyo",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "아니요 저는 몰라요.",
      en: "No I don't know."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "basic-expressions-5",
    category: "Basic Expressions",
    front_ko: "감사합니다",
    front_en: "Thank you (formal)",
    romanization: "gamsahamnida",
    meta: {
      type: CardType.Phrase,
      politeness: Politeness.Formal
    },
    example: {
      ko: "도와주셔서 감사합니다.",
      en: "Thank you for helping."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "basic-expressions-6",
    category: "Basic Expressions",
    front_ko: "고마워요",
    front_en: "Thank you (informal)",
    romanization: "gomawoyo",
    meta: {
      type: CardType.Phrase,
      politeness: Politeness.Formal
    },
    example: {
      ko: "정말 고마워요 친구야.",
      en: "Thank you my friend."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "basic-expressions-7",
    category: "Basic Expressions",
    front_ko: "미안해요",
    front_en: "I'm sorry",
    romanization: "mianhaeyo",
    meta: {
      type: CardType.Phrase,
      politeness: Politeness.Polite
    },
    example: {
      ko: "늦어서 미안해요.",
      en: "Sorry I am late."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "basic-expressions-8",
    category: "Basic Expressions",
    front_ko: "주세요",
    front_en: "Please give me",
    romanization: "juseyo",
    meta: {
      type: CardType.Phrase,
      politeness: Politeness.Polite
    },
    example: {
      ko: "물을 주세요.",
      en: "Please give me water."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "basic-expressions-9",
    category: "Basic Expressions",
    front_ko: "저는",
    front_en: "I am",
    romanization: "jeoneun",
    meta: {
      type: CardType.Phrase,
      politeness: Politeness.None
    },
    example: {
      ko: "저는 학생입니다.",
      en: "I am a student."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "basic-expressions-10",
    category: "Basic Expressions",
    front_ko: "제",
    front_en: "My",
    romanization: "je",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "제 이름은 민수입니다.",
      en: "My name is Minsu."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-1",
    category: "People and Family",
    front_ko: "가족",
    front_en: "Family",
    romanization: "gajok",
    hanja: "家族",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "제 가족은 네 명이에요.",
      en: "My family has four people."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-2",
    category: "People and Family",
    front_ko: "부모님",
    front_en: "Parents",
    romanization: "bumonim",
    hanja: "父母님",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "부모님은 집에 계세요.",
      en: "My parents are at home."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-3",
    category: "People and Family",
    front_ko: "형제",
    front_en: "Siblings",
    romanization: "hyeongje",
    hanja: "兄弟",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "저는 형제가 있어요.",
      en: "I have siblings."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-4",
    category: "People and Family",
    front_ko: "아버지",
    front_en: "Father",
    romanization: "abeoji",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "아버지는 회사에 가세요.",
      en: "My father goes to work."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-5",
    category: "People and Family",
    front_ko: "어머니",
    front_en: "Mother",
    romanization: "eomeoni",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "어머니는 요리를 하세요.",
      en: "My mother cooks."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-6",
    category: "People and Family",
    front_ko: "할아버지",
    front_en: "Grandfather",
    romanization: "halabeoji",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "할아버지는 공원에 가세요.",
      en: "My grandfather goes to the park."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-7",
    category: "People and Family",
    front_ko: "할머니",
    front_en: "Grandmother",
    romanization: "halmeoni",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "할머니는 집에 계세요.",
      en: "My grandmother stays at home."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-8",
    category: "People and Family",
    front_ko: "형",
    front_en: "Older brother (male)",
    romanization: "hyeong",
    hanja: "兄",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "형은 키가 커요.",
      en: "My older brother is tall."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-9",
    category: "People and Family",
    front_ko: "누나",
    front_en: "Older sister (male)",
    romanization: "nuna",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "누나는 친절해요.",
      en: "My older sister is kind."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-10",
    category: "People and Family",
    front_ko: "오빠",
    front_en: "Older brother (female)",
    romanization: "oppa",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "오빠는 학생이에요.",
      en: "My older brother is a student."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-11",
    category: "People and Family",
    front_ko: "언니",
    front_en: "Older sister (female)",
    romanization: "eonni",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "언니는 예뻐요.",
      en: "My older sister is pretty."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-12",
    category: "People and Family",
    front_ko: "동생",
    front_en: "Younger sibling",
    romanization: "dongsaeng",
    hanja: "同生",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "동생은 학교에 가요.",
      en: "My younger sibling goes to school."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-13",
    category: "People and Family",
    front_ko: "남동생",
    front_en: "Younger brother",
    romanization: "namdongsaeng",
    hanja: "男同生",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "남동생은 축구를 해요.",
      en: "My younger brother plays soccer."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-14",
    category: "People and Family",
    front_ko: "여동생",
    front_en: "Younger sister",
    romanization: "yeodongsaeng",
    hanja: "女同生",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "여동생은 책을 읽어요.",
      en: "My younger sister reads a book."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-15",
    category: "People and Family",
    front_ko: "남자",
    front_en: "Male",
    romanization: "namja",
    hanja: "男子",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "그 사람은 남자예요.",
      en: "That person is a man."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-16",
    category: "People and Family",
    front_ko: "여자",
    front_en: "Female",
    romanization: "yeoja",
    hanja: "女子",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "그 사람은 여자예요.",
      en: "That person is a woman."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-17",
    category: "People and Family",
    front_ko: "사람",
    front_en: "Person",
    romanization: "saram",
    hanja: "人",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "사람이 많아요.",
      en: "There are many people."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-18",
    category: "People and Family",
    front_ko: "친구",
    front_en: "Friend",
    romanization: "chingu",
    hanja: "親友",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "친구를 만나요.",
      en: "I meet a friend."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "people-and-family-19",
    category: "People and Family",
    front_ko: "이름",
    front_en: "Name",
    romanization: "ireum",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "이름이 뭐예요?",
      en: "What is your name?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-1",
    category: "Countries and Nationalities",
    front_ko: "나라",
    front_en: "Country",
    romanization: "nara",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "저는 이 나라를 좋아해요.",
      en: "I like this country."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-2",
    category: "Countries and Nationalities",
    front_ko: "한국",
    front_en: "Korea",
    romanization: "hanguk",
    hanja: "韓国",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "저는 한국에 가고 싶어요.",
      en: "I want to go to Korea."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-3",
    category: "Countries and Nationalities",
    front_ko: "미국",
    front_en: "America",
    romanization: "miguk",
    hanja: "美國",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "미국은 멀어요.",
      en: "America is far."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-4",
    category: "Countries and Nationalities",
    front_ko: "일본",
    front_en: "Japan",
    romanization: "ilbon",
    hanja: "日本",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "일본에 친구가 있어요.",
      en: "I have a friend in Japan."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-5",
    category: "Countries and Nationalities",
    front_ko: "중국",
    front_en: "China",
    romanization: "junguk",
    hanja: "中國",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "중국 음식은 맛있어요.",
      en: "Chinese food is delicious."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-6",
    category: "Countries and Nationalities",
    front_ko: "베트남",
    front_en: "Vietnam",
    romanization: "beteunam",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "베트남에 여행을 가요.",
      en: "I travel to Vietnam."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-7",
    category: "Countries and Nationalities",
    front_ko: "태국",
    front_en: "Thailand",
    romanization: "taeguk",
    hanja: "泰國",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "태국은 더워요.",
      en: "Thailand is hot."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-8",
    category: "Countries and Nationalities",
    front_ko: "말레이시아",
    front_en: "Malaysia",
    romanization: "malleisia",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "저는 말레이시아에 살아요.",
      en: "I live in Malaysia."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-9",
    category: "Countries and Nationalities",
    front_ko: "프랑스",
    front_en: "France",
    romanization: "peurangseu",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "프랑스에 가고 싶어요.",
      en: "I want to go to France."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-10",
    category: "Countries and Nationalities",
    front_ko: "독일",
    front_en: "Germany",
    romanization: "dogil",
    hanja: "德國",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "독일은 유명해요.",
      en: "Germany is famous."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-11",
    category: "Countries and Nationalities",
    front_ko: "이탈리아",
    front_en: "Italy",
    romanization: "itallia",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "이탈리아 음식은 맛있어요.",
      en: "Italian food is delicious."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-12",
    category: "Countries and Nationalities",
    front_ko: "스페인",
    front_en: "Spain",
    romanization: "seupein",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "스페인은 아름다워요.",
      en: "Spain is beautiful."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-13",
    category: "Countries and Nationalities",
    front_ko: "캐나다",
    front_en: "Canada",
    romanization: "kaenada",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "캐나다는 추워요.",
      en: "Canada is cold."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-14",
    category: "Countries and Nationalities",
    front_ko: "호주",
    front_en: "Australia",
    romanization: "hoju",
    hanja: "澳洲",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "호주에 친구가 있어요.",
      en: "I have a friend in Australia."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-15",
    category: "Countries and Nationalities",
    front_ko: "인도",
    front_en: "India",
    romanization: "indo",
    hanja: "印度",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "인도 음식은 매워요.",
      en: "Indian food is spicy."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "countries-and-nationalities-16",
    category: "Countries and Nationalities",
    front_ko: "영국",
    front_en: "England",
    romanization: "yeongguk",
    hanja: "英國",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "영국은 비가 많이 와요.",
      en: "England rains a lot."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "occupations-and-workplaces-1",
    category: "Occupations and Workplaces",
    front_ko: "직업",
    front_en: "Occupation",
    romanization: "jigeop",
    hanja: "職業",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "제 직업은 학생이에요.",
      en: "My occupation is student."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "occupations-and-workplaces-2",
    category: "Occupations and Workplaces",
    front_ko: "선생님",
    front_en: "Teacher",
    romanization: "seonsaengnim",
    hanja: "先生님",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "선생님은 친절해요.",
      en: "The teacher is kind."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "occupations-and-workplaces-3",
    category: "Occupations and Workplaces",
    front_ko: "요리사",
    front_en: "Chef",
    romanization: "yorisa",
    hanja: "料理師",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "요리사는 음식을 만들어요.",
      en: "The chef cooks food."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "occupations-and-workplaces-4",
    category: "Occupations and Workplaces",
    front_ko: "의사",
    front_en: "Doctor",
    romanization: "uisa",
    hanja: "醫師",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "의사는 병을 치료해요.",
      en: "The doctor treats illness."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "occupations-and-workplaces-5",
    category: "Occupations and Workplaces",
    front_ko: "학생",
    front_en: "Student",
    romanization: "haksaeng",
    hanja: "學生",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "저는 학생이에요.",
      en: "I am a student."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "occupations-and-workplaces-6",
    category: "Occupations and Workplaces",
    front_ko: "주부",
    front_en: "Housewife",
    romanization: "jubu",
    hanja: "主婦",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "주부는 집에서 일해요.",
      en: "The housewife works at home."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "occupations-and-workplaces-7",
    category: "Occupations and Workplaces",
    front_ko: "가수",
    front_en: "Singer",
    romanization: "gasu",
    hanja: "歌手",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "가수는 노래를 불러요.",
      en: "The singer sings."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "occupations-and-workplaces-8",
    category: "Occupations and Workplaces",
    front_ko: "화가",
    front_en: "Artist",
    romanization: "hwaga",
    hanja: "畫家",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "화가 예문",
      en: "Example with Artist"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "occupations-and-workplaces-9",
    category: "Occupations and Workplaces",
    front_ko: "배우",
    front_en: "Actor",
    romanization: "baeu",
    hanja: "俳優",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "배우는 연기를 해요.",
      en: "The actor acts."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "occupations-and-workplaces-10",
    category: "Occupations and Workplaces",
    front_ko: "경찰관",
    front_en: "Police officer",
    romanization: "gyeongchalgwan",
    hanja: "警察官",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "경찰관은 사람을 도와요.",
      en: "The police officer helps people."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "occupations-and-workplaces-11",
    category: "Occupations and Workplaces",
    front_ko: "회사원",
    front_en: "Office worker",
    romanization: "hoesawon",
    hanja: "會社員",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "회사원은 회사에서 일해요.",
      en: "The office worker works at a company."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "occupations-and-workplaces-12",
    category: "Occupations and Workplaces",
    front_ko: "기자",
    front_en: "Reporter",
    romanization: "gija",
    hanja: "記者",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "기자 예문",
      en: "Example with Reporter"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "workplaces-1",
    category: "Workplaces",
    front_ko: "회사",
    front_en: "Company",
    romanization: "hoesa",
    hanja: "會社",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "회사에 가요.",
      en: "I go to the company."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "workplaces-2",
    category: "Workplaces",
    front_ko: "학교",
    front_en: "School",
    romanization: "hakgyo",
    hanja: "學校",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "학교에 가요.",
      en: "I go to school."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "workplaces-3",
    category: "Workplaces",
    front_ko: "교실",
    front_en: "Classroom",
    romanization: "gyosil",
    hanja: "教室",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "교실에서 공부해요.",
      en: "I study in the classroom."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "workplaces-4",
    category: "Workplaces",
    front_ko: "서점",
    front_en: "Bookstore",
    romanization: "seojeom",
    hanja: "書店",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "서점에서 책을 사요.",
      en: "I buy a book at the bookstore."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "workplaces-5",
    category: "Workplaces",
    front_ko: "도서관",
    front_en: "Library",
    romanization: "doseogwan",
    hanja: "圖書館",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "도서관에서 공부해요.",
      en: "I study at the library."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "workplaces-6",
    category: "Workplaces",
    front_ko: "병원",
    front_en: "Hospital",
    romanization: "byeongwon",
    hanja: "病院",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "병원에 가요.",
      en: "I go to the hospital."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "workplaces-7",
    category: "Workplaces",
    front_ko: "대사관",
    front_en: "Embassy",
    romanization: "daesagwan",
    hanja: "大使館",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "대사관에 가요.",
      en: "I go to the embassy."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-1",
    category: "Daily Objects",
    front_ko: "가방",
    front_en: "Bag",
    romanization: "gabang",
    hanja: "鞄",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "가방을 들어요.",
      en: "I carry a bag."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-2",
    category: "Daily Objects",
    front_ko: "사전",
    front_en: "Dictionary",
    romanization: "sajeon",
    hanja: "辭典",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "사전을 사용해요.",
      en: "I use a dictionary."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-3",
    category: "Daily Objects",
    front_ko: "전자사전",
    front_en: "Digital Dictionary",
    romanization: "jeonjasajeon",
    hanja: "電子辭典",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "전자사전을 사용해요.",
      en: "I use a digital dictionary."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-4",
    category: "Daily Objects",
    front_ko: "모자",
    front_en: "Cap",
    romanization: "moja",
    hanja: "帽子",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "모자를 써요.",
      en: "I wear a cap."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-5",
    category: "Daily Objects",
    front_ko: "핸드폰",
    front_en: "Handphone",
    romanization: "haendeupon",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "핸드폰을 사용해요.",
      en: "I use a phone."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-6",
    category: "Daily Objects",
    front_ko: "시계",
    front_en: "Watch",
    romanization: "sigye",
    hanja: "時計",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "시계를 봐요.",
      en: "I look at the watch."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-7",
    category: "Daily Objects",
    front_ko: "안경",
    front_en: "Glasses",
    romanization: "angyeong",
    hanja: "眼鏡",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "안경을 써요.",
      en: "I wear glasses."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-8",
    category: "Daily Objects",
    front_ko: "연필",
    front_en: "Pencil",
    romanization: "yeonpil",
    hanja: "鉛筆",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "연필로 써요.",
      en: "I write with a pencil."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-9",
    category: "Daily Objects",
    front_ko: "지우개",
    front_en: "Eraser",
    romanization: "jiugae",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "지우개로 지워요.",
      en: "I erase with an eraser."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-10",
    category: "Daily Objects",
    front_ko: "책상",
    front_en: "Desk",
    romanization: "chaeksang",
    hanja: "冊床",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "책상 위에 책이 있어요.",
      en: "There is a book on the desk."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-11",
    category: "Daily Objects",
    front_ko: "의자",
    front_en: "Chair",
    romanization: "uija",
    hanja: "椅子",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "의자에 앉아요.",
      en: "I sit on a chair."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-12",
    category: "Daily Objects",
    front_ko: "프린터",
    front_en: "Printer",
    romanization: "peurinteo",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "프린터를 사용해요.",
      en: "I use a printer."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-13",
    category: "Daily Objects",
    front_ko: "카메라",
    front_en: "Camera",
    romanization: "kamera",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "카메라로 사진을 찍어요.",
      en: "I take photos with a camera."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-14",
    category: "Daily Objects",
    front_ko: "신문",
    front_en: "Newspaper",
    romanization: "sinmun",
    hanja: "新聞",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "신문을 읽어요.",
      en: "I read a newspaper."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-15",
    category: "Daily Objects",
    front_ko: "볼펜",
    front_en: "Ballpen",
    romanization: "bolpen",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "볼펜으로 써요.",
      en: "I write with a pen."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-16",
    category: "Daily Objects",
    front_ko: "컴퓨터",
    front_en: "Computer",
    romanization: "keompyuteo",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "컴퓨터를 사용해요.",
      en: "I use a computer."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-17",
    category: "Daily Objects",
    front_ko: "종이",
    front_en: "Paper",
    romanization: "jongi",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "종이에 써요.",
      en: "I write on paper."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-18",
    category: "Daily Objects",
    front_ko: "우산",
    front_en: "Umbrella",
    romanization: "usan",
    hanja: "雨傘",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "우산 예문",
      en: "Example with Umbrella"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-19",
    category: "Daily Objects",
    front_ko: "잡지",
    front_en: "Magazine",
    romanization: "japji",
    hanja: "雜誌",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "잡지 예문",
      en: "Example with Magazine"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-20",
    category: "Daily Objects",
    front_ko: "공책",
    front_en: "Exercise book",
    romanization: "gongchaek",
    hanja: "空冊",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "공책 예문",
      en: "Example with Exercise book"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-21",
    category: "Daily Objects",
    front_ko: "사진",
    front_en: "Photo",
    romanization: "sajin",
    hanja: "写真",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "사진 예문",
      en: "Example with Photo"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-22",
    category: "Daily Objects",
    front_ko: "카드",
    front_en: "Card",
    romanization: "kadeu",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "카드 예문",
      en: "Example with Card"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-23",
    category: "Daily Objects",
    front_ko: "치마",
    front_en: "Skirt",
    romanization: "chima",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "치마 예문",
      en: "Example with Skirt"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-24",
    category: "Daily Objects",
    front_ko: "원피스",
    front_en: "One-piece",
    romanization: "wonpiseu",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "원피스 예문",
      en: "Example with One-piece"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-25",
    category: "Daily Objects",
    front_ko: "바지",
    front_en: "Pants",
    romanization: "baji",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "바지 예문",
      en: "Example with Pants"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-26",
    category: "Daily Objects",
    front_ko: "티셔츠",
    front_en: "T-shirt",
    romanization: "tisyeocheu",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "티셔츠 예문",
      en: "Example with T-shirt"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-27",
    category: "Daily Objects",
    front_ko: "구두",
    front_en: "Shoes",
    romanization: "gudu",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "구두를 신어요.",
      en: "I wear shoes."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-28",
    category: "Daily Objects",
    front_ko: "운동화",
    front_en: "Sport shoes",
    romanization: "undonghwa",
    hanja: "運動靴",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "운동화 예문",
      en: "Example with Sport shoes"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-29",
    category: "Daily Objects",
    front_ko: "신발",
    front_en: "Slippers",
    romanization: "sinbal",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "신발 예문",
      en: "Example with Slippers"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-30",
    category: "Daily Objects",
    front_ko: "양말",
    front_en: "Socks",
    romanization: "yangmal",
    hanja: "洋襪",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "양말 예문",
      en: "Example with Socks"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-31",
    category: "Daily Objects",
    front_ko: "자전거",
    front_en: "Bicycle",
    romanization: "jajeongeo",
    hanja: "自轉車",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "자전거 예문",
      en: "Example with Bicycle"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "daily-objects-32",
    category: "Daily Objects",
    front_ko: "자동차",
    front_en: "Car",
    romanization: "jadongcha",
    hanja: "自動車",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "자동차 예문",
      en: "Example with Car"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "food-and-drinks-1",
    category: "Food and Drinks",
    front_ko: "음식",
    front_en: "Food",
    romanization: "eumsik",
    hanja: "飮食",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "음식을 먹어요.",
      en: "I eat food."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "food-and-drinks-2",
    category: "Food and Drinks",
    front_ko: "사과",
    front_en: "Apple",
    romanization: "sagwa",
    hanja: "沙果",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "사과를 먹어요.",
      en: "I eat an apple."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "food-and-drinks-3",
    category: "Food and Drinks",
    front_ko: "레몬차",
    front_en: "Lemon tea",
    romanization: "lemoncha",
    hanja: "Lemon茶",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "레몬차를 마셔요.",
      en: "I drink lemon tea."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "food-and-drinks-4",
    category: "Food and Drinks",
    front_ko: "오렌지 주스",
    front_en: "Orange juice",
    romanization: "orenji juseu",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "오렌지 주스를 마셔요.",
      en: "I drink orange juice."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "food-and-drinks-5",
    category: "Food and Drinks",
    front_ko: "커피",
    front_en: "Coffee",
    romanization: "keopi",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "커피를 마셔요.",
      en: "I drink coffee."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "food-and-drinks-6",
    category: "Food and Drinks",
    front_ko: "사이다",
    front_en: "Cider",
    romanization: "saida",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "사이다를 마셔요.",
      en: "I drink cider."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "food-and-drinks-7",
    category: "Food and Drinks",
    front_ko: "콜라",
    front_en: "Cola",
    romanization: "kolla",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "콜라 예문",
      en: "Example with Cola"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "food-and-drinks-8",
    category: "Food and Drinks",
    front_ko: "물",
    front_en: "Water",
    romanization: "mul",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "물 예문",
      en: "Example with Water"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "food-and-drinks-9",
    category: "Food and Drinks",
    front_ko: "와인",
    front_en: "Wine",
    romanization: "wain",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "와인 예문",
      en: "Example with Wine"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "food-and-drinks-10",
    category: "Food and Drinks",
    front_ko: "차",
    front_en: "Tea",
    romanization: "cha",
    hanja: "茶",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "차 예문",
      en: "Example with Tea"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-1",
    category: "Places and Locations",
    front_ko: "집",
    front_en: "House, home",
    romanization: "jip",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "집에 있어요.",
      en: "I am at home."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-2",
    category: "Places and Locations",
    front_ko: "화장실",
    front_en: "Bathroom/Restroom",
    romanization: "hwajangsil",
    hanja: "化粧室",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "화장실에 가요.",
      en: "I go to the bathroom."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-3",
    category: "Places and Locations",
    front_ko: "은행",
    front_en: "Bank",
    romanization: "eunhaeng",
    hanja: "銀行",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "은행에 가요.",
      en: "I go to the bank."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-4",
    category: "Places and Locations",
    front_ko: "식당",
    front_en: "Restaurant",
    romanization: "sikdang",
    hanja: "食堂",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "식당에서 먹어요.",
      en: "I eat at a restaurant."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-5",
    category: "Places and Locations",
    front_ko: "극장",
    front_en: "Cinema",
    romanization: "geukjang",
    hanja: "劇場",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "극장에서 영화를 봐요.",
      en: "I watch a movie at the cinema."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-6",
    category: "Places and Locations",
    front_ko: "수영장",
    front_en: "Swimming pool",
    romanization: "suyeongjang",
    hanja: "水泳場",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "수영장에서 수영해요.",
      en: "I swim at the pool."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-7",
    category: "Places and Locations",
    front_ko: "체육관",
    front_en: "Gym",
    romanization: "cheyukgwan",
    hanja: "體育館",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "체육관에서 운동해요.",
      en: "I exercise at the gym."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-8",
    category: "Places and Locations",
    front_ko: "커피숍",
    front_en: "Coffee shop",
    romanization: "keopisyop",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "커피숍에서 커피를 마셔요.",
      en: "I drink coffee at a cafe."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-9",
    category: "Places and Locations",
    front_ko: "공항",
    front_en: "Airport",
    romanization: "gonghang",
    hanja: "空港",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "공항에 가요.",
      en: "I go to the airport."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-10",
    category: "Places and Locations",
    front_ko: "백화점",
    front_en: "Department Store",
    romanization: "baekhwajeom",
    hanja: "百貨店",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "백화점에서 쇼핑해요.",
      en: "I shop at the department store."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-11",
    category: "Places and Locations",
    front_ko: "태권도",
    front_en: "Taekwon-do",
    romanization: "taegwondo",
    hanja: "跆拳道",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "태권도를 배워요.",
      en: "I learn taekwondo."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-12",
    category: "Places and Locations",
    front_ko: "테니스장",
    front_en: "Tennis Court",
    romanization: "teniseujang",
    hanja: "Tennis場",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "테니스장에서 운동해요.",
      en: "I play at the tennis court."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "places-and-locations-13",
    category: "Places and Locations",
    front_ko: "층",
    front_en: "Floor",
    romanization: "cheung",
    hanja: "層",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "3층에 있어요.",
      en: "It is on the third floor."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-1",
    category: "Time and Days",
    front_ko: "생일",
    front_en: "Birthday",
    romanization: "saengil",
    hanja: "生日",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "오늘은 제 생일이에요.",
      en: "Today is my birthday."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-2",
    category: "Time and Days",
    front_ko: "월",
    front_en: "Month",
    romanization: "wol",
    hanja: "月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "이번 월은 바빠요.",
      en: "This month is busy."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-3",
    category: "Time and Days",
    front_ko: "년",
    front_en: "Year",
    romanization: "nyeon",
    hanja: "年",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "올해는 2024년이에요.",
      en: "This year is 2024."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-4",
    category: "Time and Days",
    front_ko: "일",
    front_en: "Day",
    romanization: "il",
    hanja: "日",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "사과 한 개 있어요.",
      en: "There is one apple."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-5",
    category: "Time and Days",
    front_ko: "오전",
    front_en: "Morning (A.M.)",
    romanization: "ojeon",
    hanja: "午前",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "오전에 공부해요.",
      en: "I study in the morning."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-6",
    category: "Time and Days",
    front_ko: "오후",
    front_en: "Afternoon (P.M.)",
    romanization: "ohu",
    hanja: "午後",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "오후에 일해요.",
      en: "I work in the afternoon."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-7",
    category: "Time and Days",
    front_ko: "아침",
    front_en: "Morning",
    romanization: "achim",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "아침에 밥을 먹어요.",
      en: "I eat breakfast in the morning."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-8",
    category: "Time and Days",
    front_ko: "점심",
    front_en: "Lunchtime",
    romanization: "jeomsim",
    hanja: "點心",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "점심에 친구를 만나요.",
      en: "I meet a friend at lunch."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-9",
    category: "Time and Days",
    front_ko: "저녁",
    front_en: "Evening",
    romanization: "jeonyeok",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "저녁에 운동해요.",
      en: "I exercise in the evening."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-10",
    category: "Time and Days",
    front_ko: "밤",
    front_en: "Night",
    romanization: "bam",
    hanja: "晚",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "밤에 자요.",
      en: "I sleep at night."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-11",
    category: "Time and Days",
    front_ko: "시",
    front_en: "o'clock",
    romanization: "si",
    hanja: "時",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "지금 세 시예요.",
      en: "It is three o'clock now."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-12",
    category: "Time and Days",
    front_ko: "분",
    front_en: "minute",
    romanization: "bun",
    hanja: "分",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "십 분 기다려요.",
      en: "I wait ten minutes."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-13",
    category: "Time and Days",
    front_ko: "초",
    front_en: "second",
    romanization: "cho",
    hanja: "秒",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "일 초 기다려요.",
      en: "I wait one second."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-14",
    category: "Time and Days",
    front_ko: "오늘",
    front_en: "Today",
    romanization: "oneul",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "오늘은 날씨가 좋아요.",
      en: "The weather is good today."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-15",
    category: "Time and Days",
    front_ko: "어제",
    front_en: "Yesterday",
    romanization: "eoje",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "어제는 바빴어요.",
      en: "Yesterday was busy."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-16",
    category: "Time and Days",
    front_ko: "내일",
    front_en: "Tomorrow",
    romanization: "naeil",
    hanja: "来日",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "내일 학교에 가요.",
      en: "I go to school tomorrow."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-17",
    category: "Time and Days",
    front_ko: "월요일",
    front_en: "Monday",
    romanization: "woryoil",
    hanja: "月曜日",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "월요일에 일해요.",
      en: "I work on Monday."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-18",
    category: "Time and Days",
    front_ko: "화요일",
    front_en: "Tuesday",
    romanization: "hwayoil",
    hanja: "火曜日",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "화요일에 공부해요.",
      en: "I study on Tuesday."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-19",
    category: "Time and Days",
    front_ko: "수요일",
    front_en: "Wednesday",
    romanization: "suyoil",
    hanja: "水曜日",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "수요일에 만나요.",
      en: "I meet on Wednesday."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-20",
    category: "Time and Days",
    front_ko: "목요일",
    front_en: "Thursday",
    romanization: "mogyoil",
    hanja: "木曜日",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "목요일에 쉬어요.",
      en: "I rest on Thursday."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-21",
    category: "Time and Days",
    front_ko: "금요일",
    front_en: "Friday",
    romanization: "geumyoil",
    hanja: "金曜日",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "금요일에 영화 봐요.",
      en: "I watch a movie on Friday."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-22",
    category: "Time and Days",
    front_ko: "토요일",
    front_en: "Saturday",
    romanization: "toyoil",
    hanja: "土曜日",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "토요일에 여행 가요.",
      en: "I travel on Saturday."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-23",
    category: "Time and Days",
    front_ko: "일요일",
    front_en: "Sunday",
    romanization: "iryoil",
    hanja: "日曜日",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "일요일에 쉬어요.",
      en: "I rest on Sunday."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-24",
    category: "Time and Days",
    front_ko: "평일",
    front_en: "Weekday",
    romanization: "pyeongil",
    hanja: "平日",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "평일에는 바빠요.",
      en: "I am busy on weekdays."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-25",
    category: "Time and Days",
    front_ko: "주말",
    front_en: "Weekend",
    romanization: "jumal",
    hanja: "週末",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "주말에 쉬어요.",
      en: "I rest on weekends."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "time-and-days-26",
    category: "Time and Days",
    front_ko: "매일",
    front_en: "Everyday",
    romanization: "maeil",
    hanja: "每日",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "매일 공부해요.",
      en: "I study every day."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "korean-numbers-1",
    category: "Korean Numbers",
    front_ko: "하나 (한)",
    front_en: "1",
    romanization: "hana (han)",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "사과 한 개 있어요.",
      en: "There is one apple."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "korean-numbers-2",
    category: "Korean Numbers",
    front_ko: "둘 (두)",
    front_en: "2",
    romanization: "dul (du)",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "학생이 두 명 있어요.",
      en: "There are two students."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "korean-numbers-3",
    category: "Korean Numbers",
    front_ko: "셋 (세)",
    front_en: "3",
    romanization: "set (se)",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "책이 세 권 있어요.",
      en: "There are three books."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "korean-numbers-4",
    category: "Korean Numbers",
    front_ko: "넷 (네)",
    front_en: "4",
    romanization: "net (ne)",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "의자가 네 개 있어요.",
      en: "There are four chairs."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "korean-numbers-5",
    category: "Korean Numbers",
    front_ko: "다섯",
    front_en: "5",
    romanization: "daseot",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "다섯 명이 와요.",
      en: "Five people come."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "korean-numbers-6",
    category: "Korean Numbers",
    front_ko: "여섯",
    front_en: "6",
    romanization: "yeoseot",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "여섯 개가 있어요.",
      en: "There are six things."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "korean-numbers-7",
    category: "Korean Numbers",
    front_ko: "일곱",
    front_en: "7",
    romanization: "ilgop",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "일곱 시에 만나요.",
      en: "I meet at seven."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "korean-numbers-8",
    category: "Korean Numbers",
    front_ko: "여덟",
    front_en: "8",
    romanization: "yeodeol",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "여덟 개가 있어요.",
      en: "There are eight items."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "korean-numbers-9",
    category: "Korean Numbers",
    front_ko: "아홉",
    front_en: "9",
    romanization: "ahop",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "아홉 명이 있어요.",
      en: "There are nine people."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "korean-numbers-10",
    category: "Korean Numbers",
    front_ko: "열",
    front_en: "10",
    romanization: "yeol",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "열 개가 있어요.",
      en: "There are ten things."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "korean-numbers-11",
    category: "Korean Numbers",
    front_ko: "스물",
    front_en: "20",
    romanization: "seumul",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "스물 살이에요.",
      en: "I am twenty years old."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-1",
    category: "Sino Numbers",
    front_ko: "일",
    front_en: "1",
    romanization: "il",
    hanja: "一",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "사과 한 개 있어요.",
      en: "There is one apple."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-2",
    category: "Sino Numbers",
    front_ko: "이",
    front_en: "2",
    romanization: "i",
    hanja: "二",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "학생이 두 명 있어요.",
      en: "There are two students."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-3",
    category: "Sino Numbers",
    front_ko: "삼",
    front_en: "3",
    romanization: "sam",
    hanja: "三",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "책이 세 권 있어요.",
      en: "There are three books."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-4",
    category: "Sino Numbers",
    front_ko: "사",
    front_en: "4",
    romanization: "sa",
    hanja: "四",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "의자가 네 개 있어요.",
      en: "There are four chairs."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-5",
    category: "Sino Numbers",
    front_ko: "오",
    front_en: "5",
    romanization: "o",
    hanja: "五",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "다섯 명이 와요.",
      en: "Five people come."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-6",
    category: "Sino Numbers",
    front_ko: "육",
    front_en: "6",
    romanization: "yuk",
    hanja: "六",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "여섯 개가 있어요.",
      en: "There are six things."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-7",
    category: "Sino Numbers",
    front_ko: "칠",
    front_en: "7",
    romanization: "chil",
    hanja: "七",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "일곱 시에 만나요.",
      en: "I meet at seven."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-8",
    category: "Sino Numbers",
    front_ko: "팔",
    front_en: "8",
    romanization: "pal",
    hanja: "八",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "여덟 개가 있어요.",
      en: "There are eight items."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-9",
    category: "Sino Numbers",
    front_ko: "구",
    front_en: "9",
    romanization: "gu",
    hanja: "九",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "아홉 명이 있어요.",
      en: "There are nine people."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-10",
    category: "Sino Numbers",
    front_ko: "십",
    front_en: "10",
    romanization: "sip",
    hanja: "十",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "열 개가 있어요.",
      en: "There are ten things."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-11",
    category: "Sino Numbers",
    front_ko: "백",
    front_en: "100",
    romanization: "baek",
    hanja: "百",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "백 원이에요.",
      en: "It is one hundred won."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-12",
    category: "Sino Numbers",
    front_ko: "천",
    front_en: "1,000",
    romanization: "cheon",
    hanja: "千",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "천 원이에요.",
      en: "It is one thousand won."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "sino-numbers-13",
    category: "Sino Numbers",
    front_ko: "만",
    front_en: "10,000",
    romanization: "man",
    hanja: "萬",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "만 원이에요.",
      en: "It is ten thousand won."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "animal-1",
    category: "Animal",
    front_ko: "동물",
    front_en: "Animal",
    romanization: "dongmul",
    hanja: "動物",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "동물을 좋아해요.",
      en: "I like animals."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "animal-2",
    category: "Animal",
    front_ko: "고양이",
    front_en: "Cat",
    romanization: "goyangi",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "고양이 예문",
      en: "Example with Cat"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "animal-3",
    category: "Animal",
    front_ko: "말",
    front_en: "Horse",
    romanization: "mal",
    hanja: "马",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "말 예문",
      en: "Example with Horse"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "animal-4",
    category: "Animal",
    front_ko: "토끼",
    front_en: "Rabbit",
    romanization: "tokki",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "토끼 예문",
      en: "Example with Rabbit"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "flower-1",
    category: "Flower",
    front_ko: "꽃",
    front_en: "Flower",
    romanization: "kkot",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "꽃이 예뻐요.",
      en: "The flower is pretty."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "flower-2",
    category: "Flower",
    front_ko: "장미",
    front_en: "Rose",
    romanization: "jangmi",
    hanja: "蔷薇",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "장미 예문",
      en: "Example with Rose"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "flower-3",
    category: "Flower",
    front_ko: "해바라기",
    front_en: "Sunflower",
    romanization: "haebaragi",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "해바라기 예문",
      en: "Example with Sunflower"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "flower-4",
    category: "Flower",
    front_ko: "튤립",
    front_en: "Tulip",
    romanization: "tyullip",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "튤립 예문",
      en: "Example with Tulip"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "flower-5",
    category: "Flower",
    front_ko: "카네이션",
    front_en: "Carnation",
    romanization: "kaneisyeon",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "카네이션 예문",
      en: "Example with Carnation"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-1",
    category: "Counters and Units",
    front_ko: "물건",
    front_en: "Things",
    romanization: "mulgeon",
    hanja: "物件",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "물건이 많아요.",
      en: "There are many things."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-2",
    category: "Counters and Units",
    front_ko: "개",
    front_en: "Things (Unit)",
    romanization: "gae",
    hanja: "個",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "사과 두 개 있어요.",
      en: "There are two apples."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-3",
    category: "Counters and Units",
    front_ko: "명",
    front_en: "Person (Unit)",
    romanization: "myeong",
    hanja: "名",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "학생 세 명 있어요.",
      en: "There are three students."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-4",
    category: "Counters and Units",
    front_ko: "병",
    front_en: "Bottle",
    romanization: "byeong",
    hanja: "瓶",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "콜라 두 병 있어요.",
      en: "There are two bottles of cola."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-5",
    category: "Counters and Units",
    front_ko: "병",
    front_en: "Bottle (Unit)",
    romanization: "byeong",
    hanja: "瓶",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "콜라 두 병 있어요.",
      en: "There are two bottles of cola."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-6",
    category: "Counters and Units",
    front_ko: "책",
    front_en: "Book",
    romanization: "chaek",
    hanja: "冊",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "책을 읽어요.",
      en: "I read a book."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-7",
    category: "Counters and Units",
    front_ko: "권",
    front_en: "Book (Unit)",
    romanization: "gwon",
    hanja: "卷",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "책 세 권 있어요.",
      en: "There are three books."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-8",
    category: "Counters and Units",
    front_ko: "장",
    front_en: "Sheet of Paper (Unit)",
    romanization: "jang",
    hanja: "張",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "종이 한 장 있어요.",
      en: "There is one sheet of paper."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-9",
    category: "Counters and Units",
    front_ko: "마리",
    front_en: "Animal (Unit)",
    romanization: "mari",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "개 두 마리 있어요.",
      en: "There are two dogs."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-10",
    category: "Counters and Units",
    front_ko: "송이",
    front_en: "Flower (Unit)",
    romanization: "songi",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "꽃 한 송이 있어요.",
      en: "There is one flower."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-11",
    category: "Counters and Units",
    front_ko: "옷",
    front_en: "Clothes",
    romanization: "ot",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "옷을 입어요.",
      en: "I wear clothes."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-12",
    category: "Counters and Units",
    front_ko: "벌",
    front_en: "Clothes (Unit)",
    romanization: "beol",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "옷 두 벌 있어요.",
      en: "There are two sets of clothes."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-13",
    category: "Counters and Units",
    front_ko: "켤레",
    front_en: "Shoe (Unit)",
    romanization: "kyeolre",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "신발 한 켤레 있어요.",
      en: "There is one pair of shoes."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-14",
    category: "Counters and Units",
    front_ko: "대",
    front_en: "Computer (Unit)",
    romanization: "dae",
    hanja: "台",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "컴퓨터 한 대 있어요.",
      en: "There is one computer."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-15",
    category: "Counters and Units",
    front_ko: "컵",
    front_en: "Cup",
    romanization: "keop",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "컵이 있어요.",
      en: "There is a cup."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "counters-and-units-16",
    category: "Counters and Units",
    front_ko: "잔",
    front_en: "Cup (Unit)",
    romanization: "jan",
    hanja: "盏",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "물 한 잔 주세요.",
      en: "Please give me one cup of water."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-1",
    category: "Questions and Useful Words",
    front_ko: "왜",
    front_en: "Why",
    romanization: "wae",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "왜 늦었어요?",
      en: "Why are you late?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-2",
    category: "Questions and Useful Words",
    front_ko: "언제",
    front_en: "When",
    romanization: "eonje",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "언제 만나요?",
      en: "When do we meet?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-3",
    category: "Questions and Useful Words",
    front_ko: "어디",
    front_en: "Where",
    romanization: "eodi",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "어디에 가요?",
      en: "Where do you go?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-4",
    category: "Questions and Useful Words",
    front_ko: "어느",
    front_en: "Which",
    romanization: "eoneu",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "어느 것을 좋아해요?",
      en: "Which one do you like?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-5",
    category: "Questions and Useful Words",
    front_ko: "어떻게",
    front_en: "How",
    romanization: "eotteohge",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "어떻게 가요?",
      en: "How do you go?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-6",
    category: "Questions and Useful Words",
    front_ko: "누구",
    front_en: "Who",
    romanization: "nugu",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "누구를 만나요?",
      en: "Who do you meet?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-7",
    category: "Questions and Useful Words",
    front_ko: "무슨",
    front_en: "What kind of",
    romanization: "museun",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "무슨 음식을 좋아해요?",
      en: "What kind of food do you like?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-8",
    category: "Questions and Useful Words",
    front_ko: "뭐",
    front_en: "What (Informal)",
    romanization: "mwo",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.Formal
    },
    example: {
      ko: "뭐 해요?",
      en: "What are you doing?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-9",
    category: "Questions and Useful Words",
    front_ko: "무엇",
    front_en: "What (Formal)",
    romanization: "mueot",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.Formal
    },
    example: {
      ko: "무엇을 원해요?",
      en: "What do you want?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-10",
    category: "Questions and Useful Words",
    front_ko: "몇",
    front_en: "How many",
    romanization: "myeot",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "몇 명이에요?",
      en: "How many people?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-11",
    category: "Questions and Useful Words",
    front_ko: "있어요",
    front_en: "Have / Is there?",
    romanization: "isseoyo",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "책이 있어요.",
      en: "There is a book."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-12",
    category: "Questions and Useful Words",
    front_ko: "없어요",
    front_en: "Don't have / Isn't there?",
    romanization: "eopseoyo",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "돈이 없어요.",
      en: "I don't have money."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-13",
    category: "Questions and Useful Words",
    front_ko: "얼마예요?",
    front_en: "How much is it?",
    romanization: "eolmayeyo",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "이거 얼마예요?",
      en: "How much is this?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-14",
    category: "Questions and Useful Words",
    front_ko: "전화번호",
    front_en: "Phone Number",
    romanization: "jeonhwabeonho",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "전화번호가 몇반이에요?",
      en: "What is your phone number?"
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-15",
    category: "Questions and Useful Words",
    front_ko: "약속",
    front_en: "Promise",
    romanization: "yaksok",
    hanja: "約束",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "약속이 있어요.",
      en: "I have an appointment."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-16",
    category: "Questions and Useful Words",
    front_ko: "시간",
    front_en: "Time",
    romanization: "sigan",
    hanja: "時間",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "시간이 없어요.",
      en: "I don't have time."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-17",
    category: "Questions and Useful Words",
    front_ko: "보통",
    front_en: "Usually",
    romanization: "botong",
    hanja: "普通",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "보통 아침에 일어나요.",
      en: "I usually wake up in the morning."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-18",
    category: "Questions and Useful Words",
    front_ko: "그럼",
    front_en: "In that case",
    romanization: "geureom",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "그럼 내일 봐요.",
      en: "Then see you tomorrow."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-19",
    category: "Questions and Useful Words",
    front_ko: "아주",
    front_en: "Very",
    romanization: "aju",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "아주 좋아요.",
      en: "It is very good."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-20",
    category: "Questions and Useful Words",
    front_ko: "도",
    front_en: "Too/also",
    romanization: "do",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "저도 가요.",
      en: "I go too."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "questions-and-useful-words-21",
    category: "Questions and Useful Words",
    front_ko: "저도",
    front_en: "Me too",
    romanization: "jeodo",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "저도 학생이에요.",
      en: "Me too I am a student."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "month-names-1",
    category: "Month Names",
    front_ko: "일월",
    front_en: "January",
    romanization: "ilwol",
    hanja: "一月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "일월에 눈이 와요.",
      en: "It snows in January."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "month-names-2",
    category: "Month Names",
    front_ko: "이월",
    front_en: "February",
    romanization: "iwol",
    hanja: "二月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "이월에 춥습니다.",
      en: "It is cold in February."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "month-names-3",
    category: "Month Names",
    front_ko: "삼월",
    front_en: "March",
    romanization: "samwol",
    hanja: "三月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "삼월에 꽃이 피어요.",
      en: "Flowers bloom in March."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "month-names-4",
    category: "Month Names",
    front_ko: "사월",
    front_en: "April",
    romanization: "sawol",
    hanja: "四月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "사월에 비가 와요.",
      en: "It rains in April."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "month-names-5",
    category: "Month Names",
    front_ko: "오월",
    front_en: "May",
    romanization: "owol",
    hanja: "五月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "오월에 날씨가 좋아요.",
      en: "The weather is good in May."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "month-names-6",
    category: "Month Names",
    front_ko: "유월",
    front_en: "June",
    romanization: "yuwol",
    hanja: "六月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "유월에 학교에 가요.",
      en: "I go to school in June."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "month-names-7",
    category: "Month Names",
    front_ko: "칠월",
    front_en: "July",
    romanization: "chilwol",
    hanja: "七月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "칠월에 여름 방학이에요.",
      en: "It is summer vacation in July."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "month-names-8",
    category: "Month Names",
    front_ko: "팔월",
    front_en: "August",
    romanization: "palwol",
    hanja: "八月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "팔월에 더워요.",
      en: "It is hot in August."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "month-names-9",
    category: "Month Names",
    front_ko: "구월",
    front_en: "September",
    romanization: "guwol",
    hanja: "九月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "구월에 가을이 와요.",
      en: "Autumn comes in September."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "month-names-10",
    category: "Month Names",
    front_ko: "시월",
    front_en: "October",
    romanization: "siwol",
    hanja: "十月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "시월에 단풍이 예뻐요.",
      en: "The autumn leaves are pretty in October."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "month-names-11",
    category: "Month Names",
    front_ko: "십일월",
    front_en: "November",
    romanization: "sipilwol",
    hanja: "十一月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "십일월에 날씨가 추워요.",
      en: "The weather is cold in November."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

  {
    id: "month-names-12",
    category: "Month Names",
    front_ko: "십이월",
    front_en: "December",
    romanization: "sipiwol",
    hanja: "十二月",
    meta: {
      type: CardType.Noun,
      politeness: Politeness.None
    },
    example: {
      ko: "십이월에 크리스마스가 있어요.",
      en: "There is Christmas in December."
    },
    interval: 0,
    ease: 2.5,
    dueDate: now
  },

];