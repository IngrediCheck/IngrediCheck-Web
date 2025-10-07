import appStoreBadge from "../assets/images/i/appStore.svg";
import googlePlayBadge from "../assets/images/i/googlePlay.svg";

type Storefront = {
  id: "apple" | "google";
  name: string;
  url: string;
  badgeSrc: string;
  badgeAlt: string;
};

export const STORE_LINKS: Record<Storefront["id"], Storefront> = {
  apple: {
    id: "apple",
    name: "App Store",
    url: "https://apps.apple.com/us/app/ingredicheck/id6477521615",
    badgeSrc: appStoreBadge,
    badgeAlt: "Download IngrediCheck on the App Store",
  },
  google: {
    id: "google",
    name: "Google Play",
    url: "https://play.google.com/store/apps/details?id=llc.fungee.IngrediCheck",
    badgeSrc: googlePlayBadge,
    badgeAlt: "Get IngrediCheck on Google Play",
  },
};

export const STOREFRONTS: Storefront[] = Object.values(STORE_LINKS);
