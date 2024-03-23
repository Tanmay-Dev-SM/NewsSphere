//import "src/routes/styles.css"
// function DetailedNews() {
//   return (
//     <div className="root">
//       <h1>"Hello hello"</h1>
//     </div>
//   );
// }

// export default DetailedNews;

import { useLocation } from "react-router-dom"
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material"

const DetailedNews = () => {
  const location = useLocation()
  const { news } = location.state // Destructure the news item from state

  return (
    <div className="root">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Card>
            <CardActionArea component="a" href={news.link} target="_blank">
              <CardMedia
                component="img"
                height="140"
                image={news.image_url}
                alt={news.title}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {news.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{
                  overflow: "ellipsis",
                }}
              >
                {news.description}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ marginTop: "1rem" }}
              >
                <strong>Keywords:</strong> {news.keywords.join(", ")}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Published by:</strong> {news.creator.join(", ")} on{" "}
                {new Date(news.pubDate).toLocaleDateString()}
              </Typography>
              <Button
                size="small"
                color="primary"
                href={news.link}
                target="_blank"
                style={{ marginTop: "1rem" }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default DetailedNews
