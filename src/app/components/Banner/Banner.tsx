import React from "react";
import JobsAnimation from "../Animations/LookingJobs";

function Banner() {
  return (
    <main className="preloadedBanner">
      <section className="preloadedBannerContent">
        <JobsAnimation />
      </section>
    </main>
  );
}

export default Banner;
