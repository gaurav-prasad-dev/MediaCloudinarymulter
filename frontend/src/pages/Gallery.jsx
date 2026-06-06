import { useEffect, useState } from "react";
import API from "../api";

export default function Gallery() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMedia = async () => {
    try {
      const res = await API.get("/");
      setMedia(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>🖼️ Gallery</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
        }}
      >
        {media.map((item) => (
          <div key={item._id}>
            {item.type === "image" ? (
              <img
                src={item.url}
                alt="media"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            ) : (
              <video
                src={item.url}
                controls
                style={{ width: "100%", height: "200px" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}