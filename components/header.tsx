"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
    targetId: string,
    isMobileNav: boolean = false
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      if (isMobileNav) {
        // Close the sheet
        setIsOpen(false);
        // Scroll after a brief delay to allow the sheet to close
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 300);
      } else {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const slideDown = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.header
      id="header"
      className="w-full mt-auto bg-dark text-white"
      initial="hidden"
      animate="visible"
    >
      <div className="container border-b border-gray-600 py-8 px-3 md:px-0 mx-auto flex justify-between items-center">
        <motion.div className="flex items-center gap-6" variants={slideDown}>
          <Link href="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8" />
            <span className="font-bold text-2xl">Vulkanizer</span>
          </Link>
        </motion.div>
        <motion.div className="flex items-center gap-6" variants={slideDown}>
          <motion.nav
            className="hidden md:flex items-center gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {links.map((link, index) => (
              <motion.div key={index} variants={menuItem}>
                <Link
                  href={`#${link.id}`}
                  onClick={(e) => smoothScroll(e, link.id, false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          <motion.button
            className="hidden md:inline-flex bg-accent hover:bg-accentLight transition-colors text-white font-bold py-2 px-4"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            variants={slideDown}
          >
            Rezerviraj termin
          </motion.button>
          <motion.div className="md:hidden" variants={fadeIn}>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="grid place-items-center">
                <div className="grid grid-cols-2 gap-2 place-items-center">
                  <div className="rounded-full bg-light w-2 h-2"></div>
                  <div className="rounded-full bg-light w-2 h-2"></div>
                  <div className="rounded-full bg-light w-2 h-2"></div>
                  <div className="rounded-full bg-light w-2 h-2"></div>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <motion.nav
                  className="flex flex-col items-center gap-6 mt-12"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {links.map((link, index) => (
                    <motion.div key={index} variants={menuItem}>
                      <Link
                        href={`#${link.id}`}
                        onClick={(e) => smoothScroll(e, link.id, true)}
                        className="text-dark"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </SheetContent>
            </Sheet>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
