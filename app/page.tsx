import SectionHero from "../components/SectionHero";
//import SectionAbout from "../components/SectionAbout";
import SectionGallery from "../components/SectionGallery";
import SectionHighlights from "../components/SectionHighlights";

export default function Home() {
  return (
    <main className="bg-[#F7F9F7] text-[#2E2E2E]">
      <SectionHero />
      {/* <SectionAbout /> */}
      <SectionGallery />
      <SectionHighlights />

      <section className="bg-[#6B8F71] text-white text-center py-16">
        <h2 className="text-2xl font-bold">
          Comece agora a desenvolver o potencial das crianças
        </h2>
        <button className="mt-6 rounded-full bg-white px-8 py-3 text-[#6B8F71] font-semibold hover:bg-[#F7F9F7] transition">
          Ver materiais
        </button>
      </section>
    </main>
  );
}
