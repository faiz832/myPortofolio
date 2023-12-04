import searchfilm from "../../assets/Search Film.png";
import exploresolo from "../../assets/Explore Solo.png";
import simpleblog from "../../assets/simple blog.png";
import animelist from "../../assets/anime list.png";
import tokokelontong from "../../assets/toko kelontong.png";

export const projectData = [
  {
    id: 1,
    image: searchfilm,
    title: "Film",
    category: "frontend",
    desc: "Sebuah website penyedia list film dengan consume API dari themoviedb.org sebagai backend. Fitur yang tersedia hanyalah search movie saja.",
    stack: "React, CSS",
    link: "",
  },
  {
    id: 2,
    image: animelist,
    title: "Anime List",
    category: "frontend",
    desc: "Sebuah website anime list sederhana dengan API dari shikimori.one sebagai backend. Nextjs 14 server side, Infinite Scroll dan Frammer Motion Animation",
    stack: "Next, Tailwind",
    link: "https://anime-list-jet.vercel.app/",
  },
  {
    id: 3,
    image: exploresolo,
    title: "Explore Solo",
    category: "frontend",
    desc: "Sebuah landing page sederhana dengan tema pengenalan Kota Solo.",
    stack: "HTML, CSS, JS",
    link: "https://explore-solo.vercel.app/",
  },
  {
    id: 4,
    image: simpleblog,
    title: "Simple Blog",
    category: "frontend",
    desc: "Sebuah blog sederhana dengan ",
    stack: "HTML, CSS, JS, JQuery",
    link: "https://simple-blog-lovat.vercel.app/",
  },
  {
    id: 5,
    image: tokokelontong,
    title: "Toko Kelontong",
    category: "fullstack",
    desc: "Sebuah blog sederhana dengan ",
    stack: "Laravel, Tailwind",
    link: "https://tokokelontongpakipul1.000webhostapp.com/",
  },
];

export const projectNav = [
  {
    name: "all",
  },
  {
    name: "frontend",
  },
  {
    name: "fullstack",
  },
];
