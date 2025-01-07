"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const testimonials = [
  {
    name: "Marko H.",
    comment:
      "Odlična i brza usluga. Došao sam bez najave s probušenom gumom, sve su riješili za manje od pola sata. Cijene su vrlo korektne!",
    image: "/user.png",
  },
  {
    name: "Ana K.",
    comment:
      "Već godinama mijenjam gume kod njih. Stručni su, brzi i uvijek spremni dati dobar savjet oko izbora novih guma. Toplo preporučujem!",
    image: "/user.png",
  },
  {
    name: "Ivan M.",
    comment:
      "Izvrsna vulkanizerska radionica! Imaju najmoderniju opremu za balansiranje, a osoblje je vrlo profesionalno i ljubazno.",
    image: "/user.png",
  },
  {
    name: "Petra B.",
    comment:
      "Super iskustvo sa zimskim gumama. Osim što su ih zamijenili, pomogli su mi i oko skladištenja ljetnih guma. Svaka čast na usluzi!",
    image: "/user.png",
  },
  {
    name: "Tomislav R.",
    comment:
      "Hvala na brzoj intervenciji na cesti! Došli su za 20 minuta i zamijenili probušenu gumu. Pravi profesionalci, svaka preporuka.",
    image: "/user.png",
  },
  {
    name: "Marina P.",
    comment:
      "Odlično iskustvo. Pristupačne cijene, kvalitetna usluga i vrlo korisni savjeti oko održavanja guma. Definitivno ću opet doći!",
    image: "/user.png",
  },
  {
    name: "Damir V.",
    comment:
      "Prvi put sam kod njih i oduševljen sam. Brza zamjena guma, precizno balansiranje i sve po vrlo pristupačnoj cijeni. Preporučujem!",
    image: "/user.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const totalSlidesDesktop = useMemo(
    () => Math.ceil(testimonials.length / 2),
    []
  );
  const totalSlidesMobile = useMemo(() => testimonials.length, []);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      window.innerWidth >= 768
        ? Math.min(prevIndex + 1, totalSlidesDesktop - 1)
        : Math.min(prevIndex + 1, totalSlidesMobile - 1)
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const slideVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="testimonials-section"
      className="py-20 bg-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-between items-center mb-20"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Iskustva naših klijenata
          </h2>
          <div className="flex space-x-2">
            <motion.button
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className={`p-2 rounded-full border border-gray-600 text-gray-600 ${
                currentIndex === 0 && "opacity-50"
              }`}
            >
              <HiOutlineArrowLongLeft size={24} />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              disabled={
                isMobile
                  ? currentIndex === totalSlidesMobile - 1
                  : currentIndex === totalSlidesDesktop - 1
              }
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className={`p-2 rounded-full border border-gray-600 text-gray-600 ${
                (isMobile
                  ? currentIndex === totalSlidesMobile - 1
                  : currentIndex === totalSlidesDesktop - 1) && "opacity-50"
              }`}
            >
              <HiOutlineArrowLongRight size={24} />
            </motion.button>
          </div>
        </motion.div>

        {/* Desktop view */}
        <div className="hidden md:block min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-2 gap-20"
            >
              {[0, 1].map((offset) => {
                const index = currentIndex * 2 + offset;
                if (index >= testimonials.length) return null;
                return (
                  <div key={index}>
                    <p className="italic">
                      &quot;{testimonials[index].comment}&quot;
                    </p>
                    <hr className="my-4 border-gray-400" />
                    <div className="flex items-center">
                      <Image
                        src={testimonials[index].image}
                        alt={testimonials[index].name}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <p className="font-bold">{testimonials[index].name}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile view */}
        <div className="md:hidden min-h-[250px]">
          <AnimatePresence mode="wait">
            {testimonials
              .slice(currentIndex, currentIndex + 1)
              .map((testimonial) => (
                <motion.div
                  key={`mobile-testimonial-${currentIndex}`}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <p className="italic">&quot;{testimonial.comment}&quot;</p>
                  <hr className="my-4 border-gray-400" />
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <p className="font-bold">{testimonial.name}</p>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
