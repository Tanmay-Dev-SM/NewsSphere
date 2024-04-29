import ContentCard from "./ContentCard.js"


function HomePage() {
  return (
      <div
        style={{
          marginTop: "20px", // Adjust the value based on your desired spacing
          display: "flex",
          justifyContent: "center",
          //flexWrap: "wrap",
          gap: "16px",
        }}
      >
      <ContentCard />
      </div>
  )
}

export default HomePage
