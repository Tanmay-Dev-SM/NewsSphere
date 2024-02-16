import data from "./dummyData"

import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"

import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"
import MoreVertIcon from "@mui/icons-material/MoreVert"

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

    <>
      <div
        style={{
          marginTop: "20px", // Adjust the value based on your desired spacing
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {data.map((news, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardHeader
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
            />
            <CardMedia
              component="img"
              height="194"
              image={news.thumbnail}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {news.snippet}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

export default HomePage
