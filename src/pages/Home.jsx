import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import dayjs from "dayjs";

const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // API'den etkinlik verilerini çekme
  useEffect(() => {
    const apiUrl =
      "https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);

  // Seçilen etkinliği ayarlama
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  // Seçili etkinliği temizleme
  const clearSelectedEvent = () => {
    setSelectedEvent(null);
  };

  // Arama terimini güncelleme
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Arama sonuçlarını filtreleme
  const filteredData = data.filter((item) =>
    item.Adi.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const showSearchResults = searchTerm !== "";

  return (
    <div className="Home dark:bg-black h-full pt-5 px-5">
      {/* Arama kutusu */}
      <div className="relative flex justify-end px-10 py-3">
        <input
          className="bg-white dark:bg-gray-800 rounded-full p-2 text-black dark:text-white border border-gray-300 dark:border-gray-700 shadow-none outline-none bg-opacity-60"
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />

        <button className="absolute top-1/2 transform -translate-y-1/2 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 64 64"
          >
            <path
              fill="#dadcec"
              d="M40.78 41.46H46.32V45.46H40.78z"
              transform="rotate(-45 43.543 43.464)"
            ></path>
            <rect
              width="8.49"
              height="22.51"
              x="48.8"
              y="41.79"
              fill="#cda1a7"
              rx="4"
              ry="4"
              transform="rotate(-45 53.04 53.04)"
            ></rect>
            <rect
              width="4.24"
              height="22.51"
              x="49.42"
              y="43.29"
              fill="#c4939c"
              rx="2.12"
              ry="2.12"
              transform="rotate(-45 51.542 54.54)"
            ></rect>
            <path
              fill="#ffeb9b"
              d="M25 1A24 24 0 1 0 25 49A24 24 0 1 0 25 1Z"
            ></path>
            <path
              fill="#f6d397"
              d="M11.14,38.86,38.86,11.14a4,4,0,0,1,6.11.54A24,24,0,0,1,11.68,45,4,4,0,0,1,11.14,38.86Z"
            ></path>
            <path
              fill="#bbdef9"
              d="M25 7A18 18 0 1 0 25 43A18 18 0 1 0 25 7Z"
            ></path>
            <path
              fill="#d2edff"
              d="M25 18A7 7 0 1 0 25 32A7 7 0 1 0 25 18Z"
            ></path>
            <path
              fill="#f3f3f3"
              d="M21 17A4 4 0 1 0 21 25 4 4 0 1 0 21 17zM29.5 28A1.5 1.5 0 1 0 29.5 31 1.5 1.5 0 1 0 29.5 28z"
            ></path>
            <path
              fill="#8d6c9f"
              d="M38.44,11.57a19,19,0,1,0,0,26.87A18.88,18.88,0,0,0,38.44,11.57ZM37,37a17,17,0,1,1,0-24A16.89,16.89,0,0,1,37,37Z"
            ></path>
            <path
              fill="#8d6c9f"
              d="M31.2 14.72a12 12 0 0 1 2.28 1.79A1 1 0 1 0 34.9 15.1 14.08 14.08 0 0 0 32.23 13a1 1 0 0 0-1 1.71zM26.38 11.07a14 14 0 0 0-11.27 4 1 1 0 1 0 1.41 1.41 12 12 0 0 1 9.67-3.46 1 1 0 1 0 .2-2z"
            ></path>
            <path
              fill="#8d6c9f"
              d="M61.88,54.46,51.54,44.12a5,5,0,0,0-3.6-1.45c0-.14-2.77-2.91-2.77-2.91a25,25,0,1,0-5.41,5.41s2.78,2.72,2.91,2.77,0,0,0,.07a5,5,0,0,0,1.46,3.54L54.46,61.88a5,5,0,0,0,7.07,0l.34-.34a5,5,0,0,0,0-7.07ZM2,25A23,23,0,1,1,25,48,23,23,0,0,1,2,25ZM44.12,44.46a5,5,0,0,0-.92,1.32l-1.87-1.87a25.2,25.2,0,0,0,2.59-2.59l1.88,1.88a5,5,0,0,0-1.32.92ZM60.46,60.12l-.34.34a3,3,0,0,1-4.24,0L45.54,50.12a3,3,0,0,1,0-4.24l.34-.34a3,3,0,0,1,4.24,0L60.46,55.88a3,3,0,0,1,0,4.24Z"
            ></path>
            <path
              fill="#8d6c9f"
              d="M34.19 32.78a1 1 0 0 0-1.41 1.41l1.41 1.41a1 1 0 0 0 1.41-1.41zM15.81 32.78l-1.41 1.41a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0-1.41-1.41zM39 24H37a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM14 25a1 1 0 0 0-1-1H11a1 1 0 0 0 0 2h2A1 1 0 0 0 14 25zM25 36a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V37A1 1 0 0 0 25 36zM38.28 29.55l-1.84-.78a1 1 0 1 0-.78 1.84l1.84.78a1 1 0 1 0 .78-1.84zM20.7 35.13a1 1 0 0 0-1.31.53l-.78 1.84a1 1 0 1 0 1.84.78l.78-1.84A1 1 0 0 0 20.7 35.13zM14.8 29.12a1 1 0 0 0-1.3-.55l-1.85.75a1 1 0 1 0 .75 1.85l1.85-.75A1 1 0 0 0 14.8 29.12zM30.42 35.75a1 1 0 0 0-1.85.75l.75 1.85a1 1 0 0 0 1.85-.75z"
            ></path>
          </svg>
        </button>
      </div>
      {/* Seçilen etkinlik bilgileri */}
      {selectedEvent && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-80 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md">
            <h2 className="text-xl font-bold mb-4">{selectedEvent.Adi}</h2>
            <img
              src={selectedEvent?.Resim}
              className="rounded-lg w-full h-auto"
              alt={selectedEvent?.Adi}
            />
            <p className="bg-gray-200 rounded-full bg-opacity-60 mt-4 flex flex-row justify-center items-center ">
              {dayjs(selectedEvent.EtkinlikBaslamaTarihi).format(
                "DD/MM/YYYY - HH:mm"
              )}
            </p>
            {/* ... diğer etkinlik detayları */}
            <div className="flex justify-center">
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  clearSelectedEvent();
                }}
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Arama sonuçlarını gösterme */}
      {showSearchResults && filteredData.length === 0 && (
        <p className="text-center text-lg mt-4 h-[calc(100vh-210px)] flex justify-center items-center">
          Böyle bir etkinlik yok
        </p>
      )}

      {/* Arama sonuçları veya kategori etkinlik grupları */}
      {showSearchResults && filteredData.length > 0 ? (
        <EventGroup
          title="ARAMA SONUÇLARI"
          data={filteredData}
          handleEventClick={handleEventClick}
        />
      ) : (
        !showSearchResults && (
          <>
            {data.filter((item) => item?.Tur === "SERGİ").length > 1 && (
              <EventGroup
                title="SİNEMA"
                data={data.filter((item) => item?.Tur === "SİNEMA")}
                handleEventClick={handleEventClick}
              />
            )}
            {data.filter((item) => item?.Tur === "SERGİ").length > 1 && (
              <EventGroup
                title="TİYATRO"
                data={data.filter((item) => item?.Tur === "TİYATRO")}
                handleEventClick={handleEventClick}
              />
            )}
            {data.filter((item) => item?.Tur === "SERGİ").length > 1 && (
              <EventGroup
                title="KONSER"
                data={data.filter((item) => item?.Tur === "KONSER")}
                handleEventClick={handleEventClick}
              />
            )}
            {data.filter((item) => item?.Tur === "SERGİ").length > 1 && (
              <EventGroup
                title="SERGİ"
                data={data.filter((item) => item?.Tur === "SERGİ")}
                handleEventClick={handleEventClick}
              />
            )}
            {data.filter((item) => item?.Tur === "DİĞER").length > 1 && (
              <EventGroup
                title="DİĞER"
                data={data.filter((item) => item?.Tur === "DİĞER")}
                handleEventClick={handleEventClick}
              />
            )}
          </>
        )
      )}
    </div>
  );
};

// Etkinlik gruplarını oluşturan bileşen
function EventGroup({ title, data, handleEventClick }) {
  return (
    <div className={title.toLowerCase()}>
      <h1 className="text-4xl dark:text-white font-bold text-center my-auto">
        {title}
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={5}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <div className="flex flex-row justify-center">
          {data.map((item) => (
            <SwiperSlide
              key={item?.Id}
              className="flex flex-col items-center relative"
            >
              <div className="absolute top-0 left-0 text-sm bg-black dark:bg-blue-800 dark:text-white text-white px-5 py-2 rounded-tr-md">
                <span className="opacity-70">{item?.Tur}</span>
              </div>
              <div
                className={`absolute top-0 right-0 text-sm ${
                  item?.UcretsizMi ? "bg-green-600" : "bg-red-600"
                } bg-opacity-80 dark:bg-blue-800 dark:text-white text-white px-5 py-2 rounded-tr-md`}
              >
                <span className="opacity-70">
                  {item?.UcretsizMi ? "Ücretsiz" : "Ücretli"}
                </span>
              </div>
              <div
                className={`absolute bottom-14 left-0 text-sm bg-opacity-80 dark:bg-blue-800 dark:text-white text-white px-5 py-2 rounded-bl-md`}
              >
                <p>
                  {dayjs(item.EtkinlikBaslamaTarihi).format(
                    "DD/MM/YYYY - HH:mm"
                  )}
                </p>
              </div>
              <img
                src={item?.Resim}
                className="rounded-lg w-full h-auto m-2"
                alt={item?.Adi}
                onClick={() => handleEventClick(item)}
              />
              <p className="text-xl dark:text-white text-center">{item?.Adi}</p>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Home;
