import data from "../dummyData";
import React from "react";
import { Grid, Card, CardHeader, CardMedia, CardContent } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import "./styles.css";
import Typography from "@mui/material/Typography";
function HomePage() {
  return (
    // <div>
    //   <div className="">
    //     {data.map((news, index) => (
    //       <div key={index} className="">
    //         <img
    //           className="w-full"
    //           src={news.thumbnail}
    //           alt="Sunset in the mountains"
    //         />
    //         <div className="px-6 py-4">
    //           <div>{news.title}</div>
    //           <p className="">{news.description}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <Grid container className="root">
      {data.map((news, index) => (
        <Grid item flexBasis="25%">
          <Card
            key={index}
            className="homePageCard"
            sx={{
              backgroundImage: `linear-gradient(transparent,#D8E5F2), url(${news.thumbnail})`,
            }}
          >
            {/* <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {news.position}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={news.title}
              subheader={news.date}
            /> */}
            {/* <CardMedia
              component="img"
              height="194"
              image={news.thumbnail}
              alt="Paella dish"
            /> */}
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
  );
}

export default HomePage;
