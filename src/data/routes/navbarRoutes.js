import { PiNewspaper } from "react-icons/pi";
import { PiNewspaperClipping } from "react-icons/pi";
import { PiLineSegments } from "react-icons/pi";
import { PiMonitor } from "react-icons/pi";
import { PiMoney } from "react-icons/pi";
import { PiListDashes } from "react-icons/pi";
import { PiCurrencyGbp } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { TbCoinBitcoin } from "react-icons/tb";

const navbarRoutes = [
  {
    icon: PiNewspaper,
    text: "News",
    subRoutes: [],
    to: "/",
  },
  {
    icon: PiNewspaperClipping,
    text: "Account",
    subRoutes: [],
    to: "/user-profile",
  },
  {
    icon: PiLineSegments,
    text: "Investments",
    subRoutes: [
      {
        icon: PiMoney,
        text: "List of Invest",
        to: "/investment-list",
      },
      {
        icon: PiListDashes,
        text: "Invest History",
        to: "/user-investment-history",
      },
      {
        icon: PiCurrencyGbp,
        text: "Current Request",
        to: "/user-investment-list",
      },
    ],
  },
  {
    icon: PiMonitor,
    text: "Stock Exchange",
    subRoutes: [
      {
        text: "Historical",
        icon: MdHistory,
        to: "/",
      },
      {
        text: "Stock Market NASQ",
        icon: AiOutlineStock,
        to: "/exchange",
      },
      {
        text: "Cryptocurrency",
        icon: TbCoinBitcoin,
      },
    ],
  },
];

export default navbarRoutes;
