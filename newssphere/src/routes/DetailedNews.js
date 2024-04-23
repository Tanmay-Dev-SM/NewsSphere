import { useLocation } from "react-router-dom";
import { React, useState } from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import {
  ThumbUpOutlined as LikeIcon,
  ThumbUp as LikedIcon,
  ThumbDownOutlined as DislikeIcon,
  ThumbDown as DislikedIcon,
  Share as ShareIcon,
  Translate as TranslateIcon,
} from "@mui/icons-material";

const DetailedNews = () => {
  const location = useLocation();
  const { news } = location.state;
  const [options, setOptions] = useState({
    liked: false,
    disliked: false,
  });

  function handleButtons(value, type) {
    let body = { ...options, [type]: value };
    try {
      setOptions({ ...body });
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="root">
      <Grid container justifyContent="center" className="articleMain">
        <div className="options">
          <IconButton disableRipple={true} onClick={(event) => {}}>
            <TranslateIcon />
          </IconButton>
          <IconButton
            className="optionButton"
            disableRipple={true}
            onClick={(event) => {
              handleButtons(!options?.liked, "liked");
            }}
          >
            {options?.liked ?? false ? <LikedIcon /> : <LikeIcon />}
          </IconButton>
          <IconButton
            className="optionButton"
            disableRipple={true}
            onClick={(event) => {
              handleButtons(!options?.disliked, "disliked");
            }}
          >
            {options?.disliked ?? false ? <DislikedIcon /> : <DislikeIcon />}
          </IconButton>
          <IconButton disableRipple={true} onClick={(event) => {}}>
            <ShareIcon />
          </IconButton>
        </div>
        <Grid item xs={8} md={8} lg={8}>
          <Card elevation={0} style={{ border: "1px solid #d6d6d6" }}>
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
  );
};

export default DetailedNews;
