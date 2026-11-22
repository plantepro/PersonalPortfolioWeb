export type JournalEntry = {
  slug: string;
  title: string;
  date: string;
  description: string;
  inspiration?: {
    author: string;
    work: string;
  };
  body: string[];
};

export type JournalCategory = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  entries: JournalEntry[];
  parentSlug?: string;
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
      {
        slug: "after-love-2020",
        title: "After Love",
        date: "Date to come",
        description: "2020",
        body: [
          "清澈的空气中闪烁着清新的星，树梢上是静谧的柠檬和璀璨的蝉鸣。今天是满月，在Pakistan，在Lahore，这座爱之城。Mary，许我问你，在今夜，你是否也在同我望着一样的月，并满心欢喜？",
        ],
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
      {
        slug: "ru-ti-qing-ren",
        title: "情人",
        date: "2015-11-11",
        description: "After Marguerite Duras’s The Lover",
        inspiration: {
          author: "Marguerite Duras",
          work: "The Lover",
        },
        body: [
          "如題，情人",
          "他們的面貌總是出現在我的記憶裡，包括那層蒼白如紙的關係，那些不同於一般的誓言和吻，所有的所有，在暗的角落裡莫名翕動，像一小株罪惡的火苗，故作漫不經心的搖曳跳躍，藉此來誘惑我，我要來寫他們的故事，我依然和這些人在一起，在這個故事裡，只和他們在一起。",
          "他和她是生活中再簡單不過的兩人，我都懶得給他們取上名字。他們的故事是千萬個故事中最平凡的一個， 只是當他們身在其中之時，卻覺得世上的一切一切都築成了它，他們便是每分每秒上演戲劇的那對主角，我們且稱他們為“情人”。",
          "我的寫作向來毫無邏輯感，只能靠拼湊他們經歷的片斷，我清楚地記得他們一起的笑容，這些感情熱烈的孤獨的人在日常的生活中卻顯得平淡無味，大多數的時候，看他們的生活，你會覺得是在欣賞一出啞劇。",
          "有一次她問他，是不是別的情人都像我們一樣？",
          "他笑了：什麼是情人？",
          "“那種明知不能在一起卻還是要相愛的人。”",
          "“就像我們這樣？”",
          "“就像我們這樣。”",
          "“永遠都不能在一起？”",
          "“永遠不行。”",
          "“那我們要一直這樣到什麼時候？”",
          "“等到我們都老了。”",
          "他們都笑了，但這樣有一搭無一搭的對話卻常使得他想要落淚。",
          "連他們自己都想不清故事是從什麼時候開始的，就如這個夏天，當他們還睡眼惺忪的在冬日消融的雪水中醒來，一切已經轟轟烈烈的展開了。他們趕上最好的日子，艷的光，沒有一絲風的日子，所有萌生的愛意都可以盡情宣洩在這天地裡！",
          "他們的雙腳曾踏上過太多的地方，最初的開始，夏天伊始的山坡上那片草地，那些上一年留下的乾枯的草，刺進他們的衣服，使得他們只能直挺挺的仰躺著，不能動彈，滿眼盡是晴光與蔚藍色的天。他們聊起自己的過去，開心的大聲笑起來，遠處籃球場上的少年停下手裡的事情，吃驚地望著他們。",
          "在一個清朗而寂靜的雨夜，她提了傘去找他，整個城市盡已安睡，她遠遠看到他向她走來，那被雨水打濕而貼在額上的一縷縷頭髮，她開始向他跑去，大聲笑著闖過紅色的交通燈，一腳踏在路邊的水窪裡，滿身全是水花，也不管，不管，一陣溫熱的雨點開始噼噼啪啪的打在新生的梧桐葉上。",
          "有一次，還有一次，微風曾愜意地在平靜的湖面上輕快地跳舞，他們划著船，瘋狂地追趕停在湖上的一群鴨子，試圖給他們拍一張放大的正面特寫。他把槳舉的很高，在金色燦爛的陽光和湖的暮靄之中，然後用力地，用力地向後划去，赤金色的因用力而過度繃緊的勻稱的肌肉，那象牙質的裸露的光滑的皮膚在熠熠發亮，包括他的笑容。波光皚皚的湖面下，無數的水草隨著他的槳蕩開的水波搖曳生姿。 Mon cher, mon très, très cher，在那樣的七月裡，他曾為她建造過怎樣的一個愛的世界！",
          "曾經有許多次，在喧鬧的雲霄飛車上，他們在快樂的山尖與谷底飛騰回旋，那每秒鐘萬億億次的快樂，那些頭暈目眩的短暫激情，全部地，毫無保留地迸發出來。曾有那麼一瞬間，在車身懸掛的小船裡，他們瞬間掠過一大片平靜的湖面，混亂喧囂的世界一下子寧靜下來，她甚至還看到迷蒙的湖上那些柔軟的柳樹的枝芽。她曾很認真地想要在這瞬間裡再留一刻，但轉眼間那列車就已帶著這小小的不起眼的快樂呼嘯而過，興致勃勃地駛向終點。",
          "她不曾來得及閉上雙眼。",
          "那是永久的影像定格。",
          "也曾經，在那條名叫Yonge的寬敞時髦的街道上，出神地盯著身旁各色各樣，來來往往的汽車，氣派的行色匆匆面無表情的行人，兩旁高的封住天空的玻璃建築，偶爾反射來的白灼而劇烈的光讓他們不約而同地閉上眼睛，臉上卻盡是笑意。在有一點古老的歐洲味道那充滿陽光，灑了水，發出一股潮濕氣味的人行道上，太陽全神貫注於開滿了碎花的碎石子路，隨處是躲閃不掉的夏日餘味。",
          "曾經，曾經。。。",
          "她突然想起一句，紙短情長",
          "她曾覺得這是粗俗下流的情人間不專心的挑逗，因此從來不用，",
          "但現在，卻覺得是最真最無奈的誓言",
          "寫盡她的所有，寫不盡她曾經的，無盡的，唯一只對他的愛情，",
          "現在只留下灰燼。",
          "他從不曾知道，在他離開前的最後一天，她曾不可控制地在他身後追趕，腦子裡一片空白。甚至直到現在，只要心中一出現冬天黃昏的那條街，那條枝葉扶疏，灰白硬冷，充滿刺耳的剎車與汽笛的鳴叫的街，她仍不免驚慌地倒抽一口冷氣。她看到他那歡樂的背影，在街的對面，正朝著一個完全遠離她的，全新的方向前進了。他們之間是熙流的交通，簡直沒有任何辦法跨到路的另外一邊。",
          "凜冽的風開始使她大口地喘氣，她盲目地，毫無頭緒地在後面跟了很久，連她自己都不甚清楚究竟這樣的舉動是出於什麼目的。",
          "有那麼一個瞬間，她被紅燈擋在了路口。",
          "她默默地看著他越來越遠的背影，",
          "突然覺得再也見不到他。",
          "是的，就是如此，再不會相見。",
          "她十分肯定他永遠離開了她，那朦朧的灰白色的冬日初始的街道上，在她眼裡，似乎充滿了好多微笑著的，故作生氣責怪她的他的臉，最後全部消失不見。",
          "她開始折身，向來時的方向走回去。",
          "她徹底地放棄了掙扎",
          "不抱有任何幻想",
          "就是這樣，就是如此，別了，永別了我的情人。",
          "這樣的場景，在她的腦海裡，曾經反覆出現過好多遍，最終以這樣一種寧靜的方式收尾",
          "不出所料。",
          "這個故事開始變得沒有任何結局。",
          "幕布還未落下，情人已經離場，",
          "偌大的靜悄悄的舞台上，燈光撒了滿地。",
          "無人喝彩，",
          "暗的角落裡，不知是誰傳來一聲嘆息。",
          "也許是我的錯覺而已。",
          "記得有一次他曾問她，五年後他們會是什麼樣子？她緘默不語。對於不可知的未來，她並無太多打算，但她想她還會記得他，在熙攘的人群中，在錯身偶遇的街道上，第一眼認出他來。那些曾經歡笑著的，平靜的，惱怒的，憂傷的，啜泣著的情人的臉，不斷湧上，將她一層層包裹起來...",
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
    title: "Poem",
    description: "Fragments of thought",
    intro: "Original poetry and fragments of thought, collected quietly.",
    entries: [],
    parentSlug: "writing",
  },
  {
    slug: "essays",
    title: "Essay",
    description: "Essays and longer pieces of writing.",
    intro: "A place for essays and longer pieces of writing.",
    entries: [],
    parentSlug: "writing",
  },
  {
    slug: "writing",
    title: "隨筆",
    description: "Poems, essays, and other written fragments.",
    intro: "Poem and Essay, collected quietly.",
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
