"use client"
import AppSection from "@/components/home/AppSection";
import Banner from "@/components/home/Banner";
import DiscussionSection from "@/components/home/DiscussionSection";
import FilterSection from "@/components/home/FilterSection";
import ReviewSection from "@/components/home/ReviewSection";
import TrustCard from "@/components/home/TrustCard";
import VariousAppSection from "@/components/home/VariousAppSection";
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    // Messenger Chat Plugin
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "105351811966153");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v12.0'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, [])
  return (
    <main>
      <Banner />
      <TrustCard />
      <FilterSection />
      <DiscussionSection />
      <AppSection />
      <VariousAppSection />
      <ReviewSection></ReviewSection>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </main>
  )
}

