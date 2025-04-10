import Footer from "@/components/footer";
import AboutUs from "./about-us";
import Faq from "./faq";
import Feedbacks from "./feedbacks";
import Hero from "./hero";
import Plans from "./plans";

export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutUs/>
      <Plans/>
      <Feedbacks/>
      <Faq/>
      <Footer/>
    </main>
  )
}