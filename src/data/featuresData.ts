import featuresIcon1 from "../assets/images/i/featuresIcon1.svg";
import featuresIcon2 from "../assets/images/i/featuresIcon2.svg";
import featuresIcon3 from "../assets/images/i/featuresIcon3.svg";
import featuresIcon4 from "../assets/images/i/featuresIcon4.svg";

export type FeaturesDataType = {
  id: string;
  title: string;
  icon: string;
  desc: string;
};

export const featuresData: FeaturesDataType[] = [
  {
    id: "1re",
    title: "Personalized Dietary Preferences",
    icon: featuresIcon1,
    desc: "Enter your dietary needs in natural language, and let IngrediCheck do the rest.",
  },
  {
    id: "2ue",
    title: "Instant Barcode Analysis",
    icon: featuresIcon2,
    desc: "Scan a packaged food item's barcode for an immediate thumbs-up or thumbs-down based on your dietary profile",
  },
  {
    id: "3wer",
    title: "Picture Perfect",
    icon: featuresIcon3,
    desc: "If the barcode scan draws a blank, snap a picture. Our database will still provide an instant analysis.",
  },
  {
    id: "4pr",
    title: "Favorites List",
    icon: featuresIcon4,
    desc: "Discover, save, and recall your favorite food items anytime, making every grocery run a walk in the park.",
  },
];
