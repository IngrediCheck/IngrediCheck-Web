import newFeatureBg1 from "../assets/images/i/newFeatureBg1.svg";
import newFeatureBg2 from "../assets/images/i/newFeatureBg2.svg";
export type NewFeaturesType = {
  id: string;
  title: string;
  bg: string;
  desc: string;
};

export const newFeaturesData: NewFeaturesType[] = [
  {
    id: "3wer",
    title: "Shared Dietary Preferences",
    bg: newFeatureBg1,
    desc: "Imagine sharing your custom dietary preferences with friends and family. Jake looks forward to helping his new roommate, Pedro, shop with confidence, knowing exactly what to pick and what to avoid.",
  },
  {
    id: "4re",
    title: "Search Your Way",
    bg: newFeatureBg2,
    desc: "Tom can't wait to use IngrediCheck to find noodles at Target that fit his dietary needs. Our upcoming Product Catalog Search feature will make this a breeze.",
  },
];
