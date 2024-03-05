import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Features
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Features Of OptimumAI
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Explore the cutting-edge features powered by artificial intelligence in OptimumAI.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {/* Replace the existing feature blocks with AI-related content */}
          {/* Feature 1: Natural Language Processing */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
              {/* Include AI-related icon */}
              <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                {/* Replace with NLP icon */}
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Replace with NLP icon path */}
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Natural Language Processing
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Leverage state-of-the-art natural language processing for enhanced interactions.
              </p>
              <Link
                to="#"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* Feature 2: Machine Learning Models */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
              {/* Include AI-related icon */}
              <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                {/* Replace with Machine Learning icon */}
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Replace with Machine Learning icon path */}
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Advanced ML Models
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Utilize powerful machine learning models to extract insights from your data.
              </p>
              <Link
                to="#"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* Feature 3: Computer Vision */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="wow fadeInUp group mb-12" data-wow-delay=".2s">
              {/* Include AI-related icon */}
              <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                {/* Replace with Computer Vision icon */}
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Replace with Computer Vision icon path */}
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Advanced Computer Vision
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Achieve unparalleled image and video analysis with our advanced computer vision capabilities.
              </p>
              <Link
                to="#"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* Feature 4: Intelligent Automation */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="wow fadeInUp group mb-12" data-wow-delay=".25s">
              {/* Include AI-related icon */}
              <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                {/* Replace with Intelligent Automation icon */}
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Replace with Intelligent Automation icon path */}
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Intelligent Automation
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Streamline processes and workflows with intelligent (OptimumAI) automation solutions.
              </p>
              <Link
                to="#"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
