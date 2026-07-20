
import Features from "../Features";
import Banner from "./Banner";
import DashboardPreview from "./DashboardPreview";
import FAQ from "./FAQ";
import HowItWorks from "./HowItWorks";
import StatusTimeline from "./StatusTimeline";
import Testimonials from "./Testimonials";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
   <div >
<Banner/>
<WhyChoose/>
<Features/>
<HowItWorks/>
<DashboardPreview/>
<StatusTimeline/>
<Testimonials/>
<FAQ/>
   </div>
  );
};

export default Home;