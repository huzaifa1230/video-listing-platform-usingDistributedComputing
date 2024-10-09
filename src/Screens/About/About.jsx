import { useState } from "react";

import { Flex, Layout } from "antd";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HeaderImage from "../../assets/header.png";
function About() {
  const [loading, setLoading] = useState(false);
  return (
    <Flex className="" gap="middle" wrap="wrap">
      <Layout className="bg-gray-600">
        {/* <MainHeader /> */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="w-full md:w-4/6 lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden">
                {loading ? (
                  <Skeleton
                    height={256}
                    width="100%"
                    baseColor="#1e1e1e"
                    highlightColor="#3c3c3c"
                  />
                ) : (
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full "
                    src={HeaderImage}
                  />
                )}
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="flex items-center justify-center text-gray-400">
                    {loading ? (
                      <Skeleton
                        circle={true}
                        height={80}
                        width={80}
                        baseColor="#1e1e1e"
                        highlightColor="#3c3c3c"
                      />
                    ) : (
                      <img
                        alt="content"
                        className="object-cover object-center w-20 h-20 bg-gray-200 rounded-full inline"
                        src={HeaderImage}
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    {loading ? (
                      <Skeleton
                        height={20}
                        width={150}
                        baseColor="#1e1e1e"
                        highlightColor="#3c3c3c"
                      />
                    ) : (
                      <h2 className="text-lg mt-2 text-orange-800">my name</h2>
                    )}
                    <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>

                    {loading ? (
                      <Skeleton
                        count={4}
                        width={250}
                        baseColor="#1e1e1e"
                        highlightColor="#3c3c3c"
                      />
                    ) : (
                      <h2 className="text-md text-orange-800 font-normal leading-relaxed">
                        This project is a video-sharing platform utilizing
                        distributed computing, where data is efficiently managed
                        via backend services. It leverages AWS services,
                        including S3 for cloud storage, to store and stream
                        videos, ensuring scalability and high availability for
                        users.
                      </h2>
                    )}
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-orange-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  {loading ? (
                    <Skeleton
                      count={10}
                      baseColor="#1e1e1e"
                      highlightColor="#3c3c3c"
                    />
                  ) : (
                    <p className="text-lg text-orange-800 font-normal mb-4 leading-relaxed">
                      Our mission is to revolutionize the video-sharing
                      experience by harnessing the power of distributed
                      computing and cloud technologies. We aim to provide a
                      seamless, scalable platform that empowers users to upload,
                      store, and stream videos efficiently from anywhere in the
                      world. By leveraging AWS services, including S3 for
                      reliable cloud storage, we ensure that video content is
                      secure, highly available, and accessible at any time. Our
                      commitment is to offer a platform that is fast,
                      responsive, and built for global reach, while maintaining
                      the highest standards of data privacy and security. We
                      strive to foster a community where creators and viewers
                      alike can share and enjoy high-quality content with ease.
                      Our mission is to continuously innovate, enhance user
                      experience, and create a platform that adapts to the
                      growing needs of modern digital media consumption.
                    </p>
                  )}
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
