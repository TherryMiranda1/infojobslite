import Lottie from "lottie-react";
import jobs from "../../static/lottie/jobs.json";

function JobsAnimation() {
  return (
      <Lottie animationData={jobs} />
  );
}

export default JobsAnimation;
