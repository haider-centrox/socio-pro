import { builder, Builder } from "@builder.io/react";
import SocieProHero from "./components/Counter/Hero";
import Header from "./components/Header";


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(SocieProHero, {
  name: "SocieProHero",
  inputs: [
    {
      name: "logoText",
      type: "string",
      defaultValue: "Socie-Pro AI",
    },
    {
      name: "headline",
      type: "string",
      defaultValue: "Handle Every Client, Campaign, and Social Media Channel in One Place",
    },
    {
      name: "subHeadline",
      type: "string",
      defaultValue: "Handle Every Client, Campaign, and Social Media Channel in One Place",
    },
    {
      name: "highlightedText",
      type: "string",
      defaultValue: "SociePRO–AI",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Start for FREE today →",
    },
    {
      name: "initialCount",
      type: "number",
      defaultValue: 0,
      friendlyName: "Counter Initial Count",
      description: "Set the initial value of the counter",
    },
  ],
});

Builder.registerComponent(Header, {
  name: "Header",
  inputs: [
    {
      name: "logoText",
      type: "string",
      defaultValue: "Socie-Pro AI",
      friendlyName: "Logo Text",
    },
    {
      name: "navItems",
      type: "list",
      defaultValue: [
        { label: "About Us", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
      subFields: [
        {
          name: "label",
          type: "string",
          required: true,
          friendlyName: "Label",
        },
        {
          name: "href",
          type: "string",
          required: true,
          friendlyName: "Link URL",
        },
      ],
      friendlyName: "Navigation Items",
      description: "Add, edit or remove navigation links",
    },
  ],
});
