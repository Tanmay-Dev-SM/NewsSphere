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
  const { news } = location.state 

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
