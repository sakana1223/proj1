import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

export default function Home() {
  const targetDate = new Date("2025-06-28T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - targetDate;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const messages = [
    "It's been almost a month since we met... and you've already made it unforgettable. ❤️",
    "You brought soulful colors into my ordinary, casual days.",
    "The rides, the movies, the scooty trips, the Google Maps jokes — every little moment feels magical.",
    "From temples to restaurants, and quiet corners to loud laughter — it's all been 'wahh!' 😄",
    "That first day we chatted endlessly... every vibe matched, every moment clicked.",
    "Our gym dates and that burger dinner 🍔 — who knew fitness and food could be the perfect combo?",
    "Here's to many more memories, workouts, food trails, and laughs. With you, even silence is special."
  ];

  const photos = [
    "/trish1.jpg",
    "/trish2.jpg",
    "/trish3.jpg"
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #fcd5ce, #f8edeb)", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: "2rem", fontWeight: "bold", color: "#b5838d" }}>
        Since We Met ❤️
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: "1.5rem", color: "#6d6875", margin: "10px" }}>
        {timeLeft.days} days, {timeLeft.hours} hrs, {timeLeft.minutes} mins, {timeLeft.seconds} secs
      </motion.div>

      <div style={{ maxWidth: "600px", display: "grid", gap: "10px", marginTop: "20px" }}>
        {messages.map((msg, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
            <div style={{ background: "rgba(255,255,255,0.8)", padding: "15px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              {msg}
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px", marginTop: "20px", width: "100%", maxWidth: "600px" }}>
        {photos.map((src, idx) => (
          <motion.img key={idx} src={src} alt={`trish-${idx}`} style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }} whileHover={{ scale: 1.05 }} />
        ))}
      </div>

      <div style={{ marginTop: "20px", width: "100%", maxWidth: "400px" }}>
        <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" controls playing loop width="100%" />
      </div>
    </div>
  );
}
