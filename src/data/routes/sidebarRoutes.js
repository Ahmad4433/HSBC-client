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
    to: "/admin/dashboard",
  },
  {
    icon: clientProdpect,
    text: "Client/Prospect",
    to: "/admin/client-prospect",
  },
  {
    icon: overYourself,
    text: "Get Over Yourself",
    to: "/getover/yourself",
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
    to: "/admin/transaction",
  },
  {
    icon: contract,
    text: "Contract",
    to: "/admin/contract",
  },
  {
    icon: current,
    text: "Curret Conversation",
    to: "/admin/current-conversation",
  },
];

const sidebarMoreRoutes = [
  {
    icon: invitation,
    text: "Invitation Of Leads",
    to: "/admin/invitation-leads",
  },

  {
    icon: collaboration,
    text: "Collaboration",
    to: "/admin/collaboration",
  },
  {
    icon: product,
    text: "Product",
    to: "/admin/product",
  },
  {
    icon: negosiation,
    text: "Negosiation",
    to: "/admin/negosiation",
  },
  {
    icon: personalization,
    text: "Personalisation",
    to: "/admin/personalisation",
  },

  {
    icon: company,
    text: "Company",
    to: "/admin/company",
  },
];

export { sidebarRoutes, sidebarMoreRoutes };
