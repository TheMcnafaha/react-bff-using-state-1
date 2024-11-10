import Gallery from "./components/gallery";

const shortSculptureList = [
  {
    name: "Homenaje a la Neurocirugía",
    artist: "Marta Colvin Andrade",
    url: "https://i.imgur.com/Mx7dA2Y.jpg",
    alt: "A bronze statue of two crossed hands delicately holding a human brain in their fingertips.",
  },
  {
    name: "Floralis Genérica",
    artist: "Eduardo Catalano",
    url: "https://i.imgur.com/ZF6s192m.jpg",
    alt: "A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.",
  },
  {
    name: "Eternal Presence",
    artist: "John Woodrow Wilson",
    url: "https://i.imgur.com/aTtVpES.jpg",
    alt: "The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.",
  },
];
export default function Home() {
  return (
    <div className=" flex justify-center min-h-screen items-center">
      <Gallery />
    </div>
  );
}
