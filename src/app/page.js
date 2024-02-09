import AppSection from "@/components/home/AppSection";
import Banner from "@/components/home/Banner";
import DiscussionSection from "@/components/home/DiscussionSection";
import FilterSection from "@/components/home/FilterSection";
import TrustCard from "@/components/home/TrustCard";
import VariousAppSection from "@/components/home/VariousAppSection";

export default function Home() {
  return (
    <main>
      <Banner />
      <TrustCard />
      <FilterSection />
      <DiscussionSection />
      <AppSection />
      <VariousAppSection />
      
    </main>
  )
}

