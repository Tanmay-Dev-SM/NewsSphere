import data from "./dummyData"
import "./ContentCard.css"

import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"

import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"
import MoreVertIcon from "@mui/icons-material/MoreVert"


function ContentCard() {
    return(
        <div className="contentGrid">
        {data.map((news, index) => (
        <Card key={index} className="contentCard" >
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
)
}


export default ContentCard