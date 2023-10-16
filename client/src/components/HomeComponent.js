import React from "react";
import Coursal from "./HomeComponents/coursal";
import Categories from "./HomeComponents/Categories";
import GetMoney from "./HomeComponents/GetMoney";
import Faqs from "./HomeComponents/Faqs";

export default function HomeComponent() {
  const yourFaqData = [
    {
      question: "Get a free quote",
      answer:
        "Check what you could borrow and your rate before you apply-without affecting your credit score.",
    },
    {
      question: "Apply in 10 minutes",
      answer:
        "It takes minutes to apply online. It is also easy, as we fill out your info where we can.",
    },
    {
      question: "Relax we are top rated",
      answer:
        "Both Moneyfacts and Defaqto gave your loans five stars- the best rating- in 2021,2022 and 2023.",
    },
    {
      question: "Different loans we offer",
      answer:
        "Home improvement, consolidated debt, marriage, holiday trip, we provide assistance for all",
    },
  ];

  return (
    <div>
      <Coursal />
      <GetMoney />
      <Categories />
      <Faqs faqData={yourFaqData} />
    </div>
  );
}
