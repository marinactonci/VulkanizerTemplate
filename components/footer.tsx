"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { IoMdArrowUp } from "react-icons/io";
import {
  RiFacebookBoxFill,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { FaEnvelope, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      name: "Usluge",
      id: "services-section",
    },
    {
      name: "O nama",
      id: "about-us-section",
    },
    {
      name: "Zašto Vulkanizer",
      id: "why-choose-us-section",
    },
    {
      name: "Recenzije",
      id: "testimonials-section",
    },
  ];

  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-0">
        <div className="md:hidden">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold mb-4">Vulkanizer</h3>
                <p>Vaš pouzdani partner za sve vrste guma.</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h4 className="font-bold mb-4">Navigacija</h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={`#${link.id}`}
                        onClick={(e) => smoothScroll(e, link.id)}
                        className="hover:text-accent transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h4 className="font-bold mb-4">Kontakt</h4>
                <p>Vulkanizerska 123</p>
                <p>10000 Zagreb</p>
                <p>Tel: 099/1234-567</p>
                <p>Email: info@vulkanizer.hr</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h4 className="font-bold mb-4">Društvene mreže</h4>
                <div className="flex space-x-4">
                  {[
                    RiFacebookFill,
                    RiTwitterXFill,
                    RiInstagramFill,
                    RiLinkedinFill,
                  ].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-2xl hover:text-accent"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="mt-8 pt-8 border-t border-gray-700 text-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p>&copy; {currentYear} Vulkanizer. Sva prava pridržana.</p>
            </motion.div>
          </div>
        </div>
        {/* Desktop Version */}
        <div className="hidden md:block">
          <motion.div
            className="grid grid-cols-2 border border-gray-600"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="p-12">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Wrench className="h-10 w-10" />
                <span className="text-3xl md:text-4xl font-bold">
                  Vulkanizer
                </span>
              </Link>
              <p>
                Vaš pouzdani partner za sve vrste guma. Pružamo profesionalnu
                uslugu zamjene, popravka i održavanja guma već više od 15
                godina.
              </p>
            </div>
            <div className="aspect-video relative overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492404069!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690574312720!5m2!1sen!2sus"
              ></iframe>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-4 border border-gray-600 border-t-0"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["Navigacija", "Kontakt", "Adresa", "Društvene mreže"].map(
              (title, index) => (
                <div
                  key={index}
                  className={`px-12 py-6 ${
                    index > 0 ? "border-l border-gray-600" : ""
                  }`}
                >
                  <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
                </div>
              )
            )}
          </motion.div>
          <motion.div
            className="grid grid-cols-4 border border-gray-600 border-t-0"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="px-12 py-6">
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={`#${link.id}`}
                      onClick={(e) => smoothScroll(e, link.id)}
                      className="hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-12 py-6 border-l border-gray-600">
              <div>
                <div className="flex items-center gap-2">
                  <FaPhoneVolume />
                  <a
                    href="tel:+385991234567"
                    className="block hover:text-accent transition-colors"
                  >
                    099/1234-567
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope />
                  <a
                    href="mailto:info@vulkanizer.hr"
                    className="block hover:text-accent transition-colors"
                  >
                    info@vulkanizer.hr
                  </a>
                </div>
              </div>
            </div>
            <div className="px-12 py-6 border-l border-gray-600">
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <p>Vulkanizerska 123, 10000 Zagreb</p>
              </div>
            </div>
            <div className="grid grid-rows-4 border-l border-gray-600">
              {[
                { Icon: RiInstagramFill, text: "Instagram" },
                { Icon: RiLinkedinFill, text: "LinkedIn" },
                { Icon: RiFacebookBoxFill, text: "Facebook" },
                { Icon: RiTwitterXFill, text: "Twitter" },
              ].map((item, index, arr) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center gap-3 px-12 py-3 hover:bg-accent transition-colors
                    ${
                      index < arr.length - 1 ? "border-b border-gray-600" : ""
                    }`}
                >
                  <item.Icon />
                  <span className="whitespace-nowrap">{item.text}</span>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex justify-between border border-gray-600 border-t-0"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="py-6 px-12">
              &copy; {currentYear} Vulkanizer. Sva prava pridržana.
            </span>
            <Link
              href={"#header"}
              onClick={(e) => smoothScroll(e, "header")}
              className="w-[73px] grid place-items-center hover:bg-accent transition-colors text-white font-bold border-l border-gray-600"
            >
              <IoMdArrowUp size={24} />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
