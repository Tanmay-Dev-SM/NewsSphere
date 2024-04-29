import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Divider,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import "./styles.css";
import {
  updateLocationStore,
  resetLocationStore,
} from "src/reducers/location/location";
import { resetSearchStore } from "src/reducers/search/search";

import TabBarNew from "src/components/TabBar/TabBarNew";
import WeatherCard from "src/components/WeatherCard/Card";
import { DetailedNews } from "src/routes";
import { topics } from "src/constants/topics";
import { useOutletContext } from "react-router-dom";
import scrapedData from "src/scraped_data_TopStories.json";

const dummyData = {
  status: "success",
  totalResults: 63,
  results: [
    {
      article_id: "ea79fac5238839eb3da56f7c08bbd5ee",
      title: "Tasty breakfast idea: Whole-wheat pancakes with almond filling",
      link: "https://www.citizen.co.za/lifestyle/food-and-drink/recipes/tasty-breakfast-idea-whole-wheat-pancakes-almond-filling/",
      keywords: ["recipes", "recipe"],
      creator: ["Xanet Scheepers"],
      video_url: null,
      description:
        "Swap your bacon eggs for these flavourful whole-wheat pancakes for breakfast this morning.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-04-06 05:00:00",
      image_url:
        "https://media.citizen.co.za/wp-content/uploads/2024/04/whole-wheat-pancakes-almond-filling.jpg",
      source_id: "citizen",
      source_priority: 436746,
      source_url: "https://www.citizen.co.za",
      source_icon: "https://i.bytvi.com/domain_icons/citizen.png",
      language: "english",
      country: ["south africa"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "73e607500c0a7736a70eb40560da4c92",
      title:
        "Altru partners with U.S. Army to provide veterans with job interviews",
      link: "https://www.inforum.com/health/altru-partners-with-u-s-army-to-provide-veterans-with-job-interviews",
      keywords: null,
      creator: ["Jay Dahl"],
      video_url: null,
      description:
        "At a ceremony on Friday, April 5, Altru officially became a part of the U.S. Army Partnership for Your Success (PaYS) program.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-04-06 04:16:00",
      image_url:
        "https://cdn.forumcomm.com/dims4/default/559dcd8/2147483647/strip/true/crop/1080x720+60+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fforum-communications-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F7a%2Faf%2Fc8f80dcc41469de10dfa0bc220fd%2Fweb-copy-4-5-24.jpg",
      source_id: "inforum",
      source_priority: 14163,
      source_url: "https://www.inforum.com",
      source_icon: "https://i.bytvi.com/domain_icons/inforum.png",
      language: "english",
      country: ["united states of america"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "4cd86b4c46c773d3417ac29ca61155ea",
      title:
        "Minnesota lawmakers find temporary solution to funding higher education grants for those in foster care",
      link: "https://www.inforum.com/news/minnesota/minnesota-lawmakers-find-temporary-solution-to-funding-higher-education-grants-for-those-in-foster-care",
      keywords: null,
      creator: ["MacGregor Sharpe"],
      video_url: null,
      description:
        "MOORHEAD — Minnesota lawmakers said they've come up with $5 million to fill a funding gap that put the Fostering Independence Higher Education Grant program at risk.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-04-06 04:12:37",
      image_url:
        "https://cdn.forumcomm.com/dims4/default/fd4c318/2147483647/strip/true/crop/432x288+6+0/resize/840x560!/quality/90/?url=https%3A%2F%2Ffcc-cue-exports-brightspot.s3.us-west-2.amazonaws.com%2Finforum%2Fbinary%2Fminncap1_binary_362497.jpg",
      source_id: "inforum",
      source_priority: 14163,
      source_url: "https://www.inforum.com",
      source_icon: "https://i.bytvi.com/domain_icons/inforum.png",
      language: "english",
      country: ["united states of america"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "94cd92a3fc866359ff398f831cafee08",
      title:
        "More than 40,000 openings for plumbers, pipefitters, and steamfitters are projected each year.",
      link: "https://www.inforum.com/news/fargo/more-than-40-000-openings-for-plumbers-pipefitters-and-steamfitters-are-projected-each-year",
      keywords: null,
      creator: ["Anne Sara Bien-Aime"],
      video_url: null,
      description:
        "The North Dakota State College of Science is preparing plumbing students to fill a critical need in the country.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-04-06 04:12:01",
      image_url:
        "https://cdn.forumcomm.com/dims4/default/16c8a48/2147483647/strip/true/crop/1080x720+200+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fforum-communications-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fe4%2Fcb%2Fbef555524593989c5fe60da8008a%2Flaneys-still001.jpg",
      source_id: "inforum",
      source_priority: 14163,
      source_url: "https://www.inforum.com",
      source_icon: "https://i.bytvi.com/domain_icons/inforum.png",
      language: "english",
      country: ["united states of america"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "1fe1da46c4af5b2531f2df7d9a5663e6",
      title:
        "Grant Nelson's March Madness success provides boost for hometown of Devils Lake",
      link: "https://www.inforum.com/sports/college/grant-nelsons-march-madness-success-provides-boost-for-hometown-of-devils-lake",
      keywords: null,
      creator: ["Matt Henson"],
      video_url: null,
      description:
        "The Devils Lake Area Chamber of Commerce said interest in the small community is up across the country.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-04-06 03:41:58",
      image_url:
        "https://cdn.forumcomm.com/dims4/default/061aeae/2147483647/strip/true/crop/1080x720+69+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fforum-communications-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F34%2Fb6%2F6b5754394bd3a2b4e08ea37264bf%2F482g5048-01-mov-still001.jpg",
      source_id: "inforum",
      source_priority: 14163,
      source_url: "https://www.inforum.com",
      source_icon: "https://i.bytvi.com/domain_icons/inforum.png",
      language: "english",
      country: ["united states of america"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "32d554c3754d6a02e4a5ff1708eda95c",
      title: "4th annual Able Games kick off",
      link: "https://www.inforum.com/news/fargo/4th-annual-able-games-kick-off",
      keywords: null,
      creator: ["MacGregor Sharpe"],
      video_url: null,
      description:
        "Fargo’s all-inclusive fitness competition is back and the turnout is bigger then ever.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-04-06 03:10:45",
      image_url:
        "https://cdn.forumcomm.com/dims4/default/f2cf8a7/2147483647/strip/true/crop/1080x720+112+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fforum-communications-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F72%2F38%2F60b11b5f4ffe9d2c8b4c6b56a346%2Fable.jpg",
      source_id: "inforum",
      source_priority: 14163,
      source_url: "https://www.inforum.com",
      source_icon: "https://i.bytvi.com/domain_icons/inforum.png",
      language: "english",
      country: ["united states of america"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "b7c50baf110b37490dc22b01b66fd6ed",
      title: "Antengene Presents Four Preclinical Posters at AACR 2024",
      link: "https://ng.investing.com/news/stock-market-news/antengene-presents-four-preclinical-posters-at-aacr-2024-93CH-1290311",
      keywords: null,
      creator: ["Investing.com"],
      video_url: null,
      description: null,
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-04-06 00:42:06",
      image_url:
        "https://i-invdn-com.investing.com/news/international_newspapers_108x81.jpg",
      source_id: "investing_ng",
      source_priority: 1205,
      source_url: "https://ng.investing.com",
      source_icon: "https://i.bytvi.com/domain_icons/investing_ng.png",
      language: "english",
      country: ["nigeria"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "36342e20a92e8171e0696d2354612a6b",
      title: "Antengene Presents Four Preclinical Posters at AACR 2024",
      link: "https://ca.investing.com/news/stock-market-news/antengene-presents-four-preclinical-posters-at-aacr-2024-93CH-3338306",
      keywords: null,
      creator: ["Investing.com"],
      video_url: null,
      description: null,
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-04-06 00:42:05",
      image_url:
        "https://i-invdn-com.investing.com/news/international_newspapers_108x81.jpg",
      source_id: "investing_ca",
      source_priority: 1205,
      source_url: "https://ca.investing.com",
      source_icon: null,
      language: "english",
      country: ["canada"],
      category: ["business"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "2d30f1fc8832a262cd95dfcc488cc6dd",
      title: "Antengene Presents Four Preclinical Posters at AACR 2024",
      link: "https://ph.investing.com/news/stock-market-news/antengene-presents-four-preclinical-posters-at-aacr-2024-93CH-1194681",
      keywords: null,
      creator: ["Investing.com"],
      video_url: null,
      description: null,
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-04-06 00:42:04",
      image_url:
        "https://i-invdn-com.investing.com/news/international_newspapers_108x81.jpg",
      source_id: "investing_ph",
      source_priority: 1205,
      source_url: "https://ph.investing.com",
      source_icon: null,
      language: "english",
      country: ["philippines"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
    {
      article_id: "c1687d165de613b77fa89c799e5adc5c",
      title: "Antengene Presents Four Preclinical Posters at AACR 2024",
      link: "https://www.aap.com.au/aapreleases/cision20240405ae78642/",
      keywords: ["cision", "press releases"],
      creator: null,
      video_url: null,
      description:
        'SHANGHAI and HONG KONG, April 6, 2024 /PRNewswire/ -- Antengene Corporation Limited ("Antengene", SEHK: 6996.HK), a leading innovative, commercial-stage global biopharmaceutical company dedicated to discovering, developing and commercializing first-in-class and/or best-in-class medicines for cancer, today announced the presentation of four preclinical posters at the 2024 American Association for Cancer Research Annual Meeting (AACR 2024),...',
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-04-06 00:35:05",
      image_url:
        "https://mma.prnewswire.com/media/1662479/ANTENGENE_EN_Logo.jpg",
      source_id: "aap",
      source_priority: 184366,
      source_url: "https://www.aap.com.au",
      source_icon: null,
      language: "english",
      country: ["australia"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    },
  ],
  nextPage: "1712363705398471139",
};
function HomePage() {
  const dispatch = useDispatch();
  const [newsData, setNewsData] = useState([...scrapedData]);
  const searchOptions = useSelector((state) => state.search);
  // const [searchOptions, setSearchOptions] = useOutletContext();
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
    // fetchNewsArticles(searchOptions?.query ?? null);
    handleLoadingClose();
    getGeolocation();
    return () => {
      dispatch(resetSearchStore({}));
    };
  }, []);

  useEffect(() => {
    fetchNewsArticles(searchOptions);
  }, [searchOptions?.query]);

  useEffect(() => {
    fetchWeather();
  }, [coords]);

  function handleLoadingOpen() {
    setLoading(true);
  }
  function handleLoadingClose() {
    setLoading(false);
  }

  async function fetchNewsArticles(options) {
    try {
      if (options?.query) {
        const api_key = "pub_4071506419b6383ba3eec00410c45014e4652";
        const endpoint = "https://newsdata.io/api/1/news";
        const response = await axios.get(
          `${endpoint}?apikey=${api_key}&q=${
            options?.query || null
          }&language=en`
        );
        setNewsData(response?.data);
        handleLoadingClose();
      }
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
        <Backdrop
          sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
          // onClick={handleLoadingClose}
        >
          <CircularProgress />
        </Backdrop>
      ) : (
        <Grid
          container
          className="root"
          style={{
            // background: `linear-gradient(180deg, ${topics?.[selectedTab]?.color}80, transparent) `,
            boxShadow: `inset 0px 100px 200px ${topics?.[selectedTab]?.color}80`,
          }}
        >
          <Grid container style={{ flexWrap: "nowrap" }}>
            <Grid item md={2} sm={1}>
              <TabBarNew
                selectedTab={selectedTab}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item md={8} sm={8} className="cardsContainer">
              {newsData
                // ?.results
                // ?.filter((news) =>
                //   news.category.includes(
                //     topics[selectedTab].label.toLowerCase()
                //   )
                // )
                ?.filter((news) => news?.Thumbnail_Link != "N/A")
                ?.slice(0, 8) // Filter news items first
                ?.map((news, index) => (
                  <Grid
                    item
                    flexBasis="calc(24% - 16px)"
                    onClick={handleItemClick(news)}
                    style={{ margin: "8px" }}
                  >
                    <Card
                      key={index}
                      className="homePageCard"
                      elevation={0}
                      sx={{
                        backgroundImage: `linear-gradient(transparent 50%, #333333), url(${news.Thumbnail_Link})`,
                        // transition: 'transform 0.2s ease-in-out', '&:hover': {transform: 'scale(1.1)'},
                        // Apply scale transformation on hover
                        //changed color
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
                        <h6 className="articleHeader">{news.Main_Text}</h6>
                        {/* <body className="articleContent">{news.snippet}</body> */}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              {newsData?.length > 8 && (
                <div>
                  <div style={{ padding: "8px 0" }}>
                    <Divider
                      textAlign="left"
                      style={{ fontSize: "larger", fontWeight: 600 }}
                    >
                      More News
                    </Divider>
                  </div>
                  {newsData
                    // ?.filter((news) => news?.Thumbnail_Link != "N/A")
                    ?.slice(8)
                    ?.map((news) => (
                      <>
                        <Grid
                          container
                          flexWrap="nowrap"
                          style={{ height: "120px", padding: "8px" }}
                        >
                          <Grid
                            item
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              flexGrow: 1,
                            }}
                          >
                            <h4 style={{ margin: "8px 0" }}>
                              {news?.Main_Text}
                            </h4>
                            <span>{news?.Text_snippet}</span>
                          </Grid>
                          {news?.Thumbnail_Link && (
                            <Grid item style={{ display: "flex" }}>
                              <img
                                src={news?.Thumbnail_Link}
                                style={{ borderRadius: "12px" }}
                              />
                            </Grid>
                          )}
                        </Grid>
                        <Divider style={{ margin: "8px" }} />
                      </>
                    ))}
                </div>
              )}
            </Grid>
            <Grid item md={2} sm={3} style={{ padding: "0 8px 0 16px" }}>
              <WeatherCard fetchWeather={fetchWeather} />
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default HomePage;
