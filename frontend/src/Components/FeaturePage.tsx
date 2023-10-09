import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const FeatureItem: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  const slideIn = useSpring({
    transform: inView ? "translateX(0)" : "translateX(-50px)",
    config: { duration: 800 },
  });

  const scaleIn = useSpring({
    transform: inView ? "scale(1)" : "scale(0.8)",
    config: { duration: 800 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...fadeIn, ...slideIn, ...scaleIn }}
      className="feature-item mb-8"
    >
      <h2 className="text-richtextdark text-2xl font-bold mb-2">{title}</h2>
      <p className="text-textdark">{description}</p>
    </animated.div>
  );
};

const FeaturePage = () => {
  return (
    <div className="bg-bgdark flex flex-col">
      <div className="feature-content h-full w-[80%] mx-auto mt-10">
        <div className="text-center">
          <span className="text-textdark text-4xl text-center font-thin">
            Our Features
          </span>
          <hr className="border-t-2 border-orange-500 my-4" />
        </div>
        <div className="feature-section w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-[10%]">
          <FeatureItem
            title="Skill Profiles:"
            description="Users can create profilesshowcasingtheir skills, expertise, andthe services
            they can offer."
          />
          <FeatureItem
            title="Skill Listings:"
            description="Individuals can post listingsforthe skills they are lookingto acquire orthe
            servicesthey need."
          />
          <FeatureItem
            title="Matching Algorithm:"
            description="Implement a matching algorithm that suggests potential skill maps based
            on use r profiles and preferences"
          />
          <FeatureItem
            title="Messaging System:"
            description="Include a messaging system to facilitate communication between users for
            arranging skill exchanges."
          />
          <FeatureItem
            title="Rating and Reviews:"
            description="Allow users to le we ratings and reviews for each other base d on their
            experienceswith the skill exchange."
          />
          <FeatureItem
            title="Skill Categories:"
            description="Categorize skills into different categories (e.g., programming design,
              language learning) for easier navigation."
          />
          <FeatureItem
            title="Virtual Skill Sessions:"
            description="Offer the option for virtual skill exchange sessions through video calls or
            screen sharing."
          />
          <FeatureItem
            title="Skill Progress Tracker."
            description="Users can track their progress in le arning a new skill and showcase
            achievem ents on their profiles."
          />
          <FeatureItem
            title="Community Challenges: "
            description="Implement community challenges or ev ents where users can participate
            and showcase their newly acquired skills."
          />
          <FeatureItem
            title="SkillSwap Marketplace :"
            description="Integrate a mattetplace where users can offer and exchange physical
            goods or servicesin addition to skills."
          />
        </div>
        <br></br>
        <div className="flex justify-center gap-4">
          <div className="flex items-center">
            <span role="img" aria-label="Feature Icon">
              🚀
            </span>
            <p className="text-textdark ml-2">Accelerated Growth</p>
          </div>
          <div className="flex items-center">
            <span role="img" aria-label="Feature Icon">
              🌐
            </span>
            <p className="text-textdark ml-2">Global Reach</p>
          </div>
          <div className="flex items-center">
            <span role="img" aria-label="Feature Icon">
              🎓
            </span>
            <p className="text-textdark ml-2">Educational Content</p>
          </div>
          <div className="flex items-center">
            <span role="img" aria-label="Feature Icon">
              💬
            </span>
            <p className="text-textdark ml-2">Interactive Discussions</p>
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default FeaturePage;
