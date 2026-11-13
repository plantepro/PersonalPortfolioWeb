export type JournalEntry = {
  slug: string;
  title: string;
  date: string;
  description: string;
  body: string[];
};

export type JournalCategory = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  entries: JournalEntry[];
};

const placeholderBody = [
  "This is a placeholder for a future journal entry. Add your own notes, details, and writing here when you are ready.",
];

export const journalCategories: JournalCategory[] = [
  {
    slug: "films",
    title: "Films",
    description: "Films that stay with me, organized by emotion and memory.",
    intro: "A small archive of films, feelings, and scenes worth returning to.",
    entries: [
      {
        slug: "film-notes",
        title: "Film Notes",
        date: "Date to come",
        description:
          "A space for future writing about the images, ideas, and moments that linger.",
        body: placeholderBody,
      },
      {
        slug: "scenes-that-stay",
        title: "Scenes That Stay",
        date: "Date to come",
        description:
          "A future collection of memorable scenes and the details that make them resonate.",
        body: placeholderBody,
      },
    ],
  },
  {
    slug: "books",
    title: "Books",
    description: "Reading notes, favorite passages, and books worth revisiting.",
    intro: "Reading notes and passages gathered along the way.",
    entries: [
      {
        slug: "books-i-return-to",
        title: "Books I Return To",
        date: "Date to come",
        description:
          "A place to write about books that invite another reading.",
        body: placeholderBody,
      },
      {
        slug: "reading-notes",
        title: "Reading Notes",
        date: "Date to come",
        description:
          "A quiet archive for future passages, annotations, and reading notes.",
        body: placeholderBody,
      },
      {
        slug: "the-dangerous-summer",
        title: "A Dangerous Summer",
        date: "2012-04-06",
        description: "Ernest Hemingway",
        body: [
          "夏之危险，在于欢笑纵情掩盖沉默冷静，阳光炙烈不容阴郁喘息。在于触目的鲜血总会被及时清洗，在于被掌控情绪的观众渴望着每一个美轮美奂的死亡之来临。",
          "我无过多语言评述这本书，对于斗牛，我第一次在这本书中了解到专业的术语，技法及欣赏角度。海明威的书一承他的风格，硬净冰冷，无任何揣测内心活动的描写，只有简单的事件描述夹杂人物对白。他面对死亡，冷静地审视与分析，直到最后一刻。以下仅摘抄一些片段：",
          "“我当时认为安东尼奥这一次挥舞披风无法胜过他在撩拨第一头牛时那样。但是他还是胜过了。我从围墙那儿注视着他，设法想到他如何可以那样挥舞，永远那样挥舞，使那个动作如此优美动人。刻画出那种形象，并使每一个闪避动作似乎是持久的，就在于那种贴近和徐缓。不过使它如此动人的，是他注视着死亡由他身旁走过的那种完全自然和那种传统朴实的神气。那种神气就仿佛他正以一种全然上升的格律在监视着死亡，帮助死亡，并使死亡成为自己的伙伴那样。”",
          "“当然，要是她会说西班牙语，知道人家是跟她开玩笑，不是侮辱她，要是她能整日整夜喝酒，跟邀请她的任何一群人跳舞，要是她不在意人家把东西泼在她身上，要是她喜欢连续不断的嘈杂声和音乐，还爱好爆竹，特别是那些落在靠她很近地方的，或是烧到了她衣服的，要是她认为看见自己为了玩笑、为了放肆可以怎样险些儿被牛挑刺死是正当合理的，要是她遭到雨淋并不伤风感冒，还欣赏尘土，喜欢混乱而不规则的进餐，根本不需要睡觉，没有自来水仍旧可以保持得很干净，那么你就带她来。你很可能会丢失她，被一个比你出色的男人把她夺去。”",
          "“马塞利安诺的木桌子和楼梯总擦洗得和一条游艇上的柚木甲板一样洁净，只不过餐桌上不失体面地保有一些酒渍印。那里的酒还和你二十一岁时一样好，菜肴也像一贯的那样美味可口。餐厅里奏着同样的歌曲，也有些劈啪作响的新歌谣，突然一下压倒了鼓声和管乐声。从前很年轻的脸，全变得和我的一样苍老，不过大伙儿全都记得我们当年的情形。眼睛并没有变样；谁也没有发胖。不论眼睛看到了什么，没有一张嘴怀恨抱怨。嘴四周的一些沉痛的纹路是战败了的最初痕迹。谁也没有遭到挫折。”",
          "摘自：《危险的夏天》 — [美] 海明威",
          "不管怎么说，想要再回西班牙了。",
        ],
      },
    ],
  },
  {
    slug: "songs",
    title: "Songs",
    description: "100+ plays on repeat...",
    intro: "Listening notes, recurring favorites, and songs kept close.",
    entries: [
      {
        slug: "songs-on-repeat",
        title: "Songs on Repeat",
        date: "Date to come",
        description:
          "A future listening note about songs that find their way back into rotation.",
        body: placeholderBody,
      },
      {
        slug: "listening-notes",
        title: "Listening Notes",
        date: "Date to come",
        description:
          "A space for notes on sound, lyrics, and music worth keeping nearby.",
        body: placeholderBody,
      },
    ],
  },
  {
    slug: "travel",
    title: "Travel",
    description: "World in my eyes, 世界紀行",
    intro: "Places, photographs, and stories collected along the way.",
    entries: [
      {
        slug: "a-place-i-remember",
        title: "A Place I Remember",
        date: "Date to come",
        description:
          "A placeholder for a future place note; no location or story has been added.",
        body: placeholderBody,
      },
      {
        slug: "notes-from-elsewhere",
        title: "Notes from Elsewhere",
        date: "Date to come",
        description:
          "A structure for future travel writing, ready for details when you choose to add them.",
        body: placeholderBody,
      },
    ],
  },
  {
    slug: "reflections",
    title: "Reflections",
    description: "Personal essays, observations, and thoughts from everyday life.",
    intro: "Personal essays and observations from ordinary days.",
    entries: [
      {
        slug: "small-reflections",
        title: "Small Reflections",
        date: "Date to come",
        description:
          "A place for future short essays and thoughts still taking shape.",
        body: placeholderBody,
      },
      {
        slug: "everyday-observations",
        title: "Everyday Observations",
        date: "Date to come",
        description:
          "An open space for noticing and writing about ordinary moments.",
        body: placeholderBody,
      },
    ],
  },
  {
    slug: "poems",
    title: "Poems",
    description: "Fragments of thought",
    intro: "Original poetry and fragments of thought, collected quietly.",
    entries: [],
  },
];

export function findJournalCategory(slug: string | undefined) {
  return journalCategories.find((category) => category.slug === slug);
}

export function findJournalEntry(
  category: JournalCategory,
  entrySlug: string | undefined,
) {
  return category.entries.find((entry) => entry.slug === entrySlug);
}
