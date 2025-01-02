export const bouncyCardsFeaturesCode = "import React, { ReactNode } from \"react\";\r\nimport { motion } from \"framer-motion\";\r\n\r\nexport const BouncyCardsFeatures = () => {\r\n  return (\r\n    <section className=\"mx-auto max-w-7xl px-4 py-12 text-slate-800\">\r\n      <div className=\"mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8\">\r\n        <h2 className=\"max-w-lg text-4xl font-bold md:text-5xl\">\r\n          Grow faster with our\r\n          <span className=\"text-slate-400\"> all in one solution</span>\r\n        </h2>\r\n        <motion.button\r\n          whileHover={{ scale: 1.05 }}\r\n          whileTap={{ scale: 0.95 }}\r\n          className=\"whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700\"\r\n        >\r\n          Learn more\r\n        </motion.button>\r\n      </div>\r\n      <div className=\"mb-4 grid grid-cols-12 gap-4\">\r\n        <BounceCard className=\"col-span-12 md:col-span-4\">\r\n          <CardTitle>Do a thing</CardTitle>\r\n          <div className=\"absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]\">\r\n            <span className=\"block text-center font-semibold text-indigo-50\">\r\n              FEATURE DEMO HERE\r\n            </span>\r\n          </div>\r\n        </BounceCard>\r\n        <BounceCard className=\"col-span-12 md:col-span-8\">\r\n          <CardTitle>Do another thing</CardTitle>\r\n          <div className=\"absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]\">\r\n            <span className=\"block text-center font-semibold text-orange-50\">\r\n              FEATURE DEMO HERE\r\n            </span>\r\n          </div>\r\n        </BounceCard>\r\n      </div>\r\n      <div className=\"grid grid-cols-12 gap-4\">\r\n        <BounceCard className=\"col-span-12 md:col-span-8\">\r\n          <CardTitle>And this too</CardTitle>\r\n          <div className=\"absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]\">\r\n            <span className=\"block text-center font-semibold text-emerald-50\">\r\n              FEATURE DEMO HERE\r\n            </span>\r\n          </div>\r\n        </BounceCard>\r\n        <BounceCard className=\"col-span-12 md:col-span-4\">\r\n          <CardTitle>And finally this</CardTitle>\r\n          <div className=\"absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]\">\r\n            <span className=\"block text-center font-semibold text-red-50\">\r\n              FEATURE DEMO HERE\r\n            </span>\r\n          </div>\r\n        </BounceCard>\r\n      </div>\r\n    </section>\r\n  );\r\n};\r\n\r\nconst BounceCard = ({\r\n  className,\r\n  children,\r\n}: {\r\n  className: string;\r\n  children: ReactNode;\r\n}) => {\r\n  return (\r\n    <motion.div\r\n      whileHover={{ scale: 0.95, rotate: \"-1deg\" }}\r\n      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}\r\n    >\r\n      {children}\r\n    </motion.div>\r\n  );\r\n};\r\n\r\nconst CardTitle = ({ children }: { children: ReactNode }) => {\r\n  return (\r\n    <h3 className=\"mx-auto text-center text-3xl font-semibold\">{children}</h3>\r\n  );\r\n};"