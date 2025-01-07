"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  TbSettingsCog,
  TbSettingsSearch,
  TbSettingsShare,
} from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa6";

function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageReveal = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardAnimation = {
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
    <section className="bg-dark text-white px-4 md:px-0 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 mb-32 md:mb-0 md:flex-row justify-between items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 z-50 max-w-2xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trebate hitnu zamjenu ili popravak guma? Tu smo za vas!
            </h1>
            <p className="mb-6">
              Pružamo profesionalne vulkanizerske usluge već više od 15 godina.
              Kvaliteta i brzina su naš zaštitni znak, a zadovoljstvo naših
              klijenata nam je na prvom mjestu.
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-accent hover:bg-accentLight transition-colors text-white font-bold py-2 px-4"
            >
              Nazovite odmah
            </motion.button>
            <motion.div
              className="mt-8 flex"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="px-8 border-x border-gray-600">
                <p className="text-3xl font-bold">15</p>
                <p className="text-sm">
                  Godina <br /> iskustva
                </p>
              </div>
              <div className="px-8 border-r border-gray-600">
                <p className="text-3xl font-bold">20000+</p>
                <p className="text-sm">
                  Zamijenjenih <br /> guma
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 relative"
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative w-full h-0 pb-[66.67%]">
              <Image
                src="/placeholder.webp"
                alt="Mechanic working on a car"
                width={1000}
                height={667}
                className="absolute inset-0"
                style={{ zIndex: 1 }}
              />
            </div>
            <div
              className="bg-[#353c44] w-full h-2/3 absolute -bottom-10 -left-10"
              style={{ zIndex: 0 }}
            ></div>
          </motion.div>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-44"
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              icon: <TbSettingsSearch className="h-8 w-8" />,
              title: "Sve vrste guma",
              description:
                "Radimo sa svim vrstama i dimenzijama guma - od osobnih automobila do dostavnih vozila i SUV-ova.",
            },
            {
              icon: <TbSettingsCog className="h-8 w-8" />,
              title: "Kompletna usluga",
              description:
                "Nudimo zamjenu guma, balansiranje, krpanje probušenih guma i savjetovanje pri odabiru novih guma.",
            },
            {
              icon: <TbSettingsShare className="h-8 w-8" />,
              title: "Brza usluga",
              description:
                "Većinu popravaka i zamjena obavimo unutar sat vremena. Također nudimo i hitne intervencije na cesti.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={`border ${
                index > 0 ? "md:border-l-0 border-t-0 md:border-t" : ""
              } border-gray-600 p-6 pt-12 pb-12 md:pb-6 relative`}
              variants={cardAnimation}
            >
              <div className="absolute -top-8 left-6 rounded-full bg-dark border border-gray-600 p-4">
                {card.icon}
              </div>
              <h2 className="mb-2 font-bold">{card.title}</h2>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex items-end justify-between flex-col md:flex-row gap-6 mt-40 mb-40 relative"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/circles-gray.png"
            width={200}
            height={200}
            alt="Decoration circles gray"
            className="absolute -top-36 right-8 z-0"
          />
          <div className="max-w-xl z-50">
            <div id="services-section" className="h-10"></div>
            <h2 className="text-4xl mt-6 md:text-5xl font-bold mb-4">
              Profesionalne vulkanizerske usluge
            </h2>
            <p>
              Kod nas možete pronaći široku ponudu guma vodećih proizvođača po
              najpovoljnijim cijenama. Naši stručnjaci će vam pomoći odabrati
              najbolje gume za vaše vozilo.
            </p>
          </div>
          <div className="flex items-center h-20 z-10">
            <p className="border px-4 h-full flex items-center border-gray-600 border-r-0">
              Nazovite nas za više informacija
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex min-w-fit items-center justify-center gap-2 bg-accent hover:bg-accentLight transition-colors text-white font-bold h-full px-4"
            >
              <FaPhoneVolume />
              <span>Nazovite odmah</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
