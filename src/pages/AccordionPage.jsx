import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "What is React?",
      content:
        "React is a JavaScript library for building fast, interactive user interfaces. It uses a component-based architecture, meaning your UI is split into reusable pieces called components. React handles UI rendering efficiently using a virtual DOM.",
    },
    {
      id: 2,
      label: "Understanding Components",
      content:
        "Components are the building blocks of any React app. They can be functional (written as functions) or class-based. Components manage their own state and props, and can be nested within each other to build complex UIs.",
    },
    {
      id: 3,
      label: "Props vs State",
      content:
        "Both props and state are used to manage data in React, but they serve different purposes: Props are passed to components from parent components and are read-only. State is managed within a component and can be changed to trigger re-renders.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
