import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import "./styles.css";
import {
  updateLocationStore,
  resetLocationStore,
} from "src/reducers/location/location";

import TabBar from "src/components/TabBar/TabBar";
import TabBarNew from "src/components/TabBar/TabBarNew";
import WeatherCard from "src/components/WeatherCard/Card";
import { DetailedNews } from "src/routes";
import { topics } from "src/constants/topics";

const dummyData = {
  status: "success",
  totalResults: 3417,
  results: [
    {
      article_id: "08c4a7a4424110fb4968d686e607540a",
      title:
        "Saudi Arabia Event Services Market slated to increase at a CAGR of 9.6%, Experience Significant Growth By 2031",
      link: "https://kalkinemedia.com/news/world-news/saudi-arabia-event-services-market-slated-to-increase-at-a-cagr-of-96-experience-significant-growth-by-2031",
      keywords: null,
      creator: ["info@kalkinemedia.com (EIN Presswire)"],
      video_url: null,
      description:
        "Saudi Arabia has positioned itself as a global player in hosting mega events, attracting international attention and collaboration. DELAWARE, WILMINGTON, UNITED STATES, March 25, 2024 /EINPresswire.com/ -- Allied Market Research published a report, titled, \" Saudi Arabia Event Services Market \". The report provides a detailed analysis of the top investment pockets, top winning strategies, drivers & opportunities, market size & estimations, competitive landscape, and changing market trends. 📚 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗦𝗮𝗺𝗽𝗹𝗲 𝐏𝐃𝐅 𝐨𝐟 𝐓𝐡𝐢𝐬 𝐑𝐞𝐩𝐨𝐫𝐭: https://www.alliedmarketresearch.com/request-sample/A20640 Saudi Arabia's industry for event services has seen substantial expansion and development in recent years. Saudi Arabia is well recognized for hosting a variety of events, including weddings, concerts, corporate conferences, exhibits, and trade displays. In an effort to diversify the economy and promote tourism, the government of the nation has been actively pushing the events sector. Saudi Arabia has made significant investments in creating modern infrastructure and event spaces. Modern conference centers, exhibition halls, and top-notch event locations with the newest amenities can be found in major cities like Riyadh, Jeddah, and Dammam. The wedding industry in the country is expanding, and event planners specialize in arranging luxurious weddings. The need for event services is also increasing due to a rising trend in social event planning, such as birthdays, anniversaries, and private parties. As a result, the market for event services is expanding significantly in the Saudi Arabia region during the forecast period. Saudi Arabia event services market is segmented into Service, Event Type, End User and Organization. On the basis of service, the market is fragmented into strategy, planning, budget & development; communication & logistics; attendees management & engagement; event catering; virtual or hybrid event enabler; location rental; and others. As per the event type, it is segregated into music concert, festivals, sports, exhibitions & conferences, corporate events & seminar, and others. By end user, it is categorized into corporate, sports, education, entertainment, and others. According to organization, it is classified into small & medium enterprises, large enterprises, and government bodies & NGOs. Saudi Arabia, a country renowned for its rich cultural heritage and economic prowess, is experiencing a remarkable surge in the event services industry. As the nation undergoes rapid modernization and embraces a more diversified economy, the demand for event-related services has witnessed unprecedented growth. This article explores the dynamic landscape of the event services market in Saudi Arabia, shedding light on key trends, emerging opportunities, and the factors contributing to this flourishing sector. 1. Cultural Significance and Diverse Events:Saudi Arabia has a deep-rooted cultural significance, and events play a pivotal role in celebrating traditions and fostering community bonds. From religious festivals, weddings, and national celebrations to corporate gatherings and international conferences, the range of events in the country is vast and diverse. The demand for specialized event services has surged as individuals and organizations seek innovative ways to make their events memorable. 2. Rise of Entertainment and Tourism:In recent years, Saudi Arabia has invested significantly in developing its entertainment and tourism sectors as part of the Vision 2030 initiative. This strategic vision aims to diversify the economy and enhance the quality of life for citizens. The introduction of entertainment events, concerts, and festivals has created a robust market for event services, including event planning, production, and execution. 3. Event Technology and Digital Transformation:The adoption of cutting-edge event technology has played a crucial role in reshaping the event services landscape in Saudi Arabia. Virtual and hybrid events, interactive platforms, and immersive experiences have become integral parts of the event industry. Event organizers and service providers are leveraging technology to enhance engagement, streamline logistics, and deliver seamless experiences for attendees. 𝐑𝐞𝐪𝐮𝐞𝐬𝐭 𝐓𝐨 𝐂𝐮𝐬𝐭𝐨𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧:- https://www.alliedmarketresearch.com/request-for-customization/21090 4. Entrepreneurial Spirit and Local Businesses:The entrepreneurial spirit in Saudi Arabia has led to the emergence of numerous local event service businesses. From event planning agencies and catering services to audio-visual production companies, these enterprises contribute to the growth of the market while reflecting the rich cultural tapestry of the region. Government initiatives supporting small and medium enterprises further fuel the growth of the event services sector. 5. International Collaborations and Mega Events:Saudi Arabia has positioned itself as a global player in hosting mega events, attracting international attention and collaboration. The hosting of major events such as the Formula E races, the Riyadh Season, and the G20 Summit has created a surge in demand for event services. International companies are increasingly partnering with local service providers, fostering cross-cultural collaborations and knowledge exchange. Key companies tracked in the report are, Riyadh Exhibitions Company, GES Arabia Exhibition Company, ADNEC (Abu Dhabi National Exhibitions Company), Exhibition Services and Contractors Company (ESCC), Al-Turki Enterprises, Ex-IN Events & Projects, Atelier Events & Projects, Gulf Event Organisers, Dallah Group, ALI AL ISSAA LLC 𝐊𝐞𝐲 𝐟𝐢𝐧𝐝𝐢𝐧𝐠𝐬 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐭𝐮𝐝𝐲 :• This report provides a quantitative analysis of the market segments, current trends, estimations, and dynamics of the event services market analysis from 2021 to 2031 to identify the prevailing event services market opportunities.• The market research is offered along with information related to key drivers, restraints, and opportunities.• Porter's five forces analysis highlights the potency of buyers and suppliers to enable stakeholders make profit-oriented business decisions and strengthen their supplier-buyer network.• In-depth analysis of the event services market segmentation assists to determine the prevailing market opportunities. 𝐁𝐮𝐲 𝐍𝐨𝐰 𝐑𝐞𝐩𝐨𝐫𝐭: https://www.alliedmarketresearch.com/checkout-final/275895ef1c7ee2ff572194156402ffa3 Saudi Arabia Event Services Market Report HighlightsForecast period2021 - 2031 Report Pages88 By Service• Strategy, Planning, Budget, and Development• Communication and Logistics• Attendees Management and Engagement• Event Catering• Virtual or Hybrid Event Enabler• Location Rental• Others By Event Type• Corporate Events and Seminars• Others• Music Concert• Festivals• Sports• Exhibitions and Conferences By End User• Corporate• Sports• Education• Entertainment• Others By Organization• Small and Medium Enterprises• Large Enterprises• Government Bodies and NGOs 𝐊𝐞𝐲 𝐌𝐚𝐫𝐤𝐞𝐭 𝐏𝐥𝐚𝐲𝐞𝐫𝐬• Ex-IN Events & Projects,• GES Arabia Exhibition Company,• Dallah Group,• Al-Turki Enterprises,• ALI AL ISSAA LLC,• Riyadh Exhibitions Company,• Atelier Events & Projects,• Gulf Event Organisers,• ADNEC (Abu Dhabi National Exhibitions Company),• Exhibition Services and Contractors Company (ESCC) 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐑𝐞𝐩𝐨𝐫𝐭𝐬 :Saudi Arabia Corporate training Markethttps://www.einpresswire.com/shareable-preview/gYj28SomHbTARD9CIxT2eA Saudi Arabia Wedding Services Markethttps://www.alliedmarketresearch.com/brazil-wedding-services-market-A17337 Saudi Arabia Sports Training Markethttps://www.alliedmarketresearch.com/saudi-arabia-sports-training-market-A26572 UAE Event Services Markethttps://www.alliedmarketresearch.com/uae-event-services-market-A20639 Brazil Event Services Markethttps://www.alliedmarketresearch.com/brazil-event-services-market-A20638David Correa Allied Market Research +1 5038946022 email us here Visit us on social media: Facebook Twitter LinkedIn",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-03-25 05:45:00",
      image_url:
        "https://kalkinemedia.com/storage/uploads/thumbnail/1711368048_66016770a882c_20527199_saudi_arabia_event_services_mar_847x470.png",
      source_id: "kalkinemedia",
      source_url: "https://kalkinemedia.com/au",
      source_icon: "https://i.bytvi.com/domain_icons/kalkinemedia.png",
      source_priority: 327597,
      country: ["australia"],
      category: ["top"],
      language: "english",
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "27997189e72f0ac631765ef42e4d3dc9",
      title:
        "“He Reminds Himself”: Oscar Piastri Reveals Lando Norris Isn’t Ok With Him Winning a Race Before the Brit",
      link: "https://thesportsrush.com/f1-news-he-reminds-himself-oscar-piastri-reveals-lando-norris-isnt-ok-with-him-winning-a-race-before-the-brit/",
      keywords: ["f1", "lando norris", "mclaren f1 team", "oscar piastri"],
      creator: ["Naman Gopal Srivastava"],
      video_url: null,
      description:
        "Oscar Piastri’s F1 career so far, has been full of several highs, and two visits to the podium. His biggest highlight, however, came at the 2023 Qatar GP Sprint, which he won. This win gave Piastri a taste of what it is like to stand on the top step of a podium in F1. However,… The post “He Reminds Himself”: Oscar Piastri Reveals Lando Norris Isn’t Ok With Him Winning a Race Before the Brit appeared first on The SportsRush.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-03-25 05:42:07",
      image_url:
        "https://cdn-wp.thesportsrush.com/2024/03/d3bb46a2-f1-2024-03-25t111045.431.jpg",
      source_id: "thesportsrush",
      source_url: "https://thesportsrush.com",
      source_icon: "https://i.bytvi.com/domain_icons/thesportsrush.jpg",
      source_priority: 4166,
      country: [
        "united kingdom",
        "australia",
        "united states of america",
        "india",
      ],
      category: ["sports"],
      language: "english",
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "f20e04e10e51db54748c711a5b4f93fe",
      title: "Bloomberg Markets",
      link: "https://www.bloomberg.com/news/videos/2024-03-25/senegal-votes-for-a-new-president-video",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Ondiro Oganga reports from Johannesburg on the presidential election in Senegal. She speaks with Vonnie Quinn on Bloomberg Daybreak: Middle East & Africa. (Source: Bloomberg)",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-03-25 05:41:34",
      image_url: null,
      source_id: "bloomberg",
      source_url: "https://www.bloomberg.com/asia",
      source_icon: null,
      source_priority: 250,
      country: ["united states of america"],
      category: ["business"],
      language: "english",
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "b9939613d613c05616913ed9d66c425c",
      title:
        "Kifisia: Dead 86 year old after a fire in an apartment, in hospital a 66 year old",
      link: "https://athens-times.com/kifisia-dead-86-year-old-after-a-fire-in-an-apartment-in-hospital-a-66-year-old/",
      keywords: ["greece"],
      creator: ["uploader"],
      video_url: null,
      description:
        "Tragedy occurred in Kifisia on Monday morning (25.03.2024) after a fire occurred in an apartment. The fire occurred in an apartment on 14 Kokkinaki Street in Kifisia at 3 a.m. with a 86-year-old man losing his life, and there is a woman unconscious. The 86 – year – old man was taken to the Gennimata […] The post Kifisia: Dead 86 year old after a fire in an apartment, in hospital a 66 year old appeared first on Athens Times.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-03-25 05:40:50",
      image_url: null,
      source_id: "athenst_imes",
      source_url: "http://athens-times.com",
      source_icon: "https://i.bytvi.com/domain_icons/athenst_imes.png",
      source_priority: 4549795,
      country: ["greece"],
      category: ["top"],
      language: "english",
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "751d4550789189d9c793c32c0639d64d",
      title: "A University and the Ubiquity of Poverty",
      link: "https://thenews-chronicle.com/a-university-and-the-ubiquity-of-poverty/",
      keywords: [
        "opinions",
        "crowd",
        "death",
        "hunger",
        "nasarawa",
        "nasarawa state university",
        "nigeria",
        "palliative",
        "stampede",
      ],
      creator: ["Kenechukwu Obiezu"],
      video_url: null,
      description:
        "Two students of the Nasarawa State University Keffi were trampled to death and dozen others injured when the sharing of palliatives provided by the government became deadly on Friday 21st March 2023, served up death at the Nasarawa State University Keffi. Bright futures smoldered painfully and prematurely as a sharing formula failed, and a stampede flared, [...]",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-03-25 05:39:46",
      image_url:
        "https://thenews-chronicle.com/a-university-and-the-ubiquity-of-poverty/image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjwvc3ZnPg==",
      source_id: "thenews_chronicle",
      source_url: "https://thenews-chronicle.com",
      source_icon: "https://i.bytvi.com/domain_icons/thenews_chronicle.png",
      source_priority: 3588474,
      country: ["nigeria"],
      category: ["top"],
      language: "english",
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "187545fa26428c4999eeacab46fb7883",
      title: "4 tips to maintain a healthy Body Mass Index (BMI)",
      link: "https://www.hindustantimes.com/web-stories/lifestyle/4-tips-to-maintain-a-healthy-body-mass-index-bmi-101711341267505.html",
      keywords: ["latest"],
      creator: null,
      video_url: null,
      description: "4 tips to maintain a healthy Body Mass Index (BMI)",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-03-25 05:38:42",
      image_url: "https://images.hindustantimes.com/default/1600x900.jpg",
      source_id: "hindustantimes",
      source_url: "http://www.hindustantimes.com",
      source_icon: "https://i.bytvi.com/domain_icons/hindustantimes.png",
      source_priority: 933,
      country: ["india"],
      category: ["top"],
      language: "english",
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "fedf789df712bfd0d12eed5f753a2280",
      title:
        "QuickCheck: Did a man fall into a coma after trying to stop a snatch thief?",
      link: "https://www.thestar.com.my/news/true-or-not/2024/03/25/quickcheck-did-a-man-fall-into-a-coma-after-trying-to-stop-a-snatch-thief",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "SNATCH thieves are among the worst kind of criminal, as their actions could lead to victims suffering serious injuries or in some cases, even death. Read full story",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-03-25 05:38:00",
      image_url:
        "https://apicms.thestar.com.my/uploads/images/2024/03/25/2610000.jpg",
      source_id: "thestar_my",
      source_url: "https://www.thestar.com.my",
      source_icon: "https://i.bytvi.com/domain_icons/thestar_my.png",
      source_priority: 37088,
      country: ["malaysia"],
      category: ["top"],
      language: "english",
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "dce02da3f203f48f3070d9dbd5134f99",
      title:
        "Coffee Beans Market Demonstrates A Spectacular Growth By 2024-2030: Starbucks, Lavazza, Tchibo",
      link: "https://www.openpr.com/news/3441272/coffee-beans-market-demonstrates-a-spectacular-growth",
      keywords: ["advertising, media consulting, marketing research"],
      creator: ["HTF Market Intelligence Consulting Pvt. Ltd."],
      video_url: null,
      description:
        "The latest study released on the Global Coffee Beans Market by HTF MI Research evaluates market size, trend, and forecast to 2030. The Coffee Beans market study covers significant research data and proofs to be a handy resource document for",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-03-25 05:37:54",
      image_url: "https://cdn.openpr.com/L/3/L325150029_k.jpg",
      source_id: "openpr",
      source_url: "https://www.openpr.com",
      source_icon: null,
      source_priority: 161245,
      country: ["germany"],
      category: ["business"],
      language: "english",
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "24f176dbea8a66b590ac8a5f3db6b5b0",
      title:
        "Little on the data docket coming up in the session ahead | Forexlive",
      link: "https://zephyrnet.com/little-on-the-data-docket-coming-up-in-the-session-ahead-forexlive/",
      keywords: [
        "forex",
        "22",
        "a",
        "about",
        "aftermath",
        "ahead",
        "all",
        "all the",
        "also",
        "and",
        "are",
        "areas",
        "as",
        "at",
        "attention",
        "australia",
        "bank",
        "be",
        "best",
        "best of",
        "bond",
        "bond market",
        "but",
        "but also",
        "canada",
        "cbi",
        "central",
        "central bank",
        "come",
        "comes",
        "coming",
        "could",
        "currencies",
        "data",
        "day",
        "days",
        "decisions",
        "deposits",
        "dollar",
        "e",
        "end",
        "europe",
        "factors",
        "far",
        "flows",
        "for",
        "friday",
        "general",
        "gmt",
        "good",
        "good luck",
        "grappling",
        "holiday",
        "i",
        "in",
        "isn",
        "just",
        "keeps",
        "key",
        "key areas",
        "last",
        "latter",
        "least",
        "little",
        "looking",
        "luck",
        "major",
        "major currencies",
        "make",
        "march",
        "market",
        "markets",
        "might",
        "month",
        "mood",
        "much",
        "new",
        "new zealand",
        "note",
        "now",
        "of",
        "off",
        "on",
        "one",
        "out",
        "overall",
        "pay",
        "pay attention",
        "plato",
        "plato data intelligence",
        "platodata",
        "proceedings",
        "quarter",
        "quieter",
        "remain",
        "reported",
        "retailing",
        "risk",
        "s",
        "safe",
        "same",
        "session",
        "sessions",
        "shortened",
        "sight",
        "slower",
        "snb",
        "so",
        "so far",
        "some",
        "stages",
        "start",
        "stay",
        "stay safe",
        "t",
        "that",
        "the",
        "the key",
        "there",
        "things",
        "this",
        "though",
        "to",
        "today",
        "total",
        "traders",
        "trading",
        "two",
        "uk",
        "up",
        "w",
        "wary",
        "watch",
        "we",
        "week",
        "will",
        "wish",
        "with",
        "with the",
        "work",
        "you",
        "your",
        "zealand",
        "zephyrnet",
      ],
      creator: ["Republished By Plato"],
      video_url: null,
      description:
        "Major currencies are not up to much for now as the dollar keeps steadier so far on the day. The key areas to watch for markets remain the same as last week, as traders are grappling with the aftermath of key central bank decisions. Looking to the sessions ahead, the bond market and overall risk […]",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-03-25 05:36:26",
      image_url:
        "https://zephyrnet.com/wp-content/uploads/2024/03/little-on-the-data-docket-coming-up-in-the-session-ahead-forexlive.jpg",
      source_id: "zephyrnet",
      source_url: "https://zephyrnet.com",
      source_icon: "https://i.bytvi.com/domain_icons/zephyrnet.png",
      source_priority: 3670004,
      country: ["united states of america"],
      category: ["top"],
      language: "english",
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "ac51dd96178a1aed3d3dce5edf1141ec",
      title:
        "U.N. to vote on resolution demanding a ceasefire in Gaza during current Muslim holy month of Ramzan",
      link: "https://www.thehindu.com/news/international/un-to-vote-on-resolution-demanding-a-ceasefire-in-gaza-during-current-muslim-holy-month-of-ramzan/article67990037.ece",
      keywords: ["world"],
      creator: null,
      video_url: null,
      description:
        "The resolution, put forward by the 10 elected council members, is backed by Russia and China and the 22-nation Arab Group at the United Nations",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-03-25 05:36:09",
      image_url:
        "https://th-i.thgim.com/public/incoming/gdy8o1/article67990050.ece/alternates/LANDSCAPE_1200/2103879205.jpg",
      source_id: "thehindu",
      source_url: "https://www.thehindu.com",
      source_icon: "https://i.bytvi.com/domain_icons/thehindu.png",
      source_priority: 2972,
      country: ["india"],
      category: ["top"],
      language: "english",
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
  ],
  nextPage: "1711344969649683995",
};
function HomePage() {
  const dispatch = useDispatch();
  const [newsData, setNewsData] = useState(dummyData);
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState({});

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const navigate = useNavigate(); // Get the navigate function

  const handleItemClick = (news) => () => {
    navigate("/article", { state: { news } });
  };

  useEffect(() => {
    // fetchNewsArticles();
    setLoading(false);
    getGeolocation();
  }, []);
  useEffect(() => {
    fetchWeather();
  }, [coords]);

  function handleLoadingOpen() {
    setLoading(true);
  }
  function handleLoadingClose() {
    setLoading(false);
  }

  async function fetchNewsArticles(query = null) {
    try {
      const api_key = "pub_4071506419b6383ba3eec00410c45014e4652";
      const endpoint = "https://newsdata.io/api/1/news";
      const response = await axios.get(
        `${endpoint}?apikey=${api_key}&q=${query}&language=en`
      );
      setNewsData(response?.data);
      handleLoadingClose();
    } catch (error) {
      console.error("Error fetching data:", error);
      handleLoadingClose();
    }
  }
  async function getGeolocation() {
    try {
      if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition((pos) => {
          setCoords(pos.coords);
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  async function fetchWeather() {
    try {
      if (coords.latitude) {
        const api_key = "686ce52ba17ddf2dd04cca6fb9a479d9";
        const endpoint = "https://api.openweathermap.org/data/2.5/weather";
        const response = await axios.get(
          `${endpoint}?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${api_key}&units=imperial`
        );
        console.log(response.data);
        dispatch(
          updateLocationStore({
            ...response.data,
          })
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Grid container className="root">
          {/* <TabBar selectedTab={selectedTab} handleChange={handleChange} /> */}
          <TabBarNew selectedTab={selectedTab} handleChange={handleChange} />
          <Grid container style={{ flexWrap: "nowrap" }}>
            <Grid item md={1}></Grid>
            <Grid item md={9} className="cardsContainer">
              {newsData?.results
                ?.filter((news) =>
                  news.category.includes(
                    topics[selectedTab].label.toLowerCase()
                  )
                ) // Filter news items first
                .map((news, index) => (
                  <Grid
                    item
                    flexBasis="30%"
                    onClick={handleItemClick(news)}
                    style={{ margin: "1%" }}
                  >
                    <Card
                      key={index}
                      className="homePageCard"
                      elevation={0}
                      sx={{
                        backgroundImage: `linear-gradient(transparent,#D8E5F2), url(${news.image_url})`,
                      }}
                      onClick={() => <DetailedNews news={news} />}
                    >
                      <CardContent
                        className="homePageCardContent"
                        sx={{
                          padding: "16px 24px",
                          "&:last-child": {
                            paddingBottom: "16px",
                          },
                        }}
                      >
                        <h6 className="articleHeader">{news.title}</h6>
                        {/* <body className="articleContent">{news.snippet}</body> */}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
            <Grid item md={2}>
              <WeatherCard />
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default HomePage;
