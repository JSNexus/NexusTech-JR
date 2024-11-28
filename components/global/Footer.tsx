import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="text-left mb-5 sm:mb-0"
          >
            <h4 className="uppercase text-fun-gray text-sm font-bold">
              {item.title}
            </h4>
            <div>
              {item.links.map((link, idx) => (
                <div key={`${link.name}-${idx}`} className="my-4">
                  {link.leavesWebsite ? (
                    <a
                      href={link.link}
                      target="_blank"
                      className="items-center flex"
                    >
                      {link.icon && (
                        <span className="pr-2 -mb-1">
                          <Image
                            src={link.icon}
                            alt={`${link.name} ícone`}
                            width={20}
                            height={20}
                          />
                        </span>
                      )}
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.link}>{link.name}</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
          <h4 className="uppercase text-fun-gray text-sm font-bold">
            Support My Work
          </h4>
          <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
            {footer.support.buymeacoffee && (
              <a
                href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                target="_blank"
              >
                <Image
                  src="/static/misc/buy-me-a-coffee.svg"
                  alt="Buy Me a Coffee"
                  width={48}
                  height={48}
                />
              </a>
            )}
            {footer.support.paypal && (
              <a
                href={`https://paypal.me/${footer.support.paypal}`}
                target="_blank"
              >
                <Image
                  src="/static/misc/paypal.svg"
                  alt="PayPal"
                  width={48}
                  height={48}
                />
              </a>
            )}
            <p className="text-fun-gray text-xs pt-1">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <div className="flex flex-col items-center justify-center">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width={26}
                height={26}
                alt="React"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                width={40}
                height={40}
                alt="NextJS"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                width={26}
                height={26}
                alt="TailwindCSS"
              />
            </div>
          </div>
          <div className="mt-2 text-xs">
            Made by{" "}
            <a
              href="mailto:contact@braydentw.io"
              className="text-fun-gray-light font-medium"
            >
              Brayden Wright
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
      <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <a
          className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50"
          href="https://github.com/braydentw/braydentw.io"
          target="_blank"
          rel="nooreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
