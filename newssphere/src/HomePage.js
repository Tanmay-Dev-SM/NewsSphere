import DetailedNews from "./DetailedNews"
import SearchPage from "./Search"
import data from "./dummyData"

function HomePage() {
  return (
    <div>
      <div className=" ">
        <SearchPage />
      </div>
      <div className="relative flex min-h-screen flex-col  overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="max-w-screen-md mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {data.map((news, index) => (
              <div
                key={index}
                className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2"
              >
                <img
                  className="w-full"
                  src={news.thumbnail}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div
                    className="font-bold text-xl mb-2"
                    onClick={() => <DetailedNews />}
                  >
                    {news.title}
                  </div>
                  <p className="text-gray-700 text-base">{news.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
