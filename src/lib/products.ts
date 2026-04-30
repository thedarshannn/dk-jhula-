import { ASSETS } from "./cloudinary";

export type ProductCategory = "jhula" | "baby" | "decor";
export type BadgeType = "best" | "new" | "sale" | "";

export interface Product {
  id: string;
  name: string;
  desc: string;
  price: string;
  img: string;
  badge: BadgeType;
  cat: ProductCategory;
}

const DEFAULT_DESC =
  "Resham doori • Washable • Warranty • 150–200kg capacity • Customize colour, size & design";

export const products: Product[] = [
  {
    id: "p1",
    name: "Royal Canopy Jhula — Pink & White",
    desc: DEFAULT_DESC,
    price: "₹4,500",
    img: ASSETS.products.p1,
    badge: "best",
    cat: "jhula",
  },
  {
    id: "p2",
    name: "Round Macramé Swing — Pink",
    desc: DEFAULT_DESC,
    price: "₹2,999",
    img: ASSETS.products.p2,
    badge: "new",
    cat: "jhula",
  },
  {
    id: "p3",
    name: "Luxury Round Daybed Swing — Red",
    desc: DEFAULT_DESC,
    price: "₹12,650",
    img: ASSETS.products.p3,
    badge: "best",
    cat: "jhula",
  },
  {
    id: "p4",
    name: "Baby Sleeping Jhula",
    desc: "Natural cotton • Wooden bead accents • Soft & safe for infants • Washable • Warranty",
    price: "₹3,999",
    img: ASSETS.products.p4,
    badge: "best",
    cat: "baby",
  },
  {
    id: "p5",
    name: "Boho Canopy Swing — Cream (Open)",
    desc: DEFAULT_DESC,
    price: "₹9,500",
    img: ASSETS.products.p5,
    badge: "new",
    cat: "jhula",
  },
  {
    id: "p6",
    name: "Boho Canopy Swing — Cream (Closed)",
    desc: DEFAULT_DESC,
    price: "₹9,500",
    img: ASSETS.products.p6,
    badge: "",
    cat: "jhula",
  },
  {
    id: "p7",
    name: "Rust Canopy Daybed Swing",
    desc: DEFAULT_DESC,
    price: "₹9,900",
    img: ASSETS.products.p7,
    badge: "best",
    cat: "jhula",
  },
  {
    id: "p8",
    name: "Cone Net Swing — Forest Green",
    desc: DEFAULT_DESC,
    price: "₹3,560",
    img: ASSETS.products.p8,
    badge: "new",
    cat: "jhula",
  },
  {
    id: "p9",
    name: "Royal Canopy Chair — Black & Gold",
    desc: DEFAULT_DESC,
    price: "₹2,500",
    img: ASSETS.products.p9,
    badge: "sale",
    cat: "jhula",
  },
  {
    id: "p10",
    name: "Bell Jhula — Hot Pink",
    desc: DEFAULT_DESC,
    price: "₹4,100",
    img: ASSETS.products.p10,
    badge: "new",
    cat: "jhula",
  },
  {
    id: "p11",
    name: "Kids Square Swing — Blue & White",
    desc: DEFAULT_DESC,
    price: "₹2,800",
    img: ASSETS.products.p11,
    badge: "new",
    cat: "jhula",
  },
  {
    id: "p12",
    name: "Macramé Ganesha Wall Art",
    desc: "Handknotted resham rope • Unique home décor • Customizable size & colour",
    price: "₹350",
    img: ASSETS.products.p12,
    badge: "best",
    cat: "decor",
  },
];

export const WHATSAPP_NUMBER = "916351551471";

export const getWhatsAppOrderUrl = (productName: string, price: string) => {
  const msg = encodeURIComponent(
    `Hi DK Jhula! 🙏\nI'd like to order:\n*${productName}* (${price})\nPlease share availability, customization options & delivery details.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
};

export const getWhatsAppUrl = () => `https://wa.me/${WHATSAPP_NUMBER}`;

export const categories = [
  { key: "all" as const, label: "All Items" },
  { key: "jhula" as const, label: "Jhulas & Swings" },
  { key: "baby" as const, label: "Baby Jhula" },
  { key: "decor" as const, label: "Home Decor" },
];
