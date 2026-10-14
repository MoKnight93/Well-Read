/* Well-Read demo data.
   Everything the pages show lives here, so there is no duplicated HTML.
   Cover and author photos are external URLs: for a production site, download
   them into Assets/Images and point these fields at the local files. */

window.WELLREAD = {
  novels: [
  {
    "id": "the-little-prince",
    "title": "The Little Prince",
    "cover": "Assets/Images/covers/the-little-prince.webp",
    "summary": "The simple tale tells the story of a child, the little prince, who travels the universe gaining wisdom. The novella has been translated into hundreds of languages and has sold some 200 million copies worldwide, making it one of the best-selling books in publishing history.",
    "buy": "https://www.amazon.com/Little-Prince-Antoine-Saint-Exup%C3%A9ry/dp/0156012197"
  },
  {
    "id": "imaginary-friend",
    "title": "Imaginary Friend",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/5124zts4MvL.jpg",
    "summary": "“Imaginary Friend” tells the story of 7-year-old Christopher who moves with his mother to a new town when she flees an abusive ex. After Christopher goes missing for six days, a series of strange occurrences take place, including a lottery windfall and Christopher's sudden intelligence.",
    "buy": "https://www.amazon.com/Imaginary-Friend-Stephen-Chbosky/dp/1538731339"
  },
  {
    "id": "red-dragon",
    "title": "Red Dragon",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51cVLtw1PsL._SX280_BO1,204,203,200_.jpg",
    "summary": "The plot follows former FBI profiler Will Graham, who comes out of retirement to find and apprehend an enigmatic serial killer nicknamed \"The Tooth Fairy\".",
    "buy": "https://www.amazon.com/Dragon-Hannibal-Lecter-Thomas-Harris/dp/0425228223"
  },
  {
    "id": "the-picture-of-dorian-gray",
    "title": "The Picture of Dorian Gray",
    "cover": "https://kbimages1-a.akamaihd.net/f437d8b9-fff8-4359-8ba5-9b5b20645c6b/353/569/90/False/the-picture-of-dorian-gray-322.jpg",
    "summary": "The work, an archetypal tale of a young man who purchases eternal youth at the expense of his soul, was a romantic exposition of Wilde's own Aestheticism.",
    "buy": "https://www.amazon.com/Picture-Dorian-Dover-Thrift-Editions/dp/0486278077"
  },
  {
    "id": "the-abc-murders",
    "title": "The ABC Murders",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41w+j9DlfpL._SX324_BO1,204,203,200_.jpg",
    "summary": "The ABC Murders is a work of detective fiction by British writer Agatha Christie, featuring her characters Hercule Poirot, Arthur Hastings and Chief Inspector Japp, as they contend with a series of killings by a mysterious murderer known only as \"A.B.C.\".",
    "buy": "https://www.amazon.in/ABC-Murders-Poirot-Agatha-Christie/dp/0008308209"
  },
  {
    "id": "murder-on-the-orient-express",
    "title": "Murder on the Orient Express",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/5178IkM3VqL.jpg",
    "summary": "A lavish trip through Europe quickly unfolds into a race against time to solve a murder aboard a train. When an avalanche stops the Orient Express dead in its tracks, the world's greatest detective -- Hercule Poirot -- arrives to interrogate all passengers and search for clues before the killer can strike again.",
    "buy": "https://www.amazon.com/Murder-Orient-Express-Hercule-Mysteries/dp/0062073508"
  },
  {
    "id": "a-murder-is-announced",
    "title": "A Murder is Announced",
    "cover": "https://agathachristie.imgix.net/hcuk-paperback/A-Murder-is-Announced-PB.jpg?auto=compress,format&fit=clip&q=65&w=300",
    "summary": "The villagers of Chipping Cleghorn are summoned by a newspaper notice to the house of Letitia Blacklock, anticipating a murder game. But things become too real when someone is shot dead.",
    "buy": "https://www.amazon.com/Murder-Announced-Marple-Mystery-Mysteries/dp/006207363X"
  },
  {
    "id": "the-hating-game",
    "title": "The Hating Game",
    "cover": "https://i2.wp.com/diwanegypt.com/wp-content/uploads/2020/08/9780062439598.jpg?fit=1600%2C2409&ssl=1",
    "summary": "The story of The Hating Game by Sally Thorne revolves around Lucy Hutton and Joshua Templeman, two executive assistants forced together when rival publishing companies merge, making their respective bosses co-CEOs. They spend their days antagonizing each other and verbally sparring.",
    "buy": "https://www.amazon.com/Hating-Game-Novel-Sally-Thorne/dp/0062439596"
  },
  {
    "id": "pride-and-prejudice",
    "title": "Pride and Prejudice",
    "cover": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4351/9781435159631.jpg",
    "summary": "Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.",
    "buy": "https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/8172344503"
  },
  {
    "id": "beloved",
    "title": "Beloved",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41Rdzbiqh7L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    "summary": "The novel is based on the true story of Margaret Garner, a Black slave woman who in 1856 escaped from a Kentucky plantation with her husband, Robert, and their children. They sought refuge in Ohio, but their owner and law officers soon caught up with the family.",
    "buy": "https://www.amazon.com/Beloved-Toni-Morrison/dp/1400033411"
  },
  {
    "id": "the-invisible-man",
    "title": "The Invisible Man",
    "cover": "https://kbimages1-a.akamaihd.net/b295e1ae-7867-4621-a27f-a4a3f933b6ba/353/569/90/False/the-invisible-man-132.jpg",
    "summary": "The Invisible Man is a science-fiction novel by H.G. Wells, published in 1897. The story concerns the life and death of a scientist named Griffin who has gone mad. Having learned how to make himself invisible, Griffin begins to use his invisibility for nefarious purposes, including murder.",
    "buy": "https://www.amazon.com/s?k=The+Invisible+Man+H.G.+Wells"
  },
  {
    "id": "death-on-the-nile",
    "title": "Death on the Nile",
    "cover": "https://diwanegypt.com/wp-content/uploads/2020/08/9780007527557.jpg",
    "summary": "Detective Hercule Poirot investigates the murder of a young heiress aboard a cruise ship on the Nile River.",
    "buy": "https://www.amazon.com/s?k=Death+on+the+Nile+Agatha+Christie"
  },
  {
    "id": "and-then-there-were-none",
    "title": "And Then There Were None",
    "cover": "https://images-eu.ssl-images-amazon.com/images/I/51MlxNgCsyL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    "summary": "Considered the best mystery novel ever written by many readers, And Then There Were None is the story of ten strangers, each lured to Indian Island by a mysterious host. Once his guests have arrived, the host accuses each person of murder.",
    "buy": "https://www.amazon.com/Then-There-Were-None/dp/0062073486"
  },
  {
    "id": "crooked-house",
    "title": "Crooked House",
    "cover": "https://upload.wikimedia.org/wikipedia/en/c/cc/Crooked_House_film_poster.jpg",
    "summary": "Young Sophia returns after the war to find her grandfather poisoned and a family filled with suspects. Luckily her fiance, Charles, is the son of the assistant commissioner of Scotland Yard.",
    "buy": "https://www.amazon.com/Crooked-House-Agatha-Christie/dp/0062073532"
  },
  {
    "id": "after-the-funeral",
    "title": "After the Funeral",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41QbTl36zzL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    "summary": "At Richard Abernethie's funeral his niece, Cora, suggests he was probably murdered. The next day Cora is murdered herself, so Poirot interrogates the family to find her killer.",
    "buy": "https://www.amazon.com/After-Funeral-Hercule-Mystery-Mysteries/dp/0062073826"
  }
],

  books: [
  {
    "title": "Physics Galaxy",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41f8ztH4r9L._SX366_BO1,204,203,200_.jpg",
    "summary": "Physics galaxy by Ashish Arora is a result of deep stress and serious efforts of distinguished academician Ashish Arora to ensure fundamental understanding and advance applications of concepts in Physics. This series includes four books which cover the complete syllabus of class XI and XII."
  },
  {
    "title": "Atlas of Ancient Egypt",
    "cover": "https://aucpress.com/wp-content/uploads/2016/10/4247040.jpg",
    "summary": "Atlas of Ancient Egypt (Cultural Atlas of) Hardcover – July 1, 1980. The book is divided into three parts. The first establishes the cultural setting of ancient Egypt, with chapters on its geography, archaeology, history, art and architecture. ... The book is divided into three parts."
  },
  {
    "title": "The Story of Earth",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/415MsjGEYtL._SX330_BO1,204,203,200_.jpg",
    "summary": "The Story of Earth: The First 4.5 Billion Years, from Stardust to Living Planet. Author Robert M. Hazen writes of how the co-evolution of the geosphere and biosphere—of rocks and living matter—has shaped our planet into the only one of its kind in the Solar System, if not the entire cosmos."
  },
  {
    "title": "The History of Chemistry",
    "cover": "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/1024x536/4/7/8/89478_0416cw_reviews_the-history-of-chemistry_300m.jpg",
    "summary": "The history of chemistry represents a time span from ancient history to the present. By 1000 BC, civilizations used technologies that would eventually form the basis of the various branches of chemistry. ... However, by performing experiments and recording the results, alchemists set the stage for modern chemistry."
  },
  {
    "title": "A Cultural History of Physics",
    "cover": "https://books.google.com.eg/books/publisher/content?id=7_LRBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73WjWR8palQeA68JV4wUkO-r1QJG-MnmIlkXBSdLJ16Ptr3USp4qQwjn7-quOE2GDu1XDRRGZi8HmaiMAEoyPiF9aA4qbZXRybGn_0xezLaSsAgvSWv8syjrje7TXqC3M3-LjXi",
    "summary": "A Cultural History of Physics meticulously explains the specifics of its many examples, and it's packed cover to cover with charts, graphs, and diagrams illustrating key physics discoveries and how they revolutionized the world."
  },
  {
    "title": "A Brief History of Time",
    "cover": "https://www.asiabooks.com/media/catalog/product/cache/1/image/264x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780857501004_1.jpg",
    "summary": "A Brief History Of Time is a book authored by the science whiz Stephen Hawking. ... This great work of science presents everything in an easy-to-understand language. A Brief History Of Time demystifies terms like anti matter, quarks, black holes, arrows of time, and big bang for the layman."
  },
  {
    "title": "Science: A History",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91BXaoP+GKL.jpg",
    "summary": "From award-winning science writer John Gribbin, Science: A History is the enthralling story of the men and women who changed the way we see the world, and the turbulent times they lived in. ... Filled with pioneers, visionaries, eccentrics and madmen, this is the history of science as it has never been told before."
  },
  {
    "title": "A Brief History of the Universe",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51jJV+RfQEL.jpg",
    "summary": "Beginning at Stonehenge and ending with the current crisis in String Theory, the story of this eternal question to uncover the mysteries of the universe describes a narrative that includes some of the greatest discoveries of all time and leading personalities, including Aristotle, Copernicus, and Isaac Newton."
  }
],

  authors: [
  {
    "name": "Agatha Christie",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Agatha_Christie.png",
    "bio": "Dame Agatha Mary Clarissa Christie, Lady Mallowan, DBE (née Miller; 15 September 1890 – 12 January 1976) was an English writer known for her 66 detective novels and 14 short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple."
  },
  {
    "name": "Toni Morrison",
    "photo": "https://cdn.britannica.com/68/204268-050-8608BCDB/Toni-Morrison-2004.jpg",
    "bio": "Toni Morrison, original name Chloe Anthony Wofford, (born February 18, 1931, Lorain, Ohio, U.S.—died August 5, 2019, Bronx, New York), American writer noted for her examination of Black experience (particularly Black female experience) within the Black community. She received the Nobel Prize for Literature in 1993."
  },
  {
    "name": "Ernest Hemingway",
    "photo": "https://m.media-amazon.com/images/I/51HLugL4E-L._AC_.jpg",
    "bio": "Ernest Hemingway, in full Ernest Miller Hemingway, (born July 21, 1899, Cicero [now in Oak Park], Illinois, U.S.—died July 2, 1961, Ketchum, Idaho), American novelist and short-story writer, awarded the Nobel Prize for Literature in 1954."
  },
  {
    "name": "Maya Angelou",
    "photo": "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3NjM5NTA5NjU4Mzc5NjUy/maya_angelou_photo_by_deborah_feingold_corbis_entertainment_getty_533084708.jpg",
    "bio": "Maya Angelou was an American author, actress, screenwriter, dancer, poet and civil rights activist best known for her 1969 memoir, I Know Why the Caged Bird Sings, which made literary history as the first nonfiction bestseller by an African American woman."
  },
  {
    "name": "Clarice Lispector",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/7/75/Clarice_Lispector_%28cropped%29.jpg",
    "bio": "Clarice Lispector, (born December 10, 1920, Chechelnyk, Ukraine, Russian Empire—died December 9, 1977, Rio de Janeiro, Brazil), novelist and short-story writer, one of Brazil's most important literary figures, who is considered to be among the greatest women writers of the 20th century."
  },
  {
    "name": "J.D. Salinger",
    "photo": "https://i.pinimg.com/originals/37/fa/b1/37fab19ec41843dc639f0315b5a520ec.jpg",
    "bio": "Salinger, in full Jerome David Salinger, (born January 1, 1919, New York, New York, U.S.—died January 27, 2010, Cornish, New Hampshire), American writer whose novel The Catcher in the Rye (1951) won critical acclaim and devoted admirers, especially among the post-World War II generation of college students."
  },
  {
    "name": "Stephen King",
    "photo": "https://janefriedman.com/wp-content/uploads/2012/09/sk_color_press_photo.jpeg",
    "bio": "Stephen King, in full Stephen Edwin King, (born September 21, 1947, Portland, Maine, U.S.), American novelist and short-story writer whose books were credited with reviving the genre of horror fiction in the late 20th century. King graduated from the University of Maine in 1970 with a bachelor's degree in English."
  },
  {
    "name": "F. Scott Fitzgerald",
    "photo": "https://i.pinimg.com/originals/c4/b2/04/c4b20480852b24b8e5a739ce937ffe22.jpg",
    "bio": "F. Scott Fitzgerald was a 20th-century American short-story writer and novelist. Although he completed four novels and more than 150 short stories in his lifetime, he is perhaps best remembered for his third novel, The Great Gatsby (1925). The Great Gatsby is today widely considered “the great American novel.”"
  },
  {
    "name": "Noam Chomsky",
    "photo": "https://www.thoughtco.com/thmb/5IO14KmHqT4x1uvmblDPAhCrais=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/noam-chomsky-headshot-d5a7d9ed5f364cbfb15a40f4e711dffc.jpg",
    "bio": "Avram Noam Chomsky (born December 7, 1928) is an American linguist, philosopher, cognitive scientist, historian, social critic, and political activist. ... He created or co-created the universal grammar theory, the generative grammar theory, the Chomsky hierarchy, and the minimalist program."
  },
  {
    "name": "J.K. Rowling",
    "photo": "https://s2.glbimg.com/XsbfFRDdcLdvQyLaQPsvHvbAYvs=/e.glbimg.com/og/ed/f/original/2020/11/10/50414449_1979923558782917_748461144397578240_o.jpg",
    "bio": "J.K. Rowling is the British author who created the popular and critically acclaimed Harry Potter series (seven books published between 1997 and 2007), about a lonely orphan who discovers that he is actually a wizard and enrolls in the Hogwarts School of Witchcraft and Wizardry."
  },
  {
    "name": "Malcolm Gladwell",
    "photo": "https://www.thefamouspeople.com/profiles/images/malcolm-gladwell-6.jpg",
    "bio": "Malcolm Gladwell is best known for his bestselling books The Tipping Point, Blink, and Outliers. He has also written for The New Yorker and The Washington Post. His writings encompass subjects such as psychology, economics, and sociology. Gladwell has also co-founded a podcast company and hosts the podcast Revisionist History."
  },
  {
    "name": "Leo Tolstoy",
    "photo": "https://scontent.fcai19-1.fna.fbcdn.net/v/t1.18169-9/398538_346763422015943_1109906360_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeESEfTMD8u5_5K9LfgZCey_PGuePU5gwA08a549TmDADfstoJrZ9ytR2_fzMhXYKzBDJK5Sph3GhivZiCar5Q9G&_nc_ohc=ylg5ZK3BzDEAX_XdRC1&_nc_ht=scontent.fcai19-1.fna&oh=00_AfDW9YDfOl-ru8WfL8Fow0X1bb3mnpq1zvsXEJktX98IBw&oe=63CE86A4",
    "bio": "Born to an aristocratic Russian family in 1828, Tolstoy is best known for the novels War and Peace (1869) and Anna Karenina (1878), often cited as pinnacles of realist fiction."
  }
],
};
