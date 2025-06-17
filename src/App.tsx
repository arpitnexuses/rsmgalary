import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Album {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
}

const albums: Album[] = [
  {
    id: 1,
    title: "Team Building & Social Events",
    description: "",
    coverImage: "https://cdn-nexlink.s3.us-east-2.amazonaws.com/Frame_42_9683d323-532b-4586-a06a-57d36a7f2694.png",
    images: [
      "https://cdn-nexlink.s3.us-east-2.amazonaws.com/Frame_42_9683d323-532b-4586-a06a-57d36a7f2694.png",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    ]
  },
  {
    id: 2,
    title: "Learning & Development",
    description: "",
    coverImage: "https://cdn-nexlink.s3.us-east-2.amazonaws.com/Frame_9_37458723-b4ac-4765-932a-cf15661e4a0f.png",
    images: [
      "https://cdn-nexlink.s3.us-east-2.amazonaws.com/Frame_9_37458723-b4ac-4765-932a-cf15661e4a0f.png",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9",
      "https://images.unsplash.com/photo-1465447142348-e9952c393450",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
    ]
  },
  {
    id: 3,
    title: "Health & Wellness",
    description: "",
    coverImage: "https://cdn-nexlink.s3.us-east-2.amazonaws.com/Frame_38_8f713521-ede6-42ae-81d1-f6c7dfe67f09.png",
    images: [
      "https://cdn-nexlink.s3.us-east-2.amazonaws.com/Frame_38_8f713521-ede6-42ae-81d1-f6c7dfe67f09.png",
      "https://images.unsplash.com/photo-1507908708918-778587c9e563",
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8",
      "https://images.unsplash.com/photo-1506792006437-256b665541e2"
    ]
  },
  {
    id: 4,
    title: "CSR & Volunteering",
    description: "",
    coverImage: "https://cdn-nexlink.s3.us-east-2.amazonaws.com/Frame_36_5b4f3142-3809-4372-89d6-b1c2ee596451.png",
    images: [
      "https://cdn-nexlink.s3.us-east-2.amazonaws.com/Frame_36_5b4f3142-3809-4372-89d6-b1c2ee596451.png",
      "https://images.unsplash.com/photo-1494122353634-c310f45a6d3c",
      "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b",
      "https://images.unsplash.com/photo-1498574932731-e711f7092dda"
    ]
  },
  {
    id: 5,
    title: "Community Outreach",
    description: "Building stronger connections",
    coverImage: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Image%20(97).jpg",
    images: [
      "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Image%20(97).jpg",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
      "https://images.unsplash.com/photo-1506792006437-256b665541e2",
      "https://images.unsplash.com/photo-1498574932731-e711f7092dda"
    ]
  },
  {
    id: 6,
    title: "Sports Day Event",
    description: "Promoting health and wellness",
    coverImage: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Z98B3652%20(1).jpg",
    images: [
      "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Z98B3652%20(1).jpg",
      "https://images.unsplash.com/photo-1465447142348-e9952c393450",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
    ]
  },
  {
    id: 7,
    title: "Volunteer Day",
    description: "Making an impact together",
    coverImage: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/don%205.jpg",
    images: [
      "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/don%205.jpg",
      "https://images.unsplash.com/photo-1507908708918-778587c9e563",
      "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    ]
  },
  {
    id: 8,
    title: "Team Building Workshop",
    description: "Growing stronger as one",
    coverImage: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Image%20(97).jpg",
    images: [
      "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Image%20(97).jpg",
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8",
      "https://images.unsplash.com/photo-1494122353634-c310f45a6d3c",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9"
    ]
  }
];

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  
  const albumsPerPage = 4;
  const totalPages = Math.ceil(albums.length / albumsPerPage);
  
  const getCurrentAlbums = () => {
    const start = currentPage * albumsPerPage;
    return albums.slice(start, start + albumsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleAlbumClick = (album: Album) => {
    setSelectedAlbum(album);
    setCurrentImageIndex(0);
  };

  const handleClose = () => {
    setSelectedAlbum(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedAlbum) {
      setCurrentImageIndex((prev) => 
        prev === selectedAlbum.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAlbum) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAlbum.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-[white] p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0095D5] mb-14 mt-5 text-center">RSM Gallery</h1>
        
        {!selectedAlbum ? (
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {getCurrentAlbums().map((album) => (
                <div
                  key={album.id}
                  className="flex flex-col bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div 
                    className="aspect-[4/3] cursor-pointer overflow-hidden relative group"
                    onClick={() => handleAlbumClick(album)}
                  >
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Overlay with gradient background for albums with id > 4 */}
                    {album.id > 4 ? (
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent p-4">
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                          {album.title}
                        </h3>
                        <p className="text-white/90 text-sm line-clamp-2">
                          {album.description}
                        </p>
                      </div>
                    ) : (
                      <div className="absolute inset-0 p-4">
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                          {album.title}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Album Navigation Controls */}
            <button
              onClick={prevPage}
              className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-[#0095D5] text-white p-2 rounded-full hover:bg-[#11A537]"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextPage}
              className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#0095D5] text-white p-2 rounded-full hover:bg-[#11A537]"
            >
              <ChevronRight size={24} />
            </button>

            {/* Page Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentPage === index ? 'bg-[#0095D5] scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-xl p-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-[#0095D5] z-10"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold mb-2 text-[#0095D5]">{selectedAlbum.title}</h2>
            <p className="text-gray-600 mb-6">{selectedAlbum.description}</p>
            
            <div className="relative h-[500px] group">
              <img
                src={selectedAlbum.images[currentImageIndex]}
                alt={`${selectedAlbum.title} ${currentImageIndex + 1}`}
                className="w-full h-full object-contain rounded-lg"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#0095D5] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#11A537]"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#0095D5] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#11A537]"
              >
                <ChevronRight size={24} />
              </button>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {selectedAlbum.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index ? 'bg-[#0095D5] scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;