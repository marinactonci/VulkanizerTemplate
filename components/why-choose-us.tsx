"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaUserCheck, FaAward } from "react-icons/fa";

const reasons = [
  {
    icon: FaTools,
    title: "Moderna oprema",
    description:
      "Koristimo najmoderniju opremu za balansiranje i montažu guma svih dimenzija.",
  },
  {
    icon: FaUserCheck,
    title: "Brza usluga",
    description:
      "Većinu uslua obavljamo unutar sat vremena, uz mogućnost hitnih intervencija.",
  },
  {
    icon: FaAward,
    title: "Provjerena kvaliteta",
    description:
      "15 godina iskustva i tisuće zadovoljnih klijenata jamče kvalitetu naše usluge.",
  },
];

export default function WhyChooseUs() {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemFade = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4 md:px-0">
        <motion.div
          className="aspect-video overflow-hidden w-full h-[450px] !-translate-y-40"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            className="z-50"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492404069!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690574312720!5m2!1sen!2sus"
          ></iframe>
        </motion.div>
        <div id="why-choose-us-section" className="h-10"></div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/circles-gray.png"
            width={200}
            height={200}
            alt="Decoration circles gray"
            className="absolute -top-28 -right-16 z-0"
          />
          <motion.h1
            className="text-4xl md:text-5xl font-bold md:col-span-3 border border-gray-600 p-12 pb-20 z-50"
            variants={fadeInUp}
          >
            Zašto odabrati nas
          </motion.h1>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                className={`text-center border p-12 border-gray-600 border-t-0 ${
                  index % 2 !== 0 && "md:border-x-0"
                }`}
                variants={itemFade}
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.2 + (index * 0.1)
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <Icon className="text-5xl mx-auto mb-4" />
                </motion.div>
                <h3 className="font-bold text-xl mb-2">{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}