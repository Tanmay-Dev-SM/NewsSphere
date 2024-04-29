import "./LoadingPosts.css";
import { Grid } from "@mui/material";
// export const LoadingCard = () => {
//   return (
//     <div className="loading-card">
//       <div className="loading-image"></div>
//       <div className="loading-content">
//         <div className="loading-title"></div>
//       </div>
//     </div>
//   );
// };

export const LoadingCard = () => {
  return (
    <Grid
      container
      flexWrap="nowrap"
      style={{ height: "120px", padding: "8px" }}
      className="loading-card"
    >
      <Grid
        item
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
        className="loading-content"
      >
        <h4 style={{ margin: "8px 0" }} className="loading-title">
          {""}
        </h4>
        <span className="loading-title">{""}</span>
      </Grid>

      <Grid
        item
        style={{ display: "flex", alignSelf: "center" }}
        className="loading-image"
      >
        <div
          style={{ background: "#ccc", height: "40px", width: "80px" }}
        ></div>
      </Grid>
    </Grid>
  );
};

export const LoadingPosts = () => {
  const loadPages = [1, 2, 3, 4, 5, 6];
  return (
    <div className="loading-posts">
      {loadPages?.map((num) => {
        return <LoadingCard key={num} />;
      })}
    </div>
  );
};
