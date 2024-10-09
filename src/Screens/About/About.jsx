// import { useState } from "react";

import { Flex, Layout } from "antd";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import HeaderImage from "../../assets/header.png";
function About() {
  //   const [loading, setLoading] = useState(false);
  return (
    <Flex className="" gap="middle" wrap="wrap">
      <Layout className="bg-gray-600">
        {/* <MainHeader /> */}
        <h2 className="text-3xl font-bold text-orange-600 text-center pt-8 pb-2">
          About us
        </h2>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="w-full md:w-4/6 lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full "
                  src={HeaderImage}
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <h2 className="text-3xl font-bold text-orange-600 text-left pb-2">
                    Our App
                  </h2>

                  <h2 className="text-md text-orange-500 font-normal leading-relaxed">
                    This project is a video-sharing platform utilizing
                    distributed computing, where data is efficiently managed via
                    backend services. It leverages AWS services, including S3
                    for cloud storage, to store and stream videos, ensuring
                    scalability and high availability for users.
                  </h2>

                  {/* </div> */}
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-orange-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <h2 className="text-3xl font-bold text-orange-600 text-left pb-2">
                    Our Mission
                  </h2>
                  <p className="text-lg text-orange-500 font-normal mb-4 leading-relaxed">
                    Our mission is to revolutionize the video-sharing experience
                    by harnessing the power of distributed computing and cloud
                    technologies. We aim to provide a seamless, scalable
                    platform that empowers users to upload, store, and stream
                    videos efficiently from anywhere in the world. By leveraging
                    AWS services, including S3 for reliable cloud storage, we
                    ensure that video content is secure, highly available, and
                    accessible at any time. Our commitment is to offer a
                    platform that is fast, responsive, and built for global
                    reach, while maintaining the highest standards of data
                    privacy and security. We strive to foster a community where
                    creators and viewers alike can share and enjoy high-quality
                    content with ease. Our mission is to continuously innovate,
                    enhance user experience, and create a platform that adapts
                    to the growing needs of modern digital media consumption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Flex>
  );
}

export default About;
