import {
  clientProdpect,
  collaboration,
  collection,
  company,
  contract,
  current,
  dashboard,
  invitation,
  negosiation,
  overYourself,
  paiment,
  personalization,
  product,
  transaction,
} from "../../assets/admin/sideBar";

const sidebarRoutes = [
  {
    icon: dashboard,
    text: "Dashboard",
    to: "/dashboard",
  },
  {
    icon: clientProdpect,
    text: "Client/Prospect",
    to: "/client-prospect",
  },
  {
    icon: overYourself,
    text: "Get Over Yourself",
    to: "/over-yourself",
  },
  {
    icon: collection,
    text: "Collection",
    to: "/collection",
  },
  {
    icon: paiment,
    text: "Paiment",
    to: "/payment",
  },

  {
    icon: transaction,
    text: "Transaction",
    to: "/transaction",
  },
  {
    icon: contract,
    text: "Contract",
    to: "/contract",
  },
  {
    icon: current,
    text: "Curret Conversation",
    to: "/current-conversation",
  },
];

const sidebarMoreRoutes = [
  {
    icon: invitation,
    text: "Invitation Of Leads",
    to: "/invitation-leads",
  },

  {
    icon: collaboration,
    text: "Collaboration",
    to: "/collaboration",
  },
  {
    icon: product,
    text: "Product",
    to: "/product",
  },
  {
    icon: negosiation,
    text: "Negosiation",
    to: "/negosiation",
  },
  {
    icon: personalization,
    text: "Personalisation",
    to: "/personalisation",
  },

  {
    icon: company,
    text: "Company",
    to: "/company",
  },
];

export { sidebarRoutes, sidebarMoreRoutes };
