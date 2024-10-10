import BlueBlock from "../../components/blue-50-50-block/blue-block";
import Contacts from "./Contacts/contacts";
import MainPageForm from "./Form/form";
import "./mainPage.css";
import MainSlider from "./MainSlider/mainSlider";
import { MapSection, MapInfo } from "./Map/map";
import Results from "./Results/results";

export default function MainPage() {
  return (
    <>
      <MainSlider />
      <Results />
      <MainPageForm />
      <BlueBlock left={MapInfo} right={MapSection} />
      <Contacts />
    </>
  );
}
