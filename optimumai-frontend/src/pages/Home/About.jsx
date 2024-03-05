import React from "react";
import aboutImage1 from "../../assets/images/about/about-image-01.jpg";
import aboutImage2 from "../../assets/images/about/about-image-02.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Welcome to OptimumAI Labs
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  OptimumAI Labs is actively developing a cutting-edge product
                  that leverages AI to enhance soft skills. The platform
                  utilizes AI algorithms to assess and improve key skills such
                  as communication, collaboration, problem-solving, and
                  leadership. Our focus extends beyond mere functionality,
                  incorporating robust user engagement features to create an
                  interactive learning experience.
                  <br />
                  <br />
                  Within the OptimumAI Labs platform, users will find a dynamic
                  environment for collaboration, enabling individuals to work on
                  projects related to human improvement applications and
                  startups. This collaborative space fosters creativity and
                  knowledge sharing among users, promoting a culture of
                  continuous learning.
                </p>

                <Link
                  to="#"
                  className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <img
                      src={aboutImage1}
                      alt="about"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <img
                      src={aboutImage2}
                      alt="about"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <span className="block text-5xl font-extrabold text-white">
                        09
                      </span>
                      <span className="block text-base font-semibold text-white">
                        Years of Experience
                      </span>
                    </div>
                    {/* Additional SVG elements if needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
