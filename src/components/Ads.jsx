import ContentCreationCard from './ContentCreationCard';
import Card from './Card';

function Ads() {
  return (
    <div>
      <h1>Advertisment: Content Creation and Ad Campaigns Management</h1>
      <div className="container">
        <div className="row d-flex align-items-stretch">
          <div className="col-md-4 mb-4">
            {/* Content Creation */}
            <Card
              title="Content Creation"
              subtitle="Promotional images & Reels for ads"
              text="High-quaality  promotional content for Facebook and Google Ads, including professionally designed split-image posts and short video Reels that highlight your brand, services and calls to action."
              link1="View Case Studies"
              link2="Explore Services"
            />
          </div>
          <div className="col-md-4 mb-4">
            {/* Google Ads Campaigns */}
            <Card
              title="Google Ads Campaigns"
              subtitle="Strategic creation and ongoing management of Google Ads campaigns tailored to your business goals"
              text="Google Ads campaigns general description: we collaborate with you to design a high-performing Google Ads campaign from the ground up - selecting the right objectives and ensuring consistent optimizations and monitoring. We monitor performance, implement improvements and deliver clear monthly reports so you always know how your campaign is progressing."
              link3="Read more about campaign types"
            />
          </div>
          <div className="col-md-4 mb-4">
            {/* Facebook Ads Campaigns */}
            <Card
              title="Facebook Ads Campaigns"
              subtitle="Engaging campaigns tailored to your business goals"
              text="Creating and managing Facebook Ads campaigns, including promotional content, ad copy, and performance monitoring to reach your audience effectively."
              link3="Read more about campaign types"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ads;
