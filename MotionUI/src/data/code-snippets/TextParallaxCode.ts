export const TextPrallaxCode =
  'import React, { ReactNode, useRef } from "react";\r\nimport { motion, useScroll, useTransform } from "framer-motion";\r\nimport { ArrowUpRight } from "lucide-react";\r\n\r\nexport const TextParallaxContentExample = () => {\r\n  return (\r\n    <div className="bg-white">\r\n      <TextParallaxContent\r\n        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"\r\n        subheading="Collaborate"\r\n        heading="Built for all of us."\r\n      >\r\n        <ExampleContent />\r\n      </TextParallaxContent>\r\n      <TextParallaxContent\r\n        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"\r\n        subheading="Quality"\r\n        heading="Never compromise."\r\n      >\r\n        <ExampleContent />\r\n      </TextParallaxContent>\r\n      <TextParallaxContent\r\n        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"\r\n        subheading="Modern"\r\n        heading="Dress for the best."\r\n      >\r\n        <ExampleContent />\r\n      </TextParallaxContent>\r\n    </div>\r\n  );\r\n};\r\n\r\nconst IMG_PADDING = 12;\r\n\r\nconst TextParallaxContent = ({\r\n  imgUrl,\r\n  subheading,\r\n  heading,\r\n  children,\r\n}: {\r\n  imgUrl: string;\r\n  subheading: string;\r\n  heading: string;\r\n  children: ReactNode;\r\n}) => {\r\n  return (\r\n    <div\r\n      style={{\r\n        paddingLeft: IMG_PADDING,\r\n        paddingRight: IMG_PADDING,\r\n      }}\r\n    >\r\n      <div className="relative h-[150vh]">\r\n        <StickyImage imgUrl={imgUrl} />\r\n        <OverlayCopy heading={heading} subheading={subheading} />\r\n      </div>\r\n      {children}\r\n    </div>\r\n  );\r\n};\r\n\r\nconst StickyImage = ({ imgUrl }: { imgUrl: string }) => {\r\n  const targetRef = useRef(null);\r\n  const { scrollYProgress } = useScroll({\r\n    target: targetRef,\r\n    offset: ["end end", "end start"],\r\n  });\r\n\r\n  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);\r\n  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);\r\n\r\n  return (\r\n    <motion.div\r\n      style={{\r\n        backgroundImage: `url(${imgUrl})`,\r\n        backgroundSize: "cover",\r\n        backgroundPosition: "center",\r\n        height: `calc(100vh - ${IMG_PADDING * 2}px)`,\r\n        top: IMG_PADDING,\r\n        scale,\r\n      }}\r\n      ref={targetRef}\r\n      className="sticky z-0 overflow-hidden rounded-3xl"\r\n    >\r\n      <motion.div\r\n        className="absolute inset-0 bg-neutral-950/70"\r\n        style={{\r\n          opacity,\r\n        }}\r\n      />\r\n    </motion.div>\r\n  );\r\n};\r\n\r\nconst OverlayCopy = ({\r\n  subheading,\r\n  heading,\r\n}: {\r\n  subheading: string;\r\n  heading: string;\r\n}) => {\r\n  const targetRef = useRef(null);\r\n  const { scrollYProgress } = useScroll({\r\n    target: targetRef,\r\n    offset: ["start end", "end start"],\r\n  });\r\n\r\n  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);\r\n  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);\r\n\r\n  return (\r\n    <motion.div\r\n      style={{\r\n        y,\r\n        opacity,\r\n      }}\r\n      ref={targetRef}\r\n      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"\r\n    >\r\n      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">\r\n        {subheading}\r\n      </p>\r\n      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>\r\n    </motion.div>\r\n  );\r\n};\r\n\r\nconst ExampleContent = () => (\r\n  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">\r\n    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">\r\n      Additional content explaining the above card here\r\n    </h2>\r\n    <div className="col-span-1 md:col-span-8">\r\n      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">\r\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,\r\n        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima\r\n        maiores voluptate est ut saepe accusantium maxime doloremque nulla\r\n        consectetur possimus.\r\n      </p>\r\n      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">\r\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium\r\n        reiciendis blanditiis aliquam aut fugit sint.\r\n      </p>\r\n      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">\r\n        Learn more <ArrowUpRight className="inline" />\r\n      </button>\r\n    </div>\r\n  </div>\r\n);\r\n';
