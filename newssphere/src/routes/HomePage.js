import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"
import { Grid, Card, CardContent } from "@mui/material"

import "./styles.css"

import TabBar, { topics } from "src/components/TabBar"
import { DetailedNews } from "."

function HomePage() {
  const [newsData, setNewsData] = useState(null)
  const [loading, setLoading] = useState(true)

  const [selectedTab, setSelectedTab] = useState(0)

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }
  const navigate = useNavigate() // Get the navigate function

  const handleItemClick = (news) => () => {
    navigate("/article", { state: { news } })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("")
        setNewsData(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Grid container className="root">
          <TabBar selectedTab={selectedTab} handleChange={handleChange} />
          {newsData.results
            .filter((news) =>
              news.category.includes(topics[selectedTab].label.toLowerCase())
            ) // Filter news items first
            .map((news, index) => (
              <Grid item flexBasis="25%" onClick={handleItemClick(news)}>
                <Card
                  key={index}
                  className="homePageCard"
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
      )}
    </div>
  )
}

export default HomePage
