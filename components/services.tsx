"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Zamjena guma",
    image: "/placeholder.webp",
    description: "Profesionalna zamjena svih vrsta i dimenzija guma.",
  },
  {
    title: "Balansiranje",
    image: "/placeholder.webp",
    description: "Precizno balansiranje kotača najmodernijom opremom.",
  },
  {
    title: "Popravak guma",
    image: "/placeholder.webp",
    description: "Brz i pouzdan popravak probušenih i oštećenih guma.",
  },
  {
    title: "Čuvanje guma",
    image: "/placeholder.webp",
    description: "Sigurno skladištenje vaših zimskih ili ljetnih guma.",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeInSlideUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const fadeInSlideRight = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const statsItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-light pb-40">
      <div className="container mx-auto px-4 md:px-0">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -translate-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white overflow-hidden p-2"
              variants={cardVariants}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="pt-8 flex flex-col justify-between p-2">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xl">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div
          id="about-us-section"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative my-20 pt-6"
        >
          <Image
            src="/circles-blue.png"
            width={200}
            height={200}
            alt="Decoration circles blue"
            className="absolute -top-44 -left-32 md:-left-44 z-0"
          />
          <motion.div
            className="pt-12"
            variants={fadeInSlideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">O nama</h1>
            <p className="mb-4">
              Mi smo obiteljska vulkanizerska radionica s više od 15 godina
              iskustva u radu s gumama svih vrsta vozila. Naš tim stručnih
              vulkanizera pruža vrhunsku uslugu zamjene i održavanja guma uz
              pristupačne cijene i brzu uslugu.
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-accent hover:bg-accentLight transition-colors text-white font-bold py-2 px-4"
            >
              +(385) 91-453-3298
            </motion.button>
          </motion.div>

          <div className="flex flex-col md:grid md:grid-cols-custom gap-6">
            <motion.div
              variants={fadeInSlideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/placeholder.webp"
                alt="Our workshop"
                width={600}
                height={400}
                className="w-full h-full"
              />
            </motion.div>
            <motion.div
              className="grid grid-cols-2 sm:flex md:flex-col h-full"
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                { number: "100%", text: "Zadovoljstvo klijenata" },
                { number: "20000+", text: "Zamijenjenih guma" },
                { number: "15", text: "Godina iskustva" },
              ].map((stat, index, array) => (
                <motion.div
                  key={index}
                  className={`border flex-1 border-gray-400 p-4 ${
                    index !== array.length - 1 && "md:border-r"
                  } ${index === 0 && "border-r-0 md:border-b-0"}  ${
                    index === 1 && "border-r"
                  } ${
                    index === array.length - 1 &&
                    "md:pr-0 col-span-2 border-t-0 text-center md:text-left"
                  }`}
                  variants={statsItemVariants}
                >
                  <h3 className="font-bold">{stat.number}</h3>
                  <span className="uppercase text-sm">{stat.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
